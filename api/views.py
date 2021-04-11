from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from .models import Movie, Rating
from rest_framework.decorators import action
from .serializers import MovieSerializers, RatingSerializers
from rest_framework.response import Response

# Create your views here.
class MovieViewSet(ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializers

    @action(detail=True, methods=['POST'])
    def rate_movie(self, request, pk=None):
        response = {'message': 'its working'}
        return Response(response, status=status.HTTP_200_OK)

class RatingViewSet(ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializers