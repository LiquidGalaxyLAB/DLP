# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-06-06 17:22
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dlp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='drone',
            old_name='name',
            new_name='model',
        ),
        migrations.RemoveField(
            model_name='logisticcenter',
            name='name',
        ),
        migrations.AlterField(
            model_name='drone',
            name='logistic_center',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='drone', to='dlp.LogisticCenter'),
        ),
        migrations.AlterField(
            model_name='droppoint',
            name='logistic_center',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dropoint', to='dlp.LogisticCenter'),
        ),
        migrations.AlterField(
            model_name='logisticcenter',
            name='city',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='logisticcenter', to='dlp.City'),
        ),
        migrations.AlterField(
            model_name='package',
            name='dropPoint',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='package', to='dlp.DropPoint'),
        ),
        migrations.AlterField(
            model_name='package',
            name='logistic_center',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='package', to='dlp.LogisticCenter'),
        ),
        migrations.AlterField(
            model_name='transport',
            name='drone',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='transport', to='dlp.Drone'),
        ),
        migrations.AlterField(
            model_name='transport',
            name='package',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transport', to='dlp.Package'),
        ),
    ]
