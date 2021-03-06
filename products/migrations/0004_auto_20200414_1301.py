# Generated by Django 3.0.5 on 2020-04-14 13:01

from django.db import migrations, models


def reorder_products(apps, schema_editor):
    Product = apps.get_model("products", "Product")
    order = 0
    for item in Product.objects.all():
        order += 1
        item.my_ordering = order
        item.save()


def reorder_products_reverse(apps, schema_editor):
    Product = apps.get_model("products", "Product")
    for item in Product.objects.all():
        item.my_ordering = 0
        item.save()


def reorder_categories(apps, schema_editor):
    Category = apps.get_model("products", "Category")
    order = 0
    for item in Category.objects.all():
        order += 1
        item.my_ordering = order
        item.save()


def reorder_categories_reverse(apps, schema_editor):
    Category = apps.get_model("products", "Category")
    for item in Category.objects.all():
        item.my_ordering = 0
        item.save()


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_auto_20200410_1033'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'ordering': ['my_ordering'], 'verbose_name': 'Категорія', 'verbose_name_plural': 'Категорії'},
        ),
        migrations.AlterModelOptions(
            name='product',
            options={'ordering': ['my_ordering'], 'verbose_name': 'Продукт', 'verbose_name_plural': 'Продукти'},
        ),
        migrations.AddField(
            model_name='category',
            name='my_ordering',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='product',
            name='my_ordering',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.RunPython(reorder_categories, reorder_categories_reverse),
        migrations.RunPython(reorder_products, reorder_products_reverse),
    ]
