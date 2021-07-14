from rest_framework import serializers
from rest_framework.exceptions import ParseError
from rest_framework_simplejwt.serializers import (
    TokenObtainPairSerializer,
    PasswordField,
)
from .models import BasicUser
from .backends import is_fb_id_and_access_token_valid


class RegisterSerializer(serializers.ModelSerializer):

    access_token = serializers.CharField(write_only=True)

    def get_access_token(self, instance):
        return instance

    class Meta:
        model = BasicUser
        fields = ["first_name", "last_name", "facebook_id", "email", "access_token"]
        extra_kwargs = {
            "first_name": {"required": True},
            "last_name": {"required": True},
            "email": {"required": True},
        }

    def create(self, validated_data):

        access_token = validated_data.pop("access_token")
        facebook_id = validated_data.get("facebook_id")

        if not is_fb_id_and_access_token_valid(access_token, facebook_id):
            raise ParseError("Id or access_token ain't valid")

        user = BasicUser(**validated_data)
        user.save()

        return user


class AuthTokenObtainPairSerializer(TokenObtainPairSerializer):

    access_token = serializers.CharField(max_length=300)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["password"] = PasswordField(required=False, default="")
