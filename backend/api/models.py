from django.db import models
from random import choices
from string import ascii_letters
from django.conf import settings

class UrlsShortener(models.Model):
    original_link = models.URLField()
    short_link = models.URLField()

    def shortener(self):
        while True:
            random_strings = ''.join(choices(ascii_letters, k=6))
            new_url = settings.HOST_URL + random_strings
            
            if not UrlsShortener.objects.filter(short_link=new_url).exists():
                break
        return new_url
            
    def save(self, *args, **kwargs):
        if not self.short_link:
            new_link = self.shortener()
            self.short_link = new_link
        return super().save(*args, **kwargs)
        
    def __str__(self) -> str:
        return self.original_link
    