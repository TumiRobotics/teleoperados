from . import views
from django.urls import path

app_name = 'robotMovil'

urlpatterns = [
    path('',views.index,name='index'),
    path('gamepadButton',views.gamepadButton,name='gamepadButton'),
    path('verificarConexion',views.verificarConexion,name='verificarConexion')
]
