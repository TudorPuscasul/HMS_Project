
from rest_framework import serializers
from .models import Venue, Table, Decoration, VenueConfiguration

class VenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venue
        fields = '__all__'

class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = '__all__'

class DecorationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Decoration
        fields = '__all__'

class VenueConfigurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = VenueConfiguration
        fields = '__all__'
