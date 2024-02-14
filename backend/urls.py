from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path
from backend import views

#Create your views here.

urlpatterns = [
    path("token/", views.MyTokenObtainPairView.as_view()),
    path("token/refresh/", TokenRefreshView.as_view()),
    path("register/", views.RegisterView.as_view()),
    path("update_verification/", views.update_verification),
    path("dashboard/", views.dashboard),
    path('', views.getRoutes)
]