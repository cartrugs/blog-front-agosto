/**
 * Muestra una lista de artículos en la vista "listaArticulos".
 * @async
 * @function mostrarListaArticulos
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {void}
 * @throws {Error} Error en caso de fallar al obtener los datos.
 */
const mostrarListaArticulos = async (req, res) => {
    try {

        const resp = await fetch('https://blog-agosto.onrender.com/api/v1/blog');
        
        const articulos = await Articulo.find().limit(5); // Obtención de los primeros 5 artículos
        res.render('listaArticulos', { articulos });
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        res.status(500).send('Error en el servidor');
      }
    };

/**
 * Muestra un artículo completo en la vista "articuloCompleto".
 * @async
 * @function mostrarArticuloCompleto
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {void}
 * @throws {Error} Error en caso de fallar al obtener el artículo.
 */
const mostrarArticuloCompleto = async (req, res) => {
  try {

    const resp = await fetch('https://blog-agosto.onrender.com/api/v1/blog');

    const articulo = await Articulo.findById(req.params.id);
    res.render('articuloCompleto', { articulo }); 
  } catch (error) {
    console.error('Error al obtener el artículo:', error);
    res.status(500).send('Error en el servidor');
  }
};

/**
 * Busca y muestra artículos que coinciden con un término de búsqueda en la vista "busquedaArticulos".
 * @async
 * @function buscarArticulos
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {void}
 * @throws {Error} Error en caso de fallar al buscar los artículos.
 */
const buscarArticulos = async (req, res) => {
  try {

    const resp = await fetch('https://blog-agosto.onrender.com/api/v1/blog');
    
    const busqueda = req.query.query;
    const resultadosBusqueda = await Articulo.find({
      title: { $regex: busqueda } 
    });
    res.render('busquedaArticulos', { resultadosBusqueda });
  } catch (error) {
    console.error('Error al buscar artículos:', error);
    res.status(500).send('Error en el servidor');
  }
};

  
module.exports = {
    mostrarListaArticulos,
    mostrarArticuloCompleto,
    buscarArticulos
};