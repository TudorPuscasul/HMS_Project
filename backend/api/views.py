from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.http import JsonResponse
from django.views import View
from django.contrib.auth.models import User
from django.shortcuts import render
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt
import json
from .models import CustomUser, Doctor, Patient
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model

CustomUser = get_user_model()

class RegisterView(View):
    def post(self, request):
        try:
            # Parse JSON payload
            data = json.loads(request.body.decode("utf-8"))

            # Extract fields
            name = data.get("name")
            email = data.get("email")
            password = data.get("password")
            user_type = data.get("userType")

            # Validate required fields
            if not name or not email or not password or not user_type:
                return JsonResponse({"error": "All fields are required."}, status=400)

            # Ensure user type is valid
            if user_type not in ["doctor", "patient"]:
                return JsonResponse({"error": "Invalid user type."}, status=400)

            if CustomUser.objects.filter(email=email).exists():
                return JsonResponse({"error": "Email is already in use."}, status=400)

            # Create user
            user = CustomUser.objects.create_user(username=name, email=email, password=password)

            # Assign user type
            if user_type == "doctor":
                specialization = data.get("specialization")
                if not specialization:
                    return JsonResponse({"error": "Specialization is required for doctors."}, status=400)
                user.is_doctor = True
                user.save()  # Save the `is_doctor` field
                Doctor.objects.create(user=user, specialization=specialization)

            elif user_type == "patient":
                age = data.get("age")
                if not age:
                    return JsonResponse({"error": "Age is required for patients."}, status=400)
                user.is_patient = True
                user.save()  # Save the `is_patient` field
                Patient.objects.create(user=user, age=age)

            return JsonResponse({"message": "User registered successfully."}, status=201)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON payload."}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)



class LoginView(View):
    def post(self, request):
        try:
            # Parse JSON payload
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            if not email or not password:
                return JsonResponse({"error": "Email and password are required."}, status=400)

            try:
                user = CustomUser.objects.get(email=email)
            except CustomUser.DoesNotExist:
                return JsonResponse({"error": "Invalid credentials."}, status=401)

            # Authenticate user
            user = authenticate(request, username=user.username, password=password)
            if user is not None:
                login(request, user)
                return JsonResponse({"message": "Login successful."}, status=200)
            else:
                return JsonResponse({"error": "Invalid credentials."}, status=401)

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON payload."}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

# User Logout
class LogoutView(View):
    @method_decorator(login_required)
    def post(self, request):
        try:
            logout(request)
            return JsonResponse({"message": "Logout successful."}, status=200)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)


def csrf_token_view(request):
    return JsonResponse({'csrfToken': get_token(request)})


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from .models import Patient, PatientRecord
from .serializers import PatientRecordSerializer, PatientSerializer
from rest_framework import status



class PatientRecordsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Get the logged-in user's patient profile
        patient = get_object_or_404(Patient, user=request.user)

        # Fetch all records for the patient
        records = PatientRecord.objects.filter(patient=patient)

        # Serialize the records
        serializer = PatientRecordSerializer(records, many=True)

        return Response(serializer.data)
    

class PatientAddRecordView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Get the logged-in user's patient profile
        try:
            patient = Patient.objects.get(user=request.user)
        except Patient.DoesNotExist:
            return Response({"error": "Patient profile not found."}, status=status.HTTP_404_NOT_FOUND)

        # Deserialize and validate the data
        serializer = PatientRecordSerializer(data=request.data)
        if serializer.is_valid():
            # Save the record with the associated patient
            serializer.save(patient=patient)
            return Response({"message": "Record added successfully.", "record": serializer.data}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class PatientListView(APIView):
    permission_classes = [IsAuthenticated]  # Optional: Only allow authenticated users to access this view

    def get(self, request):
        # Fetch all patients
        patients = Patient.objects.all()

        # Serialize the patient data
        serializer = PatientSerializer(patients, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
class NotifyPatientView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, patient_id):
        try:
            # Fetch the patient by ID
            patient = Patient.objects.get(id=patient_id)
            # Mark the patient as notified
            patient.notified = True
            patient.save()
            return Response({"message": f"Patient {patient.user.username} notified successfully."}, status=status.HTTP_200_OK)
        except Patient.DoesNotExist:
            return Response({"error": "Patient not found."}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class UserInfoView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "is_patient": user.is_patient,
            "is_doctor": user.is_doctor,
        })


