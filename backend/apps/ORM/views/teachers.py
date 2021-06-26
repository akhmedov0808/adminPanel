
from ORM.models import Teacher
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from ORM.serializers.teachers import TeacherSerializers, TeacherFilterSerializers


class TeacherListView(APIView):
    def get(self, request):
        params = TeacherFilterSerializers.check(request.GET)
        queryset = Teacher.objects.list(group=params.get('group'))
        serializer = TeacherSerializers(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TeacherSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(created_by=request.user)
        return Response(serializer.data, 201)


class TeacherDetailView(APIView):
    def get(self, request, pk):
        instance = get_object_or_404(Teacher, id=pk)
        data = TeacherSerializers(instance).data
        return Response(data)

    def delete(self, request, pk):
        instance = get_object_or_404(Teacher, id=pk)
        instance.delete()
        return Response({}, 204)

    def put(self, request, pk):
        instance = get_object_or_404(Teacher, id=pk)
        serializer = TeacherSerializers(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

