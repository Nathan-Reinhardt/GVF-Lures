from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path
from backend import views

#Create your views here.

urlpatterns = [
    path("token/", views.MyTokenObtainPairView.as_view()),
    path("token/refresh/", TokenRefreshView.as_view()),
    path("register/", views.RegisterView.as_view()),
    path("update_verification/", views.update_verification),
    path("send_mail/", views.send_mail),
    path('email-check/', views.email_check, name='email_check'),
    path("dashboard/", views.dashboard),
    path('', views.getRoutes)
]