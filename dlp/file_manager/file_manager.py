import os
import ConfigParser

from DLP.settings import PROJECT_ROOT
from dlp.models import Package

DEMO = os.path.join(PROJECT_ROOT + "/demo")
CONFIG = ConfigParser.SafeConfigParser()
CONFIG_FILE = os.path.join(PROJECT_ROOT + "/config")


def set_network_variables(site_host, galaxy_ip):
    if not CONFIG.has_section('Network'):
        CONFIG.add_section('Network')
    CONFIG.set('Network', 'site_host', site_host)
    CONFIG.set('Network', 'galaxy_ip', galaxy_ip)
    with open(CONFIG_FILE, 'wb') as configfile:
        CONFIG.write(configfile)


def get_site_url():
    CONFIG.read(CONFIG_FILE)
    return CONFIG.get('Network', 'site_host')


def get_galaxy_ip():
    CONFIG.read(CONFIG_FILE)
    return CONFIG.get('Network', 'galaxy_ip')


def demo():
    with open(DEMO) as f:
        next(f)
        for line in f:
            values = line.split(';')
            package = Package(
                name=values[0], style_url_id=values[1], drop_point_id=values[2]
            )
            package.save()
    f.close()


def set_temperature_availability(city, value):
    if not CONFIG.has_section('Temperature'):
        CONFIG.add_section('Temperature')
    CONFIG.set('Temperature', city, value)
    with open(CONFIG_FILE, 'wb') as configfile:
        CONFIG.write(configfile)


def has_temperature_availability(city):
    return CONFIG.has_option('Temperature', city)


def get_temperature_availability(city):
    CONFIG.read(CONFIG_FILE)
    return CONFIG.get('Temperature', city)


def set_temperature_restriction(value):
    if not CONFIG.has_section('Temperature'):
        CONFIG.add_section('Temperature')
    print "setting"
    CONFIG.set('Temperature', 'restriction', value)
    print "writting"
    with open(CONFIG_FILE, 'wb') as configfile:
        CONFIG.write(configfile)


def get_temperature_restriction():
    CONFIG.read(CONFIG_FILE)
    return CONFIG.getboolean('Temperature', 'restriction')