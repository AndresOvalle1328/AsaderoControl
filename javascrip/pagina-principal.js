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

let entradas = [
    {
        "username": "bode2024",
        "producto": "pollo",
        "categoria": "carnicos",
        "fecha": "03-10-2024",
        "fechaVencimiento": "03-11-2024",
        "cantidadIngreso": "50",
        "total": "50"
    },
    {
        "username":"bode2024",
        "producto": "pollo Broster",
        "categoria": "Carnicos",
        "fecha": "04-10-2024",
        "fechaVencimiento": "04-11-2024",
        "cantidadIngreso": 45,
        "Total": 45
    },
    {
        "username":"bode2024",
        "producto": "bandeja mixta",
        "categoria": "Congelados",
        "fecha": "02-11-2024",
        "fechaVencimiento": "02-12-2024",
        "cantidadIngreso": 15,
        "Total": 15
    },
    {
        "username":"bode2024",
        "producto": "Carne",
        "categoria": "Carnicos",
        "fecha": "04-10-2024",
        "fechaVencimiento": "04-12-2024",
        "cantidadIngreso": 80,
        "Total": 80
    },
    {
        "username":"bode2024",
        "producto": "churrasco",
        "categoria": "Carnicos",
        "fecha": "04-11-2024",
        "fechaVencimiento": "30-10-2024",
        "cantidadIngreso": 20,
        "Total": 20
    }
];
let salidas = [
    {
        "username":"bode2024",
        "producto": "pollo",
        "categoria": "Carnicos",
        "personal":"Marcos",
        "fecha": "03-10-2024",
        "fechaVencimiento": "03-11-2024",
        "cantidadSalida": 35,
        "Total": 15
    },
    {
        "username":"bode2024",
        "producto": "pollo Broster",
        "categoria": "Carnicos",
        "personal":"laura",
        "fecha": "04-10-2024",
        "fechaVencimiento": "04-11-2024",
        "cantidadSalida": 20,
        "Total": 25
    },
    {
        "username":"bode2024",
        "producto": "bandeja mixta",
        "categoria": "Congelados",
        "personal":"luisa",
        "fecha": "02-11-2024",
        "fechaVencimiento": "02-12-2024",
        "cantidadSalida": 10,
        "Total": 5
    },
    {
        "username":"bode2024",
        "producto": "Carne",
        "categoria": "Carnicos",
        "personal":"angelica",
        "fecha": "04-10-2024",
        "fechaVencimiento": "04-12-2024",
        "cantidadSalida": 65,
        "Total": 10
    },
    {
        "username":"bode2024",
        "producto": "churrasco",
        "categoria": "Carnicos",
        "personal":"laura",
        "fecha": "04-10-2024",
        "fechaVencimiento": "30-10-2024",
        "cantidadSalida": 8,
        "Total": 12
    }
];

// console.log(entradas[0].producto);
// console.log(entradas[1].producto);
entradas.forEach(function(recorridoInventario){
console.log(recorridoInventario.username);
});

for(contador=0;contador<=2;contador++){
    console.log(entradas[contador]);
}