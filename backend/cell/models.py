from django.db import models

class Cell(models.Model):
  label = models.CharField(max_length=25)
  title = models.CharField(max_length=15)
  amount = models.IntegerField()
  frequency = models.CharField(max_length=25)
  priority = models.CharField(max_length=25)

  def __str__(self):
    return self.title
