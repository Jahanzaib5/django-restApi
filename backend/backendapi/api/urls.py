from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from django.urls import path
from .views import UserViewSet, BooksViewSet


router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('books', BooksViewSet)

urlpatterns = [
    path('', include(router.urls)),
]