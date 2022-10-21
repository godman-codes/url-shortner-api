from rest_framework import serializers
from .models import UrlsShortener

class UrlSerializers(serializers.ModelSerializer):
    short_link = serializers.CharField(read_only=True)
    
    class Meta:
        model = UrlsShortener
        fields = '__all__'        