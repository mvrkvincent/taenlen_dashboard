from rest_framework import serializers
from .models import CashIn


class CashInSerializer(serializers.ModelSerializer):
  class Meta:
    model = CashIn
    fields = ('id', 'source', 'value')
