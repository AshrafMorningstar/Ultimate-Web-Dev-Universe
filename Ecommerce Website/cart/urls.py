/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

from django.urls import path
from . import views

app_name='cart'

urlpatterns=[
    path('add/<int:product_id>/',views.add_cart,name='add_cart'),
    path('',views.cart_detail,name='cart_detail'),
    ]