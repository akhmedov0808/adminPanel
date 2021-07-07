from django.urls import path
from ORM.views.deaprtment import DepartmentListView, DepartmentDetailView, DepartmentDeleteListView
from ORM.views.faculty import FacultyListView, FacultyDetailView, FacultyDeleteListView
from ORM.views.group import GroupListView, GroupDetailView, GroupDeleteListView
from ORM.views.student import StudentListView, StudentDetailView, StudentDeleteListView
from ORM.views.teachers import TeacherListView, TeacherDetailView, TeacherDeleteListView

urlpatterns = [
    path('student', StudentListView.as_view(), name='student-list'),
    path('student/<int:pk>', StudentDetailView.as_view(), name='student-detail'),
    path('student_delete', StudentDeleteListView.as_view(), name='group-delete'),

    path('group', GroupListView.as_view(), name='group-list'),
    path('group/<int:pk>', GroupDetailView.as_view(), name='group-detail'),
    path('group_delete', GroupDeleteListView.as_view(), name='group-delete'),

    path('department', DepartmentListView.as_view(), name='department-list'),
    path('department/<int:pk>', DepartmentDetailView.as_view(), name='department-detail'),
    path('department_delete', DepartmentDeleteListView.as_view(), name='department-delete'),

    path('faculty', FacultyListView.as_view(), name='faculty-list'),
    path('faculty/<int:pk>', FacultyDetailView.as_view(), name='faculty-detail'),
    path('faculty_delete', FacultyDeleteListView.as_view(), name='faculty-delete'),

    path('teacher', TeacherListView.as_view(), name='teacher-list'),
    path('teacher/<int:pk>', TeacherDetailView.as_view(), name='teacher-detail'),
    path('teacher_delete', TeacherDeleteListView.as_view(), name='teacher-delete'),
]
