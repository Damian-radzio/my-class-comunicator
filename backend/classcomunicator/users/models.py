from django.db import models
from django.contrib.auth.models import AbstractUser


class BasicUser(AbstractUser):
    username = models.CharField(max_length=250, unique=False)
    avatar = models.ImageField("/", blank=True, null=True)
    facebook_id = models.CharField(max_length=258, unique=True)

    USERNAME_FIELD = "facebook_id"
    REQUIRED_FIELDS = ["username"]
