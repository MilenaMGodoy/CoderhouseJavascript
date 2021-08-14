

let nombre = prompt("Ingresa tu nombre");
let contrasenia = prompt("Ingresa tu contraseña");
let anioNacimiento = Number(prompt("Ingresa tu año de nacimiento"));
let anioActual = Number(prompt("Ingresa el año actual"));
let edad = anioActual - anioNacimiento;
let confirmar = confirm ("desea ingresar?");


if (contrasenia.toUpperCase() == "CODERHOUSE" && anioActual == 2021){
    alert ("contraseña = " + contrasenia + "Nombre: " + nombre);
    if (anioNacimiento >= 1993){
        alert("podes entrar")
    }else if (edad >= 18 && edad <= 50){
        alert("podes entrar")
    }else{
        alert("no cumplis con la edad adecuada")
    }
    }
else {
    alert ("la contraseña es incorrecta");
}

class Curso {
    constructor(curso, duracion, precio) {
        this.curso = curso;
        this.duracion = duracion;
        this.precio = precio
    }
}

const catalogo = []



const ingresarCurso = () => {
    let curso = prompt("Ingresa el curso")
    let duracion = prompt("Ingresa la duracion")
    let precio = Number(prompt("Ingresa el valor"))

    const curso1 = new Curso (curso, duracion, precio)
    catalogo.push(curso1)

    console.log(catalogo);
}

ingresarCurso() 











































