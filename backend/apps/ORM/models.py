from django.db import models
from django.db.models import CASCADE

from core.models import BaseModel


class Faculty(BaseModel):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Faculty'
        verbose_name_plural = 'Faculties'


class Department(BaseModel):
    faculty = models.ForeignKey(Faculty, CASCADE, blank=True, null=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Department'
        verbose_name_plural = 'Departments'


class Group(BaseModel):
    name = models.CharField(max_length=255)
    department = models.ForeignKey(Department, CASCADE, blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Group'
        verbose_name_plural = 'Groups'


class Student(BaseModel):
    name = models.CharField(max_length=255)
    group = models.ForeignKey(Group, CASCADE, blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Student'
        verbose_name_plural = 'Students'


class Teacher(BaseModel):
    group = models.ManyToManyField(Group, blank=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Teacher'
        verbose_name_plural = 'Teachers'
