from django.contrib import admin
from .models import Order, OrderProduct


class OrderAdmin(admin.ModelAdmin):
    class Meta:
        model = Order

admin.site.register(Order, OrderAdmin)


class OrderProductAdmin(admin.ModelAdmin):
    class Meta:
        model = OrderProduct

admin.site.register(OrderProduct, OrderProductAdmin)

'''
{
    "user_name": "Ostap",
    "phone_number": "+380637274721",
    "address": "some address st. 62, 98",
    "region": "lviv",
    "comment": "nothing",
    "payment_method": "1",
    "compact_products": [{
        "id": 1,
        "count": 3
    }, {
        "id": 2,
        "count": 1
    }]
}
'''