from django.shortcuts import redirect
from rest_framework.views import View, Response, status
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView
from .serializers import UrlSerializers, UrlSerializersDetails
from .models import UrlsShortener
from django.conf import settings
from rest_framework.permissions import AllowAny

class ShortenerListAPIView(ListAPIView):
    queryset = UrlsShortener.objects.all()
    serializer_class = UrlSerializers

    def get_queryset(self):
        return UrlsShortener.objects.filter(owner=self.request.user).all()

class ShortenerCreateView(CreateAPIView):
    permission_classes = [AllowAny]
    queryset = UrlsShortener.objects.all()
    serializer_class = UrlSerializers

    def perform_create(self, serializer):
        if not self.request.user.id:
            serializer.save()
        else:
            serializer.save(owner=self.request.user)


class Redirector(View):
    def get(self, request, shortener_link, *args, **kwargs):
        shortener_link = settings.HOST_URL + self.kwargs['shortener_link']
        if not UrlsShortener.objects.filter(
            short_link=shortener_link
            ).exists():
            return Response({'error':'this url cannot be found'}, status=status.HTTP_404_NOT_FOUND
            )
        link = UrlsShortener.objects.get(
            short_link=shortener_link
            )
        redirect_link = link.original_link
        link.increase_visit_count()
        return redirect(redirect_link)

class ShortenerDetailView(RetrieveAPIView):
    queryset = UrlsShortener.objects.all()
    serializer_class = UrlSerializersDetails

    def get_queryset(self):
        return UrlsShortener.objects.filter(owner=self.request.user).all()


class ShortenerDestroyView(DestroyAPIView):
    queryset = UrlsShortener.objects.all()
    serializer_class = UrlSerializersDetails

    def get_queryset(self):
        return UrlsShortener.objects.filter(owner=self.request.user).all()

class shortenerUpdateView(UpdateAPIView):
    queryset = UrlsShortener.objects.all()
    serializer_class = UrlSerializers

    def get_queryset(self):
        return UrlsShortener.objects.filter(owner=self.request.user).all()