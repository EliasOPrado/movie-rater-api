from rest_framework.viewsets import ModelViewSet
from .models import Movie, Rating
from .serializers import MovieSerializers, RatingSerializers

# Create your views here.
class MovieViewSet(ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializers

class RatingViewSet(ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializers