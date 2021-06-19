from django.contrib import admin

from ORM.models import Teacher, Faculty, Department, Student, Group

admin.site.register(Student)
admin.site.register(Group)
admin.site.register(Teacher)
admin.site.register(Faculty)
admin.site.register(Department)
