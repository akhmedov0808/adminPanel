
from ORM.models import Department
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from ORM.serializers.department import DepartmentSerializers


class DepartmentListView(APIView):
    def get(self, request):
        queryset = Department.objects.all()
        serializer = DepartmentSerializers(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = DepartmentSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(created_by=request.user)
        return Response(serializer.data, 201)


class DepartmentDetailView(APIView):
    def get(self, request, pk):
        instance = get_object_or_404(Department, id=pk)
        data = DepartmentSerializers(instance).data
        return Response(data)

    def delete(self, request, pk):
        instance = get_object_or_404(Department, id=pk)
        instance.delete()
        return Response({}, 204)

    def put(self, request, pk):
        instance = get_object_or_404(Department, id=pk)
        serializer = DepartmentSerializers(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

