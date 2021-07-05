
from ORM.models import Group
from ORM.serializers.group import GroupSerializers, GroupFilterSerializers
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView


class GroupListView(APIView):
    def get(self, request):
        params = GroupFilterSerializers.check(request.GET)
        queryset = Group.objects.list(search=params.get('search'))
        serializer = GroupSerializers(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = GroupSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(created_by=request.user)
        return Response(serializer.data, 201)


class GroupDetailView(APIView):
    def get(self, request, pk):
        instance = get_object_or_404(Group, id=pk)
        data = GroupSerializers(instance).data
        return Response(data)

    def delete(self, request, pk):
        instance = get_object_or_404(Group, id=pk)
        instance.delete()
        return Response({}, 204)

    def put(self, request, pk):
        instance = get_object_or_404(Group, id=pk)
        serializer = GroupSerializers(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class GroupDeleteListView(APIView):
    def put(self, request):
        instance = Group.objects.filter(id__in=request.data.get('id'))
        instance.delete()
        return Response({}, 204)
