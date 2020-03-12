from rest_framework import serializers
from .models import CashOut

class CashOutSerializer(serializers.ModelSerializer):
  class Meta:
    model = CashOut
    fields = ('id', 'expense', 'value', 'account', 'due',)