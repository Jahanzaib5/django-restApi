from django.db import models

# Create your models here.

class Books(models.Model):
    title = models.TextField(max_length=32, blank=False, null=False)

    def __str__(self):
        return f"{self.title}"
