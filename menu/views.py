from django.http import HttpResponse
from django.template import loader
from .models import Menu


def index(request):
    first, *items = Menu.objects.all()
    template = loader.get_template('menu/index.html')
    context = {
        'first': first,
        'items': items,
    }

    return HttpResponse(template.render(context, request))
