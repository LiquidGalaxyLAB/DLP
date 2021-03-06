import os
import re

from django.core.management.base import BaseCommand, CommandError

from dlp.file_manager.file_manager import set_network_variables, \
    set_temperature_restriction
from dlp.galaxy_comunication.galaxy_comunication import send_kmls
from dlp.kml_manager.kml_generator import create_logisticcenters_list, \
    create_droppoints_list, create_layouts_list, create_kml_folders, \
    remove_kml_folders
from dlp.models import Package, Transport, Drone

PATTERN_IP = "^([m01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]" + \
             "\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." + \
             "([01]?\\d\\d?|2[0-4]\\d|25[0-5])$"

PATTERN_IPADDR = "^([m01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?" + \
                 "|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])" + \
                 "\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5]):(\d{1,5})$"


def write_ip(ip_galaxy, site_url):
    set_network_variables(site_url, ip_galaxy)


def get_ip():
    f = os.popen('hostname -I')
    data = f.read().split(' ')
    return data[0]


class Command(BaseCommand):
    help = 'Set the <ip> of the galaxy Liquid system.'

    def add_arguments(self, parser):
        parser.add_argument('ip', nargs='?',
                            help='Mandatory galaxy liquid ip address')
        parser.add_argument('addrport', nargs='?',
                            help='Optional port number, or ipaddr:port')

    def handle(self, *args, **options):
        try:
            parsed_ip = options['ip']
            pattern_ip = re.compile(PATTERN_IP)
            pattern_ipaddr = re.compile(PATTERN_IPADDR)
            if pattern_ip.match(parsed_ip) or pattern_ipaddr.match(parsed_ip):
                if not options['addrport']:
                    app_ip = "{ip}:{port}".format(ip=get_ip(), port=8000)
                else:
                    app_ip = options['addrport']
                site_url = "http://{ip}/".format(ip=app_ip)
                write_ip(parsed_ip, site_url)
                self.stdout.write(self.style.SUCCESS(
                    'Liquid Galaxy is on the ip: "%s"' % parsed_ip))
                self.create_kmls_directories()
                # Remove possible KML in galaxy sending kmls.txt empty
                send_kmls()
                # Create Static KML
                self.create_base_kml()
                # Remove DB to evade problems in demo.
                self.reset_db()
                set_temperature_restriction("true")
                # Run the system
                os.system("bash rundlp {ip} {galaxy_ip}".format(
                    ip=app_ip, galaxy_ip=parsed_ip)
                )
            else:
                self.stdout.write(
                    self.style.error(
                        'Ip "%s" have an incorrect format' % parsed_ip))
        except:
            raise CommandError('DLP cannot be raised')

    def create_kmls_directories(self):
        self.stdout.write("Erasing old KMl folders")
        remove_kml_folders()
        self.stdout.write("Creating new KMl folders")
        create_kml_folders()

    def create_base_kml(self):
        create_logisticcenters_list()
        create_droppoints_list()
        create_layouts_list()
        self.stdout.write("KMLs files done")

    def reset_db(self):
        Package.objects.all().delete()
        Transport.objects.all().delete()
        for drone in Drone.objects.all():
            drone.status = Drone.DroneStatus.WAITING
            drone.save()
