# Generated by Django 4.1.1 on 2022-11-07 12:25

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_urlsshortener_visited'),
    ]

    operations = [
        migrations.AddField(
            model_name='urlsshortener',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2022, 11, 7, 13, 25, 2, 249233)),
        ),
    ]
