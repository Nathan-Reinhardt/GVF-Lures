"""
WSGI config for backend_controller project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os
from django.core.wsgi import get_wsgi_application
from whitenoise import WhiteNoise

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend_controller.backend_controller.settings')

application = get_wsgi_application()

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# Add WhiteNoise for serving static files
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
application = WhiteNoise(application, root=STATIC_ROOT)
application.add_files(STATIC_ROOT, prefix='more-files/')
