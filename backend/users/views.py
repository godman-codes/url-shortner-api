from rest_framework.generics import CreateAPIView, RetrieveAPIView
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny
from rest_framework.views import Response, status
from .models import UserAccount

class RegisterUserView(CreateAPIView):
    queryset = UserAccount.objects.all()
    permission_classes =  [AllowAny]
    serializer_class = UserSerializer

class RetrieveUserView(RetrieveAPIView):
    serializer_class = UserSerializer
    def get(self, request, format=None):
        print(request.user)
        user = request.user
        user = UserSerializer(user)
        return Response(
            {'user': user.data},
            status=status.HTTP_200_OK
        )
