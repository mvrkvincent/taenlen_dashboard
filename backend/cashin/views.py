from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CashInSerializer
from .models import CashIn

class CashInView(viewsets.ModelViewSet):
  serializer_class = CashInSerializer
  queryset = CashIn.objects.all()
