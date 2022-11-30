from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import serial

serialRobot = serial.Serial('/dev/ttyACM0',115200,timeout=0.5)
comandos = {'0':'a','1':'A','2':'B','3':'r','4':'l','5':'A','6':'A','7':'A','8':'A','9':'A'}

# Create your views here.
def verificarConexion(request):
    return JsonResponse({
    	'resp':'ok'
    })

def index(request):
    return render(request,'robotMovil/index.html')

def gamepadButton(request):
    infoGamepad = request.GET.get('comando')
    caracterFinal = infoGamepad[-1]
    comandoInfo = comandos[str(caracterFinal)]
    infoGamepad = infoGamepad[:-1] + comandoInfo
    try:
        serialRobot.write(str(infoGamepad).encode())
    except:
        print('Error en envio')
    print(infoGamepad)
    return JsonResponse({
        'mensaje':'recibido'
    })
