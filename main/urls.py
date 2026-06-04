from django.urls import path
from . import views

urlpatterns = [

    path(
        '',
        views.home,
        name='home'
    ),

    path(
        'project/bert-vs-llama/',
        views.bert_project,
        name='bert'
    ),

    path(
        'project/school-management-system/',
        views.school_project,
        name='school'
    ),

    path(
        'project/blood-bank-system/',
        views.blood_project,
        name='blood'
    ),

    path(
        'project/arduino-projects/',
        views.arduino_project,
        name='arduino'
    ),

]