from django.urls import path
from flushapp import views  # Import the views from views.py

urlpatterns = [
    path('', views.getRoutes, name="getRoutes"),
    path('products/', views.getProducts, name="getProducts"),
]
