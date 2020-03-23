from django.contrib import admin
from .models import TaenlenUser

class TaenlenUserAdmin(admin.ModelAdmin):
    model = TaenlenUser

admin.site.register(TaenlenUser, TaenlenUserAdmin)
