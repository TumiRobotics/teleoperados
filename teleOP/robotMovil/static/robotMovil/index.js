let infoGamepad = null

function mostrarVideo()
{
    let btnControlVideo = document.getElementById('btnControlVideo')
    let videoCam1 = document.getElementById('camera1')
    let videoCam2 = document.getElementById('camera2')

    if(btnControlVideo.dataset.info === '0')
    {
        videoCam1.innerHTML = `<img src="http://10.100.178.237:8080/?action=stream">`
        videoCam2.innerHTML = `<img src="http://10.100.178.237:8085/?action=stream">`
        btnControlVideo.dataset.info = '1'
        btnControlVideo.innerHTML = 'Detener grabacion'
    }
    else 
    {
        videoCam1.innerHTML = ''
        videoCam2.innerHTML = ''
        btnControlVideo.dataset.info = '0'
        btnControlVideo.innerHTML = 'Iniciar grabacion'
    }
}

function descargarVideo()
{
    console.log('Hola')
}

function getGamepadInfo()
{   
    gp_object = navigator.getGamepads()[0]
    for(let i = 0;i<gp_object.buttons.length;i++)
    {
        if(gp_object.buttons[i].value === 1)
        {
            botonPresionado = `$OAX3J0${i}`
            fetch(`/robotMovil/gamepadButton?comando=${botonPresionado}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            
        }
    }
}


document.addEventListener('DOMContentLoaded',()=>{
    window.addEventListener("gamepadconnected", function(e) {
        console.log('Gamepad ha sido conectado')
        infoGamepad = setInterval(getGamepadInfo,100)
    })

    window.addEventListener("gamepaddisconnected", function(e) {
        console.log('Gamepad ha sido desconectado')
        clearInterval(infoGamepad)
    })

})

setInterval(()=>{
    console.log('Mensaje recurrente')
},1000)
