// Django Views - Basic Setup Example
# backend/django-api/apps/terms/views.py

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend

from .models import Term, Category
from .serializers import TermSerializer, CategorySerializer


class TermViewSet(viewsets.ModelViewSet):
    queryset = Term.objects.all()
    serializer_class = TermSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['category', 'difficulty']
    search_fields = ['name', 'definition', 'examples']
    ordering_fields = ['name', 'created_at']
    ordering = ['name']

    def get_queryset(self):
        queryset = Term.objects.all()
        
        # Filter by category
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category__slug=category)
        
        # Filter by difficulty
        difficulty = self.request.query_params.get('difficulty')
        if difficulty:
            queryset = queryset.filter(difficulty=difficulty)
        
        return queryset

    @action(detail=False, methods=['get'])
    def search(self, request):
        query = request.query_params.get('q', '')
        if len(query) < 2:
            return Response({'error': 'Query too short'}, status=400)
        
        terms = Term.objects.filter(
            name__icontains=query
        ) | Term.objects.filter(
            definition__icontains=query
        )
        
        serializer = self.get_serializer(terms[:10], many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def related(self, request, pk=None):
        term = self.get_object()
        related_terms = term.related_terms.all()
        serializer = self.get_serializer(related_terms, many=True)
        return Response(serializer.data)


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
