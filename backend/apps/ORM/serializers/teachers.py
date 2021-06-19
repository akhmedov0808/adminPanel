from rest_framework import serializers
from ORM.models import Teacher
from ORM.serializers.group import GroupSerializers


class TeacherSerializers(serializers.ModelSerializer):
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['group'] = GroupSerializers(instance.group, many=True).data
        return data

    class Meta:
        model = Teacher
        fields = ('id', 'name', 'group')
