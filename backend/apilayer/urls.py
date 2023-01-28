from django.urls import path
from . import views

urlpatterns = [
    path("notes", name="all-notes"),
    path("notes/<int:pk>",views.viewIndividualNote, name="individual-notes"),
    path("notes/create",views.createNewNote, name="create-note"),
    path("notes/<int:pk>/update",views.updateNote, name="update-note"),
    path("notes/<int:pk>/delete",views.deleteNote, name="delete-note"),
]