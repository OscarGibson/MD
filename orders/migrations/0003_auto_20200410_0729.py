# Generated by Django 3.0.5 on 2020-04-10 07:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0002_auto_20200410_0728'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='region',
            field=models.CharField(choices=[('lviv', 'Львів та Брюховичі'), ('lviv region', 'Околиці Львова'), ('by-client', 'Самовивіз')], max_length=16),
        ),
    ]
