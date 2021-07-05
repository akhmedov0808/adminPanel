from rest_framework import serializers
from ORM.models import Faculty
from core.utils.serializers import ValidatorSerializer


class FacultySerializers(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = ('id', 'name')


class FacultyFilterSerializers(ValidatorSerializer):
    search = serializers.CharField(required=False)
