const express = require('express');
const router = express.Router();
// const { usuarioEsSuperAdmin } = require('../middleware/usuarioMiddleware');

const {
    getAdminInicio,
    getAdminEntradas,
    getAdminUsuarios,
    getCrearArticulo,
    getEditarArticulo,
    crearArticulo,
    editarArticulo,
    eliminarUsuario,
    eliminarArticulo
} = require('../controllers/adminController');


/**
 * Ruta para obtener la lista de artículos.
 * @name GET /admin
 * @function
 * @memberof module:adminRoutes
 * @inner
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 */
router.get('/', getAdminInicio);

router.get('/articulos', getAdminEntradas);

router.get('/usuarios', getAdminUsuarios);

/**
 * Ruta para mostrar el formulario de creación de un artículo.
 * @name GET /admin/crear
 * @function
 * @memberof module:adminRoutes
 * @inner
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 */
router.get('/crear/:id', getCrearArticulo);

router.get('/editar/:id', getEditarArticulo);

router.post('/crear', crearArticulo);

router.put('/editar', editarArticulo);

// router.delete('/usuarios/eliminar/:id', usuarioEsSuperAdmin, eliminarUsuario);

// Ruta para eliminar un artículo
router.delete('/articulos/eliminar/:id', eliminarArticulo);

module.exports = router