from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin
from .models import Product, Category


class ProductAdmin(SortableAdminMixin, admin.ModelAdmin):
    class Meta:
        model = Product

admin.site.register(Product, ProductAdmin)


class CategoryAdmin(SortableAdminMixin, admin.ModelAdmin):
    class Meta:
        model = Category

admin.site.register(Category, CategoryAdmin)
