/**
 * Módulo principal de la aplicación frontend.
 * @module app
 */

const express = require('express');
const { dbConnect } = require('./utils/connection');
require('dotenv').config();
const fetch = ('node-fetch');

const app = express();

// Conexión a la base de datos
dbConnect();

// Parseo de datos de formularios
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT;

// Configuración de multer para subir archivos
const multer = require('multer');
const upload = multer({ dest: 'public/assets/uploads' });

// Configuración de archivos estáticos
app.use(express.static(__dirname + 'public'));
app.use('/images', express.static('images'));

// Configuración de las plantillas EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Rutas del frontend
app.use("/", require("./routes/frontRoutes"));
app.use("/admin", require('./routes/adminRoutes'));

// Manejo de error 404
app.use((req, res, next) => {
    res.status(404).render('404', {
        titulo: 'ERROR 404'
    });
});

// Manejo de subida de archivos con Multer
app.post('/stats', upload.single('uploaded_file'), function (req, res) {
    console.log(req.file, req.body);
});

// Inicio del servidor
app.listen(port, () => {
    console.log(`Servidor frontend a la escucha en el puerto ${port}`);
});
