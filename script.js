document.addEventListener("DOMContentLoaded", () => {
    // seleccionar elementos del dom
    let botonderecho = document.querySelector(".botonderecho"); // boton derecho
    let botonizquierdo = document.querySelector(".botonizquierdo"); // boton izquierdo
    let slider = document.querySelector("#slider"); // contenedor del carrusel
    let seccioncarrusel = document.querySelectorAll(".seccioncarrusel"); // contiene las imagenes

    // iniciar letiables
    let posicion = 0; // posicion actual del carrusel
    let totalimg = seccioncarrusel.length; // numero de imagenes (3)

    // escuchador para el boton avanzar
    botonderecho.addEventListener("click", () => {
        // incrementar la posicion
        posicion=posicion+1;
        // verificar si posicion es mayor a totalimg vuelve a 0
        if (posicion >= totalimg) {
            posicion = 0;
        }
        // llama a la funcion para actualizar el carrusel con la nueva posicion
        actualizar();
    });

    // escuchador para el boton retroceder
    botonizquierdo.addEventListener("click", () => {
        // decrementar la posicion
        posicion=posicion - 1;
        // verificar si posicion es menor a 0, avanza a la ultima imagen
        if (posicion < 0) {
            posicion = totalimg - 1;
        }
        // llama a la funcion para actualizar el carrusel con la nueva posicion
        actualizar();
    });

    // actualiza el carrusel con la nueva posicion
    function actualizar() {
        // transicion
        slider.style.transition = "transform ease .6s";
        // mover en el eje de las x segun posicion
        slider.style.transform = `translateX(-${posicion * 33.3}%)`; /* 100 / 3 = 33.3 */ 
    }
});

function verificar() {
    // traer los valores
    let fechaSoli = document.getElementById('fecha_solicitud').value;
    let direccion = document.getElementById('direccion').value;
    let tipoResi = document.getElementById('tipo_residencia').value;
    let plan = document.getElementById('plan').value;
    let horarioPref = document.getElementById('horario_preferencia').value;
    let dni = document.getElementById('dni').value;
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let fechaNac = document.getElementById('fecha_nacimiento').value;
    let telefono = document.getElementById('telefono').value;

    // arreglo para campos incompletos (indefinido)
    let camposIncompletos = [];

    // verifica campo por campo
    if (fechaSoli === "") {
        camposIncompletos.push('fecha_solicitud'); // push coloca el elemento en el arreglo 
    }
    if (direccion === "") {
        camposIncompletos.push('direccion');
    }
    if (tipoResi === "") {
        camposIncompletos.push('tipo_residencia');
    }
    if (plan === "") {
        camposIncompletos.push('plan');
    }
    if (horarioPref === "") {
        camposIncompletos.push('horario_preferencia');
    }
    if (dni === "") {
        camposIncompletos.push('dni');
    }
    if (nombre === "") {
        camposIncompletos.push('nombre');
    }
    if (apellido === "") {
        camposIncompletos.push('apellido');
    }
    if (fechaNac === "") {
        camposIncompletos.push('fecha_nacimiento');
    }
    if (telefono === "") {
        camposIncompletos.push('telefono');
    }
    // muestra alerta
    if (camposIncompletos.length > 0) {
        alert('Campos del formulario incompletos');
        // resalta
        for (let i = 0; i < camposIncompletos.length; i++) {
            let label = document.querySelector('label[for="' + camposIncompletos[i] + '"]');
            if (label) {
                label.style.color = 'red'; // color rojo
            }
        }
    }
}
