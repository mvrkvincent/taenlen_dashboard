from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CashOutSerializer
from .models import CashOut

class CashOutView(viewsets.ModelViewSet):
  serializer_class = CashOutSerializer
  queryset = CashOut.objects.all()