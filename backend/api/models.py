from django.db import models
from random import choices
from string import ascii_letters
from django.conf import settings
from users.models import UserAccount
from datetime import datetime

class UrlsShortener(models.Model):
    original_link = models.URLField()
    short_link = models.URLField()
    owner = models.ForeignKey( UserAccount, on_delete=models.CASCADE, null=True, blank=True,)
    visited = models.IntegerField(default=0)
    date_created = models.DateTimeField(default=datetime.now())

    def increase_visit_count(self):
        self.visited = self.visited + 1
        self.save()
        return

    def shortener(self):
        while True:
            random_strings = ''.join(choices(ascii_letters, k=6))
            new_url = settings.HOST_URL_SHORTENER + random_strings
            
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
    