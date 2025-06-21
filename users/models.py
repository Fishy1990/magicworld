from django.db import models

# Create your models here.

from django.db import models

class UserProfile(models.Model):
    
    from django.contrib.auth.models import User
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    
    bio = models.TextField(blank=True)
    birth_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.user.username
    
class Wand(models.Model):
    wood = models.CharField(max_length=100)
    core = models.CharField(max_length=100)
    length = models.FloatField(help_text="Length in inches")

    def __str__(self):
        return f"{self.length}\" {self.wood} with {self.core} core"

class Creature(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

"""WHAT THIS DOES BICHES :

Cria classes para o perfil das pessoas, varinhas e criaturas , falta adicionar ainda muita coisa aqui mas nao tenho mais tempo hoje"""

