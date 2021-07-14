from django.contrib.auth.backends import ModelBackend
from rest_framework.exceptions import ParseError
from .models import BasicUser
import requests
from django.conf import settings


def is_fb_id_and_access_token_valid(access_token, facebook_id):
    response = requests.get(
        "https://graph.facebook.com/debug_token?"
        f"input_token={access_token}"
        f"&access_token={settings.FACEBOOK_ACCESS_TOKEN}"
    ).json()

    error = response.get("error")
    data = response.get("data")

    if error:
        raise ParseError(error.get("message"))
    elif not data:
        return False

    is_valid = data.get("is_valid")
    user_id = data.get("user_id")

    if is_valid and user_id == facebook_id:
        return True
    else:
        return False


class Backend(ModelBackend):
    def authenticate(self, request, **kwargs):
        access_token = request.POST.get("access_token")
        facebook_id = request.POST.get("facebook_id")

        if (
            not access_token
            or not facebook_id
            or not is_fb_id_and_access_token_valid(access_token, facebook_id)
        ):
            return

        try:
            user = BasicUser.objects.get(facebook_id=facebook_id)
        except BasicUser.DoesNotExist:
            return
        else:
            if self.user_can_authenticate(user):
                return user
