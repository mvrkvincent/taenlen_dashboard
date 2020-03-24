# from django.urls import path
# from .views import current_user, Users

# urlpatterns = [
#     path('current_user/', current_user),
#     path('users/', Users.as_view()),
# ]

from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import current_user, CreateUser, ObtainTokenPair

urlpatterns = [
    path('current_user/', current_user),
    path('user/create/', CreateUser.as_view(), name="create_user"),
    path('token/obtain/', ObtainTokenPair.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]
