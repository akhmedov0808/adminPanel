from rest_framework import serializers
from ORM.models import Department
from ORM.serializers.faculty import FacultySerializers
from core.utils.serializers import ValidatorSerializer


class DepartmentSerializers(serializers.ModelSerializer):
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['faculty'] = FacultySerializers(instance.faculty).data
        return data

    class Meta:
        model = Department
        fields = ('id', 'name', 'faculty')


class DepartmentFilterSerializers(ValidatorSerializer):
    search = serializers.CharField(required=False)
