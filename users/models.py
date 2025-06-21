from django.db import models

# Create your models here.

from django.db import models

class UserProfile(models.Model):
    # Connect this profile to Django's built-in User model
    from django.contrib.auth.models import User
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    # Extra fields for your user profile
    bio = models.TextField(blank=True)
    birth_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.user.username

"""What this does:
Links your profile to the built-in User (OneToOneField means one profile per user)

Adds optional bio and birth date fields

__str__ method returns the username for easy identification"""

