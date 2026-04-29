from django.urls import path
from articles.views import home, about


urlpatterns = [
    path('', home, name='articles'),
    path('about/', about, name='about'),
]