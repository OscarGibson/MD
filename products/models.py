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
        'uploads/products',
        blank=True,
        null=True
    )
    category = models.ForeignKey('Category', on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self):
        return self.name

    @property
    def products(self):
        return Product.objects.filter(category=self)
