from django.urls import path
from .views import ShortenerCreateView, ShortenerDestroyView, ShortenerListAPIView, Redirector, ShortenerDetailView, shortenerUpdateView

app_name = 'api'

urlpatterns = [
    path('api/', ShortenerListAPIView.as_view(), name='all links'),
    path('api/create/', ShortenerCreateView.as_view(), name='Create Link'),
    path('<str:shortener_link>', Redirector.as_view(), name='redirector'),
    path('api/details/<int:pk>/', ShortenerDetailView.as_view(), name='Link details'),
    path('api/delete/<int:pk>/', ShortenerDestroyView.as_view(), name='Link delete'),
    path('api/update/<int:pk>/', shortenerUpdateView.as_view(), name='Link Update'),
]