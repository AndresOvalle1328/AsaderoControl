function agregarProducto() {
    let nombre = document.getElementById("nombre").value;
    let categoria = document.getElementById("categoria").value;
    let cantidad = document.getElementById("cantidad").value;
    let fecha_Ingreso = document.getElementById("fechaIngreso").value;
    let fecha_Vencimiento = document.getElementById("fechaVencimiento").value;
    

    if (nombre == "" || categoria == "" || cantidad == "" || fecha_Vencimiento == "" || fecha_Ingreso == "") {
        alert("Ningún campo puede estar vacío");
    } else if (cantidad <= 0) {
        alert("El valor debe ser mayor a 0");
    } else {
        let detalleinventario = document.getElementById("inventario-body");
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td scope="col"><input type="text" value="${nombre}" disabled></td>
            <td scope="col"><input type="text" value="${categoria}" disabled></td>
            <td scope="col"><input type="number" value="${cantidad}" disabled></td>
            <td scope="col"><input type="date" value="${fecha_Ingreso}" disabled></td>
            <td scope="col"><input type="date" value="${fecha_Vencimiento}" disabled></td>
            
            <td scope="col">
                <button onclick="editarFila(this)">Editar</button>
                <button onclick="eliminarFila(this)">Eliminar</button>
            </td>
        `;
        detalleinventario.appendChild(fila);

        // Limpiar los campos del formulario
        document.getElementById("nombre").value = "";
        document.getElementById("categoria").value = "";
        document.getElementById("cantidad").value = "";
        document.getElementById("fechaIngreso").value = "";
        document.getElementById("fechaVencimiento").value = "";
        
    }
}

// Función para editar una fila
function editarFila(boton) {
    let fila = boton.parentNode.parentNode;
    let inputs = fila.getElementsByTagName("input");

    for (let input of inputs) {
        input.disabled = !input.disabled; // Alterna entre habilitar y deshabilitar
    }

    boton.textContent = boton.textContent === "Editar" ? "Guardar" : "Editar";
}

// Función para eliminar una fila
function eliminarFila(boton) {
    let fila = boton.parentNode.parentNode;
    fila.remove();
}

