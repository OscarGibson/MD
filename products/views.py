from rest_framework import generics
from rest_framework import viewsets
from rest_framework import mixins
from .models import Product, Category
from .serializers import CategorySerializer


class ProductsAPIView(viewsets.ReadOnlyModelViewSet):

    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.all()
