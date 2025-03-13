from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Patient, Doctor

# Extend UserAdmin to display more fields
@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    list_display = (
        "username",
        "email",
        "is_patient",
        "is_doctor",
        "date_joined",
        "last_login",
    )
    list_filter = ("is_patient", "is_doctor", "is_staff", "is_superuser")
    search_fields = ("username", "email")
    ordering = ("date_joined",)

    # Add custom fields to the UserAdmin form
    fieldsets = UserAdmin.fieldsets + (
        ("Custom Fields", {"fields": ("is_patient", "is_doctor")}),
    )


# Add admin for Patient to include age and related user fields
@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "age",
        "notified",
    )
    search_fields = ("user__username", "user__email")
    list_filter = ("notified",)


# Add admin for Doctor to include specialization
@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "specialization",
    )
    search_fields = ("user__username", "user__email", "specialization")
