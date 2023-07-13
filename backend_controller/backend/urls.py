from django.urls import path
from .views import main

#Create your views here.

urlpatterns = [
    path('', main)
]