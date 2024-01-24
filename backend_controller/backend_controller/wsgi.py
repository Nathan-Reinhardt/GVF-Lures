"""
WSGI config for backend_controller project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os
import sys

from django.core.wsgi import get_wsgi_application

# Get the directory containing the wsgi.py file (two levels up)
project_directory = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Add the project's root directory to the Python path
sys.path.insert(0, project_directory)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend_controller.backend_controller.settings')

application = get_wsgi_application()
