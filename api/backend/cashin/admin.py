from django.contrib import admin
from .models import CashIn


@admin.register(CashIn)

class CashInAdmin(admin.ModelAdmin):
  list_display = ['source', 'value']
