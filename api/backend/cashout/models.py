from django.db import models

class CashOut(models.Model):
  expense = models.CharField(max_length=25)
  value = models.IntegerField()
  account = models.CharField(max_length=50).blank=True

  def __str__(self):
    return self.expense
