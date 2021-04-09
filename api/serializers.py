from rest_framework.serializers import ModelSerializer
from .models import Movie, Rating

class MovieSerializers(ModelSerializer):
    class Meta:
        model = Movie
        fields = [
            'id',
            'title',
            'description'
        ]

class RatingSerializers(ModelSerializer):
    class Meta:
        model = Rating
        fields = [
            'id',
            'movie',
            'user',
            'stars'
        ]
