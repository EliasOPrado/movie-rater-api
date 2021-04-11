from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=32)
    description = models.TextField(max_length=360)

    """
    This function will be used as
    a MovieSerializer fields

    It will be: title, description, no_of_ratings
    """
    def no_of_ratings(self):
        # local vars
        ratings = Rating.objects.filter(movie=self)
        return len(ratings)

    """
    This function will be used as
    a MovieSerializer fields

    It will be: title, description, no_of_ratings, avg_rating
    """

    def avg_rating(self):
        sum = 0
        ratings = Rating.objects.filter(movie=self)
        # add ratings to sum
        for rating in ratings:
            sum += rating.stars
        if len(ratings) > 0:
            return int(sum / len(ratings))
        else:
            return 0


    def __str__(self):
        return self.title

class Rating(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    stars = models.IntegerField(validators=[
        MinValueValidator(1), 
        MaxValueValidator(5)]
        )
    
    class Meta:
        unique_together = (('user', 'movie'),)
        index_together = (('user', 'movie'),)
    
    def __str__(self):
        return '{0}'.format(self.movie)
