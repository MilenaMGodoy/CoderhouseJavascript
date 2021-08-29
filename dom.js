
const ul_solicitud=document.querySelector('.solicitud_ul');
const b_valorFinal=document.querySelector('#valorFinal');

const renderSolicitud = (solicitud)=>{
    const {curso,pago,turno} =pedido;
}

const div_contenedor =document.createElement('div');

const div_curso =document.createElement('div');
const div_pago =document.createElement('div');
const div_turno =document.createElement('div');

const p_curso_label =document.createElement('p');
p_curso_label.textContent='Curso'
const p_curso_value =document.createElement('p');
p_curso_value.textContent=`${curso.Nombre}$${curso.Valor}`;

div_curso.appendChild(p_curso_label);
div_curso.appendChild(p_curso_value);

const p_pago_label =document.createElement('p');
p_pago_label.textContent='Pago'
const p_pago_value =document.createElement('p');
p_pago_value.textContent=`${pago.Nombre}$${pago.Valor}`;

div_pago.appendChild(p_pago_label);
div_pago.appendChild(p_pago_value);

const p_turno_label =document.createElement('p');
p_turno_label.textContent='Turno'
const p_turno_value =document.createElement('p');
p_turno_value.textContent=`${turno.Nombre}$${turno.Valor}`;

div_turno.appendChild(p_turno_label);
div_turno.appendChild(p_turno_value);


div_contenedor.appendChild(div_curso);
div_contenedor.appendChild(div_pago);
div_contenedor.appendChild(div_turno);


<div>
    <div>
        <p>Curso:</p>
        <p>Impresionismo - $2000</p>
    </div>

    <div>
        <p>Pago:</p>
        <p>Debito</p>
    </div>

    <div>
        <p>Turno:</p>
        <p>Mañana</p>
    </div>
</div>

