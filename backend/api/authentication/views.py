# from rest_framework import permissions, status
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from .models import TaenlenUser as User
# from .serializers import UserSerializer, UserSerializerWithToken


# @api_view(['GET'])
# def current_user(request):

#     serializer = UserSerializer(request.user)
#     return Response(serializer.data)


# class Users(APIView):

#     permission_classes = (permissions.AllowAny,)
#     authentication_classes = ()

#     def post(self, request, format=None):
#         serializer = UserSerializerWithToken(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken

@api_view(['GET'])
def current_user(request):
    
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class ObtainTokenPair(TokenObtainPairView):
    serializer_class = UserSerializerWithToken



class CreateUser(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()


    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
