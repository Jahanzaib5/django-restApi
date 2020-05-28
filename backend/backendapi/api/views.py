from django.shortcuts import render

from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer, BooksSerializer
from .models import Books

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer


class BooksViewSet(viewsets.ModelViewSet):
	queryset = Books.objects.all()
	serializer_class = BooksSerializer
	authentication_classes = [TokenAuthentication, ]
	permission_classes = [IsAuthenticated, ]