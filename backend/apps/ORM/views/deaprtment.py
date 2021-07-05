
from ORM.models import Department
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from ORM.serializers.department import DepartmentSerializers, DepartmentFilterSerializers


class DepartmentListView(APIView):
    def get(self, request):
        params = DepartmentFilterSerializers.check(request.GET)
        queryset = Department.objects.list(search=params.get('search'))
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


class DepartmentDeleteListView(APIView):
    def put(self, request):
        instance = Department.objects.filter(id__in=request.data.get('id'))
        instance.delete()
        return Response({}, 204)
