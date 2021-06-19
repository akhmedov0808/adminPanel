from rest_framework import serializers
from ORM.models import Group
from ORM.serializers.department import DepartmentSerializers


class GroupSerializers(serializers.ModelSerializer):
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['department'] = DepartmentSerializers(instance.department).data

        return data

    class Meta:
        model = Group
        fields = ('id', 'name', 'department')