const express = require('express');
const router = express.Router();
const { mostrarListaArticulos, mostrarArticuloCompleto, buscarArticulos } = require('../controllers/frontcontrollers')

/**
 * Rutas públicas para visualizar y buscar artículos.
 * @module routes/publicRoutes
 */

/**
 * Ruta para mostrar la lista de artículos en la vista "listaArticulos".
 * @name GET /
 * @function
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {void}
 */
router.get('/', mostrarListaArticulos);

/**
 * Ruta para mostrar un artículo completo en la vista "articuloCompleto".
 * @name GET /article/:id
 * @function
 * @param {Object} req - Objeto de solicitud HTTP con el parámetro "id".
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {void}
 */
router.get('/article/:id', mostrarArticuloCompleto);

/**
 * Ruta para buscar y mostrar artículos en la vista "busquedaArticulos".
 * @name GET /search
 * @function
 * @param {Object} req - Objeto de solicitud HTTP con el parámetro "query".
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {void}
 */
router.get('/search', buscarArticulos);

module.exports = router;
