from rest_framework.serializers import ModelSerializer
from . import models

class NotesSerializer(ModelSerializer):
    class Meta:
        model = models.Notes
        fields = "__all__"