from rest_framework import serializers
from .models import UrlsShortener

class UrlSerializers(serializers.ModelSerializer):
    short_link = serializers.CharField(read_only=True)
    
    class Meta:
        model = UrlsShortener
        fields = [
            'id',
            'short_link',
            'original_link',
        ]

class UrlSerializersDetails(UrlSerializers):
    visited = serializers.IntegerField(read_only=True)
    class Meta:
        model = UrlsShortener
        fields = [
            'id',
            'short_link',
            'original_link',
            'visited',
        ]