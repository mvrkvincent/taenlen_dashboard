from authentication.serializers import UserSerializer

def taenlen_token_response_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': UserSerializer(user, context={'request': request}).data
    }
