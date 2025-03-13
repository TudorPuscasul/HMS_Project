from django.urls import path
from .views import RegisterView, LoginView, LogoutView, csrf_token_view, PatientRecordsView
from .views import PatientListView, PatientAddRecordView, NotifyPatientView, UserInfoView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('csrf-token/', csrf_token_view, name='csrf-token'),  # Optional
    path('patient/records/', PatientRecordsView.as_view(), name='patient-records'),
    path('patients/', PatientListView.as_view(), name='patient-list'),
    path('patient/records/add/', PatientAddRecordView.as_view(), name='patient-add-records'),
    path('patients/<int:patient_id>/notify/', NotifyPatientView.as_view(), name='notify-patient'),
    path('user/', UserInfoView.as_view(), name='user-info'),
]