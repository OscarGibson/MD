# Generated by Django 3.0.5 on 2020-04-09 10:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='OrderProduct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.PositiveIntegerField()),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.Product')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(max_length=64)),
                ('phone_number', models.CharField(max_length=12)),
                ('address', models.CharField(max_length=32)),
                ('region', models.CharField(choices=[('lviv', 'Lviv'), ('lviv region', "Lviv's region")], max_length=16)),
                ('comment', models.TextField(blank=True)),
                ('payment_method', models.CharField(choices=[('1', 'Cash'), ('2', 'Terminal')], max_length=16)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('total_count', models.PositiveIntegerField()),
                ('total_price', models.FloatField()),
                ('products', models.ManyToManyField(to='orders.OrderProduct')),
            ],
        ),
    ]