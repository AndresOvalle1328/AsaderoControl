const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))


mongoose.connect('mongodb://localhost:27017//AsaderoControl')
.then(()=> console.log('conectado a MongoDB'))
.catch(error => {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1);
});

// Definir el esquema y modelo de Mongoose para cada proyecto aplicado
const entradasSchema = new mongoose.Schema({
    nombreDelProducto: { type: String, required: true },
    categoria: { type: String, required: true },
    cantidad: { type: Number, required: true, min: 0 },
    fechaDeIngreso: { type: Date, required: true},
    fechaDeVencimiento: { type: Date, required: true},
}, { timestamps: true });  // Añadir timestamps para createdAt y updatedAt

const Inventario = mongoose.model('entrada', entradasSchema);

// Ruta GET para obtener todos los productos del inventario
app.get('/api/entrada', async (req, res) => {
    try {
        const productos = await Inventario.find();  // Buscar todos los productos
        res.status(200).json(productos);  // Responder con los productos
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
