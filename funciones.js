

const ALUMNO=prompt('Hola!Ingresa tu nombre')
const Inscripcion=confirm ('Hola ${ALUMNO} ! ¿Querés anotarte en algún curso?');
let InscripcionFinal= null;
if(Inscripcion){
    const NuevaInscripcion= newInscripcion(curso,ALUMNO);
    const NuevoCurso = new Curso();

    const Duracion= prompt('Regular o Intensivo');
    NuevoCurso.definirDuracion(Duracion);

    const Modalidad= prompt('Presencial o virtual');
    NuevoCurso.definirModalidad(Modalidad);

    

}

if(turnoCurso.Seleccion) {
    let TipoID=Number(prompt(
            `Selecciona el horario:`${TURNOS.map((turno)=> {
        return ${turno.ID}) ${turno.Nombre}';
        }).join(' ')}',
    ),
    );

    let ElegirTurno=TURNOS.find((turno)=>turno.ID===TurnoID);

    while (!ElegirTurno) {
        TurnoID=Number(
        prompt(`Selecciona el horario: ${TURNOS.map((turno)=>
        ${turno.ID}) ${turno.Nombre}`).join('')}`),
        );
        ElegirTurno = TURNO.find((turno)=>turno.ID===TipoID);
    }