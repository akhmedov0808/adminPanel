from rest_framework import serializers
from ORM.models import Faculty


class FacultySerializers(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = ('id', 'name')
