from django.db import migrations, models


def reorder_products(apps, schema_editor):
    Category = apps.get_model("products", "Category")
    Product = apps.get_model("products", "Product")
    order = 0
    for category in Category.objects.order_by('my_ordering').all():
        for product in Product.objects.filter(category=category):
            order += 1
            product.my_ordering = order
            product.save()


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_auto_20200414_1301'),
    ]

    operations = [
        migrations.RunPython(reorder_products, lambda x,y:None),
    ]
