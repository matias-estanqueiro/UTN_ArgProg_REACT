const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const tiposeguro = document.getElementById("tiposeguro").value;

    Swal.fire({
        icon: "success",
        title: "Datos enviados",
        html: `<b><p>Nombre: ${nombre}</p>
            <p>Apellido: ${apellido}</p>
            <p>DNI: ${dni}</p>
            <p>Email: ${email}</p>
            <p>Teléfono: ${telefono}</p>
            <p>Valor del plan: ${tiposeguro}</p></b>`,
    });

    form.reset();
});
