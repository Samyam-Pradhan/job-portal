from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('job_seeker', 'Job Seeker'),
        ('employer', 'Employer'),
    )

    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    # Only used if role = employer
    company_name = models.CharField(max_length=255, blank=True, null=True)

    # Make names optional (important for employer)
    first_name = models.CharField(max_length=150, blank=True, null=True)
    last_name = models.CharField(max_length=150, blank=True, null=True)

    def __str__(self):
        if self.role == 'employer' and self.company_name:
            return f"{self.company_name} (Employer)"
        return f"{self.username} ({self.role})"
