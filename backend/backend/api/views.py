
from rest_framework import generics
from .models import Venue, Table, Decoration, VenueConfiguration
from .serializers import VenueSerializer, TableSerializer, DecorationSerializer, VenueConfigurationSerializer

# API view for listing and creating venues
class VenueListCreateView(generics.ListCreateAPIView):
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer

# API view for retrieving, updating, and deleting a venue
class VenueDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer

# API view for listing and creating tables
class TableListCreateView(generics.ListCreateAPIView):
    queryset = Table.objects.all()
    serializer_class = TableSerializer

# API view for retrieving, updating, and deleting a table
class TableDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Table.objects.all()
    serializer_class = TableSerializer

# API view for listing and creating decorations
class DecorationListCreateView(generics.ListCreateAPIView):
    queryset = Decoration.objects.all()
    serializer_class = DecorationSerializer

# API view for retrieving, updating, and deleting a decoration
class DecorationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Decoration.objects.all()
    serializer_class = DecorationSerializer

# API view for user venue configurations
class VenueConfigurationListCreateView(generics.ListCreateAPIView):
    queryset = VenueConfiguration.objects.all()
    serializer_class = VenueConfigurationSerializer

# API view for retrieving, updating, and deleting a user configuration
class VenueConfigurationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = VenueConfiguration.objects.all()
    serializer_class = VenueConfigurationSerializer
