from django.db import models
from django.db.models import CASCADE

from ORM.querysets.department import DepartmentQuerySet
from ORM.querysets.faculty import FacultyQuerySet
from ORM.querysets.group import GroupQuerySet
from ORM.querysets.teachers import TeacherQuerySet
from ORM.querysets.student import StudentQuerySet
from core.models import BaseModel


class Faculty(BaseModel):
    name = models.CharField(max_length=255)
    objects = FacultyQuerySet.as_manager()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Faculty'
        verbose_name_plural = 'Faculties'


class Department(BaseModel):
    faculty = models.ForeignKey(Faculty, CASCADE, blank=True, null=True)
    objects = DepartmentQuerySet.as_manager()
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Department'
        verbose_name_plural = 'Departments'


class Group(BaseModel):
    name = models.CharField(max_length=255)
    objects = GroupQuerySet.as_manager()
    department = models.ForeignKey(Department, CASCADE, blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Group'
        verbose_name_plural = 'Groups'


class Student(BaseModel):
    name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    patronymic = models.CharField(max_length=255)
    age = models.IntegerField()
    group = models.ForeignKey(Group, CASCADE, blank=True, null=True)
    objects = StudentQuerySet.as_manager()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Student'
        verbose_name_plural = 'Students'


class Teacher(BaseModel):
    group = models.ManyToManyField(Group, blank=True)
    name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    patronymic = models.CharField(max_length=255)
    science = models.CharField(max_length=100)
    age = models.IntegerField()
    objects = TeacherQuerySet.as_manager()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Teacher'
        verbose_name_plural = 'Teachers'
