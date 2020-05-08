from django.conf import settings
from django.db import models


class Menu(models.Model):
    '''Menu model'''
    photo = models.ImageField(f'{settings.UPLOADS_PATH}/menu')
    ordering = models.PositiveIntegerField(default=0, blank=False, null=False)
    name = models.CharField(max_length=32)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Меню"
        verbose_name_plural = "Сторінки меню"
        ordering = ['ordering']
