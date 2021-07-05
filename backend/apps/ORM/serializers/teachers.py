from rest_framework import serializers
from ORM.models import Teacher, Group
from ORM.serializers.group import GroupSerializers
from core.utils.serializers import ValidatorSerializer


class TeacherSerializers(serializers.ModelSerializer):
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['group'] = GroupSerializers(instance.group, many=True).data
        return data

    class Meta:
        model = Teacher
        fields = ('id', 'name', 'group')


class TeacherFilterSerializers(ValidatorSerializer):
    group = serializers.PrimaryKeyRelatedField(queryset=Group.objects.all(), required=False)
    search = serializers.CharField(required=False)
