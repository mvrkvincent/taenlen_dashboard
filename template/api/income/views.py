from django.shortcuts import render
from rest_framework import viewsets
from .serializers import IncomeSerializer
from .models import Income

class IncomeView(viewsets.ModelViewSet):
  serializer_class = IncomeSerializer
  queryset = Income.objects.all()

  def __str__(self):
    return self.source
