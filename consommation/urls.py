from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('consommation/', views.consommation, name='consommation'),
    path('login/', views.login, name='login'),
    path('rapport/', views.rapport, name='rapport'),
]