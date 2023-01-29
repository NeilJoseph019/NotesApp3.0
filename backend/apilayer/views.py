from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . import models
from . import serializers

@api_view(["GET"])
def viewAllNotes(request):
    notes = models.Notes.objects.all().order_by("-updated")
    serializer = serializers.NotesSerializer(notes,  many=True) #what if the notes object and many=True is not mentioned ?
    return Response(serializer.data)

@api_view(["GET"])
def viewIndividualNote(request, pk):
    note = models.Notes.objects.get(id=pk)
    serializer = serializers.NotesSerializer(note, many=False)
    return Response


@api_view(["POST"])
def createNewNote(request):
    data = request.data
    note = models.Notes.objects.create(
        title = data["title"],
        body = data["body"]
    ) # how to create a new note without using the create function? 
    serializer = serializers.NotesSerializer(note, many=False)
    return Response( serializer.data )
    

@api_view(["PUT"])
def updateNote(request, pk):
    data = request.data 
    note = models.Notes.objects.get(id = pk)
    serializer = serializers.NotesSerializer(instance=note, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(["DELETE"])
def deleteNote(request, pk):
    data = request.data 
    note = models.Notes.objects.get(id = pk)
    note.delete()
    return Response("Note successfully deleted.")