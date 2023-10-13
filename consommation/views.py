from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'consommation/index.html')

def consommation(request):
    return render(request, 'consommation/consommation.html')

def login(request):
    return render(request, 'consommation/login.html')

def rapport(request):
    return render(request, 'consommation/rapport.html')

