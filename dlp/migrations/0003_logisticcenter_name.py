# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-06-07 14:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dlp', '0002_auto_20160606_1722'),
    ]

    operations = [
        migrations.AddField(
            model_name='logisticcenter',
            name='name',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
