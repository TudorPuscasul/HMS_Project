from rest_framework import serializers
from .models import PatientRecord, Patient


class PatientRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientRecord
        fields = [
            'id',
            'date',
            'blood_glucose',
            'oxygen_saturation',
            'symptoms',
            'diagnosis',
            'medications',
            'follow_up_date',
        ]

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['id', 'user', 'age', 'notified']  # Include fields you want to expose to the frontend

    # Serialize the related `CustomUser` fields (e.g., username, email)
    user = serializers.SerializerMethodField()

    def get_user(self, obj):
        return {
            "id": obj.user.id,
            "username": obj.user.username,
            "email": obj.user.email,
        }