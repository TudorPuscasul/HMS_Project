from django.contrib.auth.models import AbstractUser
from django.db import models

# Custom User Model
class CustomUser(AbstractUser):
    id = models.BigAutoField(primary_key=True)
    email = models.EmailField(unique=True)
    is_doctor = models.BooleanField(default=False)
    is_patient = models.BooleanField(default=False)


# Doctor Model
class Doctor(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name="doctor_profile")
    specialization = models.CharField(max_length=100)

    def __str__(self):
        return self.user.username


# Patient Model
class Patient(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name="patient_profile")
    age = models.PositiveIntegerField()
    notified = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username
    

class PatientRecord(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name="records")
    date = models.DateField(auto_now_add=True)
    blood_glucose = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)  # mg/dL
    oxygen_saturation = models.DecimalField(max_digits=4, decimal_places=1, null=True, blank=True)  # %
    symptoms = models.TextField(null=True, blank=True)
    diagnosis = models.TextField(null=True, blank=True)
    medications = models.TextField(null=True, blank=True)
    follow_up_date = models.DateField(null=True, blank=True)


