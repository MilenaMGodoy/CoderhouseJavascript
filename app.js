
/*La pagina es una plataforma de educación con cursos de distintas areas, 
distintas modalidades, en la que cada alumno podra generar su perfil de 
usuario y asi ingresar al campus para seleccionar el curso que quiera 
realizar, pudiendo seleccionar entre diferentes variables si la disponibilidad
del curso se lo permite.
Va a poder seleccionar horarios, modalidad, area de estudio, curso,
forma de pago (a raiz de esto posibilidad de dctos), descuentos por inscribirse
a mas de uno, duracion, poder solicitar constancias en el caso que lo necesite
y aplicar cupones de descuento.

Area
Curso
Horarios
Forma de pago
Descuentos por alumno
Cupones de descuento
Constancia
*/




/*
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

const catalogo = []
*/


const ingresarCurso = () => {
    let curso = prompt("Ingresa el curso")
    let duracion = prompt("Ingresa la duracion")
    let precio = Number(prompt("Ingresa el valor"))

    const curso1 = new Curso (curso, duracion, precio)
    catalogo.push(curso1)

    console.log(catalogo);
}

ingresarCurso() 


let TODOS_CURSOSID= Number(prompt('Elegi el curso:${}'))










































