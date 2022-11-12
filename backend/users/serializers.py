from rest_framework import serializers
from .models import UserAccount
from .validate import validate_email

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=100, required=True, validators=[validate_email])
    last_name: serializers.CharField(required=True, max_length=50)
    first_name: serializers.CharField(required=True, max_length=50)
    password = serializers.CharField(write_only=True, min_length=6, required=True)
    re_password = serializers.CharField(write_only=True, required=True)
    class Meta:
        model = UserAccount
        fields = [
            'id',
            'email',
            'first_name',
            'last_name',
            'password',
            're_password',
        ]

    def create(self, validated_data):
        email = validated_data.pop('email')
        password = validated_data.pop('password')
        user = UserAccount.objects.create_user(
            email=email, password=password, **validated_data
            )
        # At this point, user is a User object that has already been
        # saved to the database. You can continue to change its 
        # attributes if you want to change other fields.

        # user.first_name = validated_data['first_name']
        # user.last_name  = validated_data['last_name']
        # user.save()
        return user


    def validate(self, attrs):
        
        # password_1 = attrs.get('password')
        # password_2 = attrs.get('re_password')

        if attrs['password'] != attrs['re_password']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        attrs.pop('re_password')
        return attrs
        
            