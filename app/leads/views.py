from django.shortcuts import render
from rest_framework import generics, authentication, permissions
from . serializer import LeadSerializer
from . models import Lead


class LeadListCreate(generics.ListCreateAPIView):
    serializer_class = LeadSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class LeadRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer



# Create your views here.
