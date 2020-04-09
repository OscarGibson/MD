from django.contrib import admin
from .models import Product, Category


class ProductAdmin(admin.ModelAdmin):
    class Meta:
        model = Product

admin.site.register(Product, ProductAdmin)


class CategoryAdmin(admin.ModelAdmin):
    class Meta:
        model = Category

admin.site.register(Category, CategoryAdmin)
