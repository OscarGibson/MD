import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

application = get_wsgi_application()

from django.contrib.auth import get_user_model

User = get_user_model()
try:
    User.objects.create_superuser(os.getenv('ADMIN_NAME'), os.getenv('ADMIN_EMAIL'), os.getenv('ADMIN_PASSWORD'))
except Exception as exc:
    print(exc)
else:
    print(os.getenv('ADMIN_NAME'), os.getenv('ADMIN_EMAIL'), os.getenv('ADMIN_PASSWORD'))
