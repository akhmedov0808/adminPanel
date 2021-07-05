from core.querysets.base_queryset import BaseQuerySet


class TeacherQuerySet(BaseQuerySet):
    def list(self, group=None, search=None):
        query = self.filter(group=group) if group else self
        query = query.filter(name__icontains=search) if search else self
        return query.order_by('id')
