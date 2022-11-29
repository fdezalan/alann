
// 1) Crear 4 funciones que reciban 2 parámetros numéricos de cualquier tipo, distinto a 0:
// a) la función debe retornar la suma de los dos operandos
// b) la función debe retornar la resta de los dos opernados
// c) la función debe retornar la multiplicación de los dos operandos
// d) la función debe retornar la división de los dos operandos
// Para cada uno de los llamados de las funciones, pasar los dos argumentos numéricos y visualizar el retorno en consola.

// 2) Crear una función que reciba los siguientes parámetros: nombre, apellido, edad, direccion y telefono.
// Retornar como cadena de caracteres, la información del usuario. Podés usar \n para generar saltos de línea.
// Luego al llamar a la función, pase los 5 argumentos y visualice en consola el dato retornado.
// Ejemplo de la visualización: 
// Los datos del cliente son: 
//  Nombre: Carolina,
//  Apellido: Lerner,
//  Edad: 28,
//  Dirección: Calle falsa 123,
//  Teléfono: 11221122.
//Las vamos leyendo igual



function suma (a , b){
    return a + b
}
function resta (a , b){
    return a - b
}
function multi (a , b){
    return a * b
}
function div (a , b){
    return a / b
}

console.log( suma(13,25) )
console.log( resta(13,25) )
console.log( multi(13,25) )
console.log( div(13,25) )







const auto = {
    marca: "volkswagen",
    color: "negro"
}
 console.log(auto)

const otroAuto = auto
console.log(otroAuto)


otroAuto.marca = "Fiat"
otroAuto.color = "rojo"

const autoDico = {...auto}

autoDico.marca = "Renault"
autoDico.color = "Verde"

console.log(auto)
console.log(otroAuto)
console.log(autoDico)


// 1) QUIERO QUE INSTANCIEN OBJETOS, ELIJAN LA MANERA, QUE LA INSTANCIA SE REFIERA A UN CLIENTE Y QUE CUENTE CON LAS SIGUIENTES PROPIEDADES:
// nombre, apellido, edad, numeroDeCuenta, direccion, email, tarjetaDeCredito, deuda
// - Instancien 5 objetos
// Que usen console.table para visualizar a cada uno de ellos.
// Método: Si tiene deuda (true), entonces que retorne, que lo llame el callcenter


class Deudor {
    constructor (nombre, apellido, edad, numeroDeCuenta, direccion, email, tarjetaDeCredito, deuda){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.cbu = numeroDeCuenta
        this.direccion = direccion
        this.email = email
        this.tarjeta = tarjetaDeCredito  
        this.deuda = deuda
    }
    tieneDeuda(){
        if(this.deuda == true) {
            return "hasta las re manijas hermano, enseguida te llamamos"
        }
    }
}

const alan  = new Deudor( "Alan","Fernandez", 20, 9453532342312, "Los Polvorines", "alan@emailfalso.com" ,true, true)

console.log(alan)
console.table(alan)

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