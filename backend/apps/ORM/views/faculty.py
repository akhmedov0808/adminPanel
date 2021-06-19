
from ORM.models import Faculty
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from ORM.serializers.faculty import FacultySerializers


class FacultyListView(APIView):
    def get(self, request):
        queryset = Faculty.objects.all()
        serializer = FacultySerializers(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = FacultySerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(created_by=request.user)
        return Response(serializer.data, 201)


class FacultyDetailView(APIView):
    def get(self, request, pk):
        instance = get_object_or_404(Faculty, id=pk)
        data = FacultySerializers(instance).data
        return Response(data)

    def delete(self, request, pk):
        instance = get_object_or_404(Faculty, id=pk)
        instance.delete()
        return Response({}, 204)

    def put(self, request, pk):
        instance = get_object_or_404(Faculty, id=pk)
        serializer = FacultySerializers(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

