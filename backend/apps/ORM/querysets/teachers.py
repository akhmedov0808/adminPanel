from core.querysets.base_queryset import BaseQuerySet


class TeacherQuerySet(BaseQuerySet):
    def list(self, group=None):
        query = self.filter(group=group) if group else self
        return query.order_by('id')