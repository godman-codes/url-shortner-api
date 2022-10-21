from django.urls import path
from .views import ShortenerCreateView, ShortenerListAPIView, Redirector

app_name = 'api'

urlpatterns = [
    path('', ShortenerListAPIView.as_view(), name='all links'),
    path('create/', ShortenerCreateView.as_view(), name='Create Link'),
    path('<str:shortener_link>', Redirector.as_view(), name='redirector')
]