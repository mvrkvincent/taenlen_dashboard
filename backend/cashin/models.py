from django.db import models

class CashIn(models.Model):
  source = models.CharField(max_length=25)
  value = models.IntegerField()
  
