

class SOLICITUD{
    constructor(cliente,curso,turno,modalidad,pago){
        this.cliente=cliente;
        this.curso=curso;
        this.turno=turno;
        this.modalidad=modalidad;
        this.pago=pago;
        this.constancia=[];
    }
}

class CURSOS{
    constructor(duracion,turno,modalidad,pago){
    this.duracion=duracion;
    this.turno=turno;
    this.modalidad=modalidad;
    this.pago=pago;
    this.constancia=[];
}
definirDuracion(duracion) {
    this.duracion = duracion;
}
definirTurno(turno) {
    this.turno = turno;
}
definirModalidad(modalidad) {
    this.modalidad = modalidad;
}
definirPago(pago) {
    this.pago = pago;
}
agregarConstancia(constancia) {
    this.constancia.push(constancia);
}
}

const TURNOS=[
    {Nombre:'Mañana', Precio:500, ID:1},
    {Nombre:'Tarde', Precio:300, ID:2},
    {Nombre:'Noche', Precio:100, ID:3},

];

const PAGO=[
    {Nombre:'Efectivo', Recargo:200, ID:1},
    {Nombre:'Débito', Recargo:0, ID:2},
    {Nombre:'Crédito', Recargo:100, ID:3},
    {Nombre:'PayPal', Recargo:0, ID:4},
];

const DURACION= prompt('Regular o Intensivo')

const Modalidad= prompt('Presencial o virtual')




verValorFinalCurso(); {
    let ValorFinalCurso= 0;
    valorFinalCurso +=this.turno.ValorFinal;
    valorFinalCurso +=this.pago.ValorFinal;

    const valor = this.constancia.map((constancia)=>
    constancia.ValorExtra);
    let ValorExtra = 0;
    if (valor.length > 0){
        ValorExtra =valor.reduce((acc, value) => acc + value);
}
    return Valor + ValorExtra;
}
verValorFinalCurso(); {
    return this.verValorFinalCurso() + this.curso.verValorFinalCurso();
}
agregarCurso(curso); {
    this.curso = curso;
}
agregarConstancia(constancia); {
    this.constancia.push(constancia);
}
