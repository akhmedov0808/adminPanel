from django.urls import path
from ORM.views.deaprtment import DepartmentListView, DepartmentDetailView
from ORM.views.faculty import FacultyListView, FacultyDetailView, FacultyDeleteListView
from ORM.views.group import GroupListView, GroupDetailView
from ORM.views.student import StudentListView, StudentDetailView
from ORM.views.teachers import TeacherListView, TeacherDetailView

urlpatterns = [
    path('student', StudentListView.as_view(), name='student-list'),
    path('student/<int:pk>', StudentDetailView.as_view(), name='student-detail'),

    path('group', GroupListView.as_view(), name='group-list'),
    path('group/<int:pk>', GroupDetailView.as_view(), name='group-detail'),

    path('department', DepartmentListView.as_view(), name='department-list'),
    path('department/<int:pk>', DepartmentDetailView.as_view(), name='department-detail'),

    path('faculty', FacultyListView.as_view(), name='faculty-list'),
    path('faculty/<int:pk>', FacultyDetailView.as_view(), name='faculty-detail'),
    path('faculty_delete', FacultyDeleteListView.as_view(), name='faculty-delete'),

    path('teacher', TeacherListView.as_view(), name='teacher-list'),
    path('teacher/<int:pk>', TeacherDetailView.as_view(), name='teacher-detail'),

]
