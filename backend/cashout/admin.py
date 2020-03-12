from django.contrib import admin
from .models import CashOut

@admin.register(CashOut)

class CashOutAdmin(admin.ModelAdmin):
  list_display = ['expense', 'value', 'account', 'due']