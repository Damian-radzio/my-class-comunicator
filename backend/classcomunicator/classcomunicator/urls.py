from django.contrib import admin
from django.urls import path, include
from django.urls.conf import re_path


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/users/", include("users.urls")),
]
