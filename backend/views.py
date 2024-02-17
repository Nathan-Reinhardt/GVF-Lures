from django.shortcuts import render, get_object_or_404
from django.core.mail import send_mail
from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist

from backend.models import Profile, User
from backend.serializer import UserSerializer, MyTokenObtainPairSerializer, RegisterSerializer

from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

# Create your views here.
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = ([AllowAny])
    serializer_class = RegisterSerializer

# Get All Routes
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/backend/token/',
        '/backend/token/refresh/',
        '/backend/register/'
    ]
    return Response(routes)

# Check if an account already exists
@api_view(['GET'])
def email_check(request):
    email = request.query_params.get('email')
    user = User.objects.get(email=email)
    # work on this more
    # keeps saying success in email
    if (user):
        return Response("Email exists.", status=status.HTTP_200_OK)
    else:
        return Response("Email doesn't exist.", status=status.HTTP_404_NOT_FOUND)

# Function to update user verification status
# use later for shop page for cart
@api_view(['POST'])
def update_verification(request):
    # Extract data from request body
    user_id = request.data.get('user_id')
    verified_status = request.data.get('verified_status')

    # Retrieve the user's profile instance
    profile = get_object_or_404(Profile, id=user_id)
    profile.verified = verified_status
    profile.save()

    return Response({'message': 'Verification status updated successfully'}, status=status.HTTP_200_OK)

# Function to send automated support emails to users
# update later to choose what type of email depending on what type of information is passed
@api_view(['POST'])
def send_email_support(request):
    recipient_email = request.data.get('recipient_email')

    send_mail(
        'Reset Password',
        'Hello world',
        settings.EMAIL_HOST_USER,
        [recipient_email],
        fail_silently=False,
    )

# Dashboard to test GET and POST in postman only
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def dashboard(request):
    if request.method == "GET":
        response = f"Hey {request.user}, You are seeing a GET response"
        return Response({'response': response}, status=status.HTTP_200_OK)
    elif request.method == "POST":
        text = request.POST.get("text")
        response = f"Hey {request.user}, your text is {text}"
        return Response({'response': response}, status=status.HTTP_200_OK)
    
    return Response({}, status=status.HTTP_400_BAD_REQUEST)