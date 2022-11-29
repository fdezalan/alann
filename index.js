
let usuarioConEmail = "Alan"
const contrasenia = "HolaBuenasNoches"

function user () {
    const nombre1 = prompt ("Ingrese su Nombre")
        alert("Hola" + " " + nombre1)
    alert("Por Favor, le solicito ingresar su Usuario")

    const usuario = prompt ("Usuario :")
    if( usuario != usuarioConEmail){
        alert("¿Que haces nene?, vos no sos" + " " + usuarioConEmail +" "+ "Por Favor, Ingrese su usuario correcto")
    }
    else if( usuario === usuarioConEmail) {
        alert("Perfecto, Precede a ingresar tu pasguord")
    }

    const pass = prompt ("Ingrese su contraseña :")
    if (pass != contrasenia){
        alert("Contraseña Incorrecta!, Intente de nuevo.")
    }
    else if (pass === contrasenia){
        alert("Sea usted bienvenido" + " "+ nombre1)
    }
}


user () 