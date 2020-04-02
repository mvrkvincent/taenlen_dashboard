from django.contrib import admin
from .models import Cell

class CellAdmin(admin.ModelAdmin):
  list_display = ('label', 'title', 'amount', 'frequency', 'priority')

admin.site.register(Cell, CellAdmin)
