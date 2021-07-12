import os
import random
from random import random

import xlsxwriter
from rest_framework import serializers
from ORM.models import Student, Group, Teacher
from ORM.serializers.group import GroupSerializers
from core.utils.serializers import ValidatorSerializer


class StudentSerializers(serializers.ModelSerializer):
    xls = serializers.SerializerMethodField(read_only=True)

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['group'] = GroupSerializers(instance.group).data
        return data

    def get_xls(self, obj):
        path = f'files/uploads/students'

        if not os.path.exists(path):
            os.makedirs(path)

        path = f'files/uploads/{random()}.xlsx'

        student_report_item = Student.objects.all()

        teacher_report_item = Teacher.objects.all()

        workbook = xlsxwriter.Workbook(path)

        if os.path.exists(path):
            return path

        faculty_report = workbook.add_worksheet('Faculties')
        department_report = workbook.add_worksheet('Departments')
        group_report = workbook.add_worksheet('Groups')
        student_report = workbook.add_worksheet('Students')
        teacher_report = workbook.add_worksheet('Teachers')

        # ---------------------------------------------

        faculties = workbook.add_format({'align': 'center', 'valign': 'vcenter'})
        departments = workbook.add_format({'align': 'center', 'valign': 'vcenter'})
        groups = workbook.add_format({'align': 'center', 'valign': 'vcenter'})
        students = workbook.add_format({'align': 'center', 'valign': 'vcenter'})
        teachers = workbook.add_format({'align': 'center', 'valign': 'vcenter'})

        # ---------------------------------------------

        faculty_report.set_column('A:A', 40)
        faculty_report.set_column('B:B', 40)
        faculty_report.set_column('C:C', 40)
        faculty_report.set_column('D:D', 40)
        faculty_report.set_column('E:E', 40)

        # ---------------------------------------------

        department_report.set_column('A:A', 40)
        department_report.set_column('B:B', 40)
        department_report.set_column('C:C', 40)
        department_report.set_column('D:D', 40)
        department_report.set_column('E:E', 40)

        # ---------------------------------------------

        group_report.set_column('A:A', 40)
        group_report.set_column('B:B', 40)
        group_report.set_column('C:C', 40)
        group_report.set_column('D:D', 40)
        group_report.set_column('E:E', 40)

        # ---------------------------------------------

        student_report.set_column('A:A', 40)
        student_report.set_column('B:B', 40)
        student_report.set_column('C:C', 40)
        student_report.set_column('D:D', 40)
        student_report.set_column('E:E', 40)

        # ---------------------------------------------

        teacher_report.set_column('A:A', 40)
        teacher_report.set_column('B:B', 40)
        teacher_report.set_column('C:C', 40)
        teacher_report.set_column('D:D', 40)
        teacher_report.set_column('E:E', 40)

        # ---------------------------------------------

        title = workbook.add_format({'bold': True, 'border': 1, 'align': 'center', 'valign': 'vcenter'})
        header = workbook.add_format({'border': 1, 'align': 'center', 'valign': 'vcenter'})

        # ---------------------------------------------

        header.set_font_size(15)

        title.set_font_size(18)
        title.set_border(6)

        # ---------------------------------------------

        faculties.set_font_size(35)
        faculties.set_font_color('blue')
        faculties.set_font_name('Algerian')

        # ---------------------------------------------

        departments.set_font_size(35)
        departments.set_font_color('blue')
        departments.set_font_name('Algerian')

        # ---------------------------------------------

        groups.set_font_size(35)
        groups.set_font_color('blue')
        groups.set_font_name('Algerian')

        # ---------------------------------------------

        students.set_font_size(35)
        students.set_font_color('blue')
        students.set_font_name('Algerian')

        # ---------------------------------------------

        teachers.set_font_size(35)
        teachers.set_font_color('blue')
        teachers.set_font_size('Algerian')

        # ---------------------------------------------

        faculty_report.write(0, 2, 'Faculties', faculties)
        department_report.write(0, 1, 'Departments', departments)
        group_report.write(0, 2, 'Groups', groups)
        student_report.write(0, 2, 'Students', students)
        teacher_report.write(0, 2, 'Teachers', students)

        # ---------------------------------------------

        faculty_report.set_row(0, 70)
        department_report.set_row(0, 70)
        group_report.set_row(0, 70)
        student_report.set_row(0, 70)
        teacher_report.set_row(0, 70)

        # ---------------------------------------------

        for row, report in enumerate(student_report_item):
            faculty_report.write(row + 5, 2, report.group.department.faculty.name, header)

        for row_num, column in enumerate(['Names']):
            faculty_report.write(3, row_num + 2, column, title)

        # ---------------------------------------------

        for row, report in enumerate(student_report_item):
            department_report.write(row + 5, 1, report.group.department.name, header)
            department_report.write(row + 5, 2, report.group.department.faculty.name, header)

        for row_num, column in enumerate(['Names', 'Faculties']):
            department_report.write(3, row_num + 1, column, title)

        # ---------------------------------------------

        for row, report in enumerate(student_report_item):
            group_report.write(row + 5, 1, report.group.name, header)
            group_report.write(row + 5, 2, report.group.department.name, header)
            group_report.write(row + 5, 3, report.last_name, header)

        for row_num, column in enumerate(['Names', 'Departments', 'Students']):
            group_report.write(3, row_num + 1, column, title)

        # ---------------------------------------------

        for row, report in enumerate(student_report_item):
            student_report.write(row + 5, 0, report.last_name, header)
            student_report.write(row + 5, 1, report.name, header)
            student_report.write(row + 5, 2, report.patronymic, header)
            student_report.write(row + 5, 3, report.age, header)
            student_report.write(row + 5, 4, report.group.name, header)

        for row_num, column in enumerate(['First Names', 'Last Names', 'Patronymics', 'Ages', 'Groups']):
            student_report.write(3, row_num + 0, column, title)

        # ---------------------------------------------

        for row, report in enumerate(teacher_report_item):
            teacher_report.write(row + 5, 0, report.last_name, header)
            teacher_report.write(row + 5, 1, report.name, header)
            teacher_report.write(row + 5, 2, report.patronymic, header)
            teacher_report.write(row + 5, 3, report.science, header)
            teacher_report.write(row + 5, 4, report.age, header)

        for row_num, column in enumerate(['First Names', 'Last Names', 'Patronymics', 'Sciences', 'Ages']):
            teacher_report.write(3, row_num + 0, column, title)

        # ---------------------------------------------

        workbook.close()

        return path

    class Meta:
        model = Student
        fields = ('id', 'name', 'last_name', 'patronymic', 'age', 'group', 'xls')


class StudentFilterSerializers(ValidatorSerializer):
    group = serializers.PrimaryKeyRelatedField(queryset=Group.objects.all(), required=False)
    search = serializers.CharField(required=False)
