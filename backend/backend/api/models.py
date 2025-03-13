
from django.db import models

# Wedding Venue Model
class Venue(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='venues/', null=True, blank=True)

    def __str__(self):
        return self.name

# Table Model (Customizable tables for the venue)
class Table(models.Model):
    id = models.BigAutoField(primary_key=True)
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE, related_name="tables")
    table_type = models.CharField(max_length=100)  # e.g., "Round", "Rectangular"
    material = models.CharField(max_length=100)
    color = models.CharField(max_length=50)
    image = models.ImageField(upload_to='tables/', null=True, blank=True)

    def __str__(self):
        return f"{self.table_type} Table - {self.venue.name}"

# Decoration Model
class Decoration(models.Model):
    id = models.BigAutoField(primary_key=True)
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE, related_name="decorations")
    decoration_type = models.CharField(max_length=100)  # e.g., "Floral", "Minimalist"
    color = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField(upload_to='decorations/', null=True, blank=True)

    def __str__(self):
        return f"{self.decoration_type} - {self.venue.name}"

# User Saved Configurations
class VenueConfiguration(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE)
    selected_tables = models.ManyToManyField(Table, blank=True)
    selected_decorations = models.ManyToManyField(Decoration, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Configuration for {self.user.username} at {self.venue.name}"
