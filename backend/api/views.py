from django.shortcuts import redirect
from rest_framework.views import View, Response, status
from rest_framework.generics import CreateAPIView, ListAPIView
from .serializers import UrlSerializers
from .models import UrlsShortener
from django.conf import settings

class ShortenerListAPIView(ListAPIView):
    queryset = UrlsShortener.objects.all()
    serializer_class = UrlSerializers

class ShortenerCreateView(CreateAPIView):
    serializer_class = UrlSerializers

class Redirector(View):
    def get(self, request, shortener_link, *args, **kwargs):
        shortener_link = settings.HOST_URL + self.kwargs['shortener_link']
        if not UrlsShortener.objects.filter(
            short_link=shortener_link
            ).exists():
            return Response({'error':'this url cannot be found'}, status=status.HTTP_404_NOT_FOUND
            )
        redirect_link = UrlsShortener.objects.filter(
            short_link=shortener_link
            ).first().original_link
        return redirect(redirect_link)
