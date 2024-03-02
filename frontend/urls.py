from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('contact', index),
    path('gallery', index) ,
    path('lakes', index),
    path('shop', index),

    # Paths currently not being used below

    #path('dashboard', index),
    #path('login', index),
    #path('signup', index),
    #path('profile', index),
    #path('forgot-password', index),
]
