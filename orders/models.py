from django.db import models


REGIONS = (
    ('lviv', 'Львів'),
    ('lviv region', 'Околиці Львова'),
    ('by-client', 'Самовивіз')
)

PAYMENTH_METHODS = (
    ('1', 'Готівка'),
    ('2', 'Термінал'),
)


class OrderProduct(models.Model):
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE)
    count = models.PositiveIntegerField()

    def __str__(self):
        return f'{self.product.name} - {self.count}'


class Order(models.Model):
    user_name = models.CharField(max_length=64)
    phone_number = models.CharField(max_length=12)
    address = models.CharField(max_length=32)
    region = models.CharField(max_length=16, choices=REGIONS)
    comment = models.TextField(blank=True)
    payment_method = models.CharField(max_length=16, choices=PAYMENTH_METHODS)
    products = models.ManyToManyField('OrderProduct')
    created_at = models.DateTimeField(auto_now_add=True)
    total_count = models.PositiveIntegerField()
    total_price = models.FloatField()

    @property
    def region_normal(self):
        for region in REGIONS:
            if region[0] == self.region:
                return region[1]

    @property
    def payment_method_normal(self):
        for payment_method in PAYMENTH_METHODS:
            if payment_method[0] == self.payment_method:
                return payment_method[1]

    def __str__(self):
        return f'{self.pk} - {self.address} - {self.user_name}'
