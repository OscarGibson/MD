from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin
from .models import Menu


class MenuAdmin(SortableAdminMixin, admin.ModelAdmin):
    class Meta:
        model = Menu


admin.site.register(Menu, MenuAdmin)
