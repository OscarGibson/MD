from django.conf import settings
from django.db import models
from cloudinary.models import CloudinaryField


POINTS = (
    ('г', 'грам'),
    ('мл', 'мл'),
)

class Product(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField(blank=True)
    price = models.FloatField()
    weight = models.IntegerField()
    weight_points = models.CharField(max_length=8, choices=POINTS)
    available = models.BooleanField(default=True)
    image = CloudinaryField(
        f'{settings.UPLOADS_PATH}/products',
        blank=True,
        null=True
    )
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    my_ordering = models.PositiveIntegerField(default=0, blank=False, null=False)

    def __str__(self):
        return f'{self.name} - {self.category.name}'

    class Meta:
        verbose_name = "Продукт"
        verbose_name_plural = "Продукти"
        ordering = ['my_ordering']


class Category(models.Model):
    name = models.CharField(max_length=64)
    my_ordering = models.PositiveIntegerField(default=0, blank=False, null=False)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Категорія"
        verbose_name_plural = "Категорії"
        ordering = ['my_ordering']

    @property
    def products(self):
        return Product.objects.filter(category=self)
