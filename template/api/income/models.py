from django.db import models

class Income(models.Model):
  source = models.CharField(max_length=25)
  value = models.IntegerField()

  def __str__(self):
    return self.source
