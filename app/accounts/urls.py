from django.conf.urls import include, url
from knox import views as knox_views
from .api import RegisterAPI, LoginAPI, UserAPI

urlpatterns = [
  #...snip...
  url(r'api/auth/', include('knox.urls')),
  url(r'api/auth/register', RegisterAPI.as_view()),
  url(r'api/auth/login', LoginAPI.as_view()),
  url(r'api/auth/user', UserAPI.as_view()),
  url(r'api/auth/logout', knox_views.LogoutViews.as_view(), name='knox_logout'),
  #...snip...
]