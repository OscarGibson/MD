from rest_framework import serializers
from .models import Category, Product


class ProductSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

    products = ProductSerialzer(many=True)


