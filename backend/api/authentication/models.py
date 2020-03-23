from django.contrib.auth.models import AbstractUser
from django.db import models

class TaenlenUser(AbstractUser):
    acct_num = models.CharField(blank=True, max_length=120)