from rest_framework.response import Response
from rest_framework.decorators import api_view
from .products import products  # Import the products list from products.py
from django.shortcuts import render

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    return Response('Hello Angel')

@api_view(['GET'])
def getProducts(request):
    return Response(products)