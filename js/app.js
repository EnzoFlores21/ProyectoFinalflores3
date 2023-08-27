const listaProductos = document.getElementById('listaTurnos');

fetch("./js/database.json")
    .then(response => response.json())
    .then(data => {
        mostrarTurnos(data);
    })

function mostrarTurnos(turnos) {
    turnos.forEach(turnos => {
        const li = document.createElement("li");
        li.innerText = turnos.nombre + " - " + turnos.turno;
        listaProductos.append(li);
    });
}



document.addEventListener('DOMContentLoaded', function () {
    const registroTurnosForm = document.getElementById('registroTurnosForm');
    const listaTurnos = document.getElementById('listaTurnos');

    registroTurnosForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const turno = document.getElementById('turno').value;
        const fecha = document.getElementById('fecha').value;

        // Crear un elemento de lista para mostrar el turno registrado
        const turnoRegistrado = document.createElement('li');
        turnoRegistrado.textContent = `Nombre: ${nombre}, Apellido: ${apellido}, Email: ${email}, Turno: ${turno}, Fecha: ${fecha}`;

        // Agregar el turno registrado a la lista
        listaTurnos.appendChild(turnoRegistrado);

        // Limpiar el formulario
        registroTurnosForm.reset();
    });
});

const boton = document.getElementById('btn')

boton.addEventListener("click", registrarForm);
function registrarForm() {

    Toastify({
        text: "Registrado",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, ##350D70, #711DF0)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}
