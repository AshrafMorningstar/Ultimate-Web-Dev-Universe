/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

from django.shortcuts import render
from shop.models import Product
from django.db.models import Q


def SearchResult(request):
    products = None
    query = None
    if 'q' in request.GET:
        query=request.GET.get('q')
        products=Product.objects.all().filter(Q(name__contains=query) | Q(description__contains=query))
        return render(request,'search.html',{'query':query,'products':products})



