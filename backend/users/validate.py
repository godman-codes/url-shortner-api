from rest_framework import serializers
from .models import UserAccount

def validate_email(email):
    qs = UserAccount.objects.filter(email__iexact=email)

    if qs.exists():
        raise serializers.ValidationError('email already exists')
    return email