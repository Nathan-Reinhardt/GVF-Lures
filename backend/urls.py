from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path
from backend import views

#Create your views here.

urlpatterns = [
    path("token/", views.MyTokenObtainPairView.as_view()),
    path("token/refresh/", TokenRefreshView.as_view()),
    path("register/", views.RegisterView.as_view()),
    path("ip_address_check/", views.getIpAddress),
    path("update_verification/", views.update_verification),
    path("send_email/", views.send_email_support),
    path('email_check/', views.email_check),
    path("dashboard/", views.dashboard),
    path('', views.getRoutes)
]