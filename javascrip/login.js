function validaRegistro() {
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    // Validaciones básicas
    if (usuario === "") {
        alert("El campo usuario no puede estar vacío.");
        return; // Detiene la ejecución si hay un error
    }

    if (contrasena === "") {
        alert("El campo contraseña no puede estar vacío.");
        return; // Detiene la ejecución si hay un error
    }

    // Aquí puedes agregar lógica para verificar usuario y contraseña
    // Por ejemplo, con datos predefinidos para la demostración
    const usuarioValido = "admin";
    const contrasenaValida = "1234";

    if (usuario === usuarioValido && contrasena === contrasenaValida) {
        // Si las credenciales son correctas, redirige a la página principal
        window.location.href = "pagina-principal.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}