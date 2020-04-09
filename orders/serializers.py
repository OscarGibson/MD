from rest_framework import serializers
from .models import Order


class CompactProductSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    count = serializers.IntegerField()


class OrderSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('user_name', 'phone_number', 'address',
            'region', 'comment', 'payment_method', 'compact_products')

    compact_products = CompactProductSerializer(many=True)
