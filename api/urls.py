"""
Url from API app
"""

from django.contrib import admin
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import MovieViewSet, RatingViewSet, UserViewSet

router = routers.DefaultRouter()
router.register(r'movie', MovieViewSet, basename='movie')
router.register(r'rating', RatingViewSet, basename='rating')
router.register(r'user', UserViewSet, basename='user')

urlpatterns = [
    path('',include(router.urls) ),
]
