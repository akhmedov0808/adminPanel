from rest_framework import serializers
from ORM.models import Student, Group
from ORM.serializers.group import GroupSerializers
from core.utils.serializers import ValidatorSerializer


class StudentSerializers(serializers.ModelSerializer):
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['group'] = GroupSerializers(instance.group).data
        return data

    class Meta:
        model = Student
        fields = ('id', 'name', 'last_name', 'patronymic', 'age', 'group')


class StudentFilterSerializers(ValidatorSerializer):
    group = serializers.PrimaryKeyRelatedField(queryset=Group.objects.all(), required=False)
    search = serializers.CharField(required=False)
