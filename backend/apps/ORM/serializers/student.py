from rest_framework import serializers
from ORM.models import Student
from ORM.serializers.group import GroupSerializers


class StudentSerializers(serializers.ModelSerializer):
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['group'] = GroupSerializers(instance.group).data
        return data

    class Meta:
        model = Student
        fields = ('id', 'name', 'group')