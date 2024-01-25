"""
URL configuration for backend_controller project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

#NOTICE --- WHEN TRYING TO MIGRATE THE DATABASE MAKE SURE TO COMMENT OUT LINE 25
#AFTER YOU ARE DONE UNCOMMENT LINE 25

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('backend/', include('backend.urls')),
    path('', include('frontend.urls'))
    # Uncomment this and the entry in `INSTALLED_APPS` if you wish to use the Django admin feature:
    # https://docs.djangoproject.com/en/5.0/ref/contrib/admin/
    # path("admin/", admin.site.urls),
]
