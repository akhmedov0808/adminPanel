from ORM.models import Student
from ORM.serializers.student import StudentSerializers, StudentFilterSerializers
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView


class StudentListView(APIView):
    def get(self, request):
        params = StudentFilterSerializers.check(request.GET)
        queryset = Student.objects.list(group=params.get('group'), search=params.get('search'))
        serializer = StudentSerializers(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = StudentSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(created_by=request.user)
        return Response(serializer.data, 201)


class StudentDetailView(APIView):
    def get(self, request, pk):
        instance = get_object_or_404(Student, id=pk)
        data = StudentSerializers(instance).data
        return Response(data)

    def delete(self, request, pk):
        instance = get_object_or_404(Student, id=pk)
        instance.delete()
        return Response({}, 204)

    def put(self, request, pk):
        instance = get_object_or_404(Student, id=pk)
        serializer = StudentSerializers(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class StudentDeleteListView(APIView):
    def put(self, request):
        instance = Student.objects.filter(id__in=request.data.get('id'))
        instance.delete()
        return Response({}, 204)
