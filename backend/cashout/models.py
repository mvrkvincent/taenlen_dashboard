from django.db import models

class CashOut(models.Model):
  expense = models.CharField(max_length=25)
  value = models.IntegerField()
  account = models.CharField(max_length=50)
  note = models.TextField()
  due = models.DateField() 
  paid = models.BooleanField(default=False)
