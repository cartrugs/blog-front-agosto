// Función para mostrar el panel de administración
const getAdminInicio = async (req, res) => {
    try {
        
        const resp = await fetch('https://blog-agosto.onrender.com/api/v1/blog');

        if (resp.ok) {
            const articulos  = await resp.json()
            res.render('homeAdmin.ejs', { 
                titulo: 'Panel de Administración',
                articulos: articulos.data
            });
        }
        
    } catch (error) {
        console.error('Error en getAdminInicio:', error);
        res.status(500).send('Error interno del servidor');
    }
};

// Función para mostrar las entradas de blog en el panel de administración
const getAdminEntradas = async (req, res) => {
    try {

        const resp = await fetch('https://blog-agosto.onrender.com/api/v1/blog/entradas');

        if (resp.ok) {
            const articulos  = await resp.json()
            res.render('editarArticuloAdmin.ejs', { 
                titulo: 'Panel de Administración',
                articulos: articulos.data
            });
        }

    } catch (error) {
        console.error('Error en getAdminEntradas:', error);
        res.status(500).send('Error interno del servidor');
    }
};

// Función para mostrar la lista de usuarios en el panel de administración
const getAdminUsuarios = async (req, res) => {
    try {

        const resp = await fetch('https://blog-agosto.onrender.com/api/v1/blog/usuarios')
        // Obtener la lista de usuarios desde tu base de datos o fuente de datos
        const usuarios = await obtenerListaDeUsuarios(); 

        res.render('homeAdmin.ejs', { 
            titulo: 'Administrar Usuarios', 
            usuarios 
        });
    } catch (error) {
        console.error('Error en getAdminUsuarios:', error);
        res.status(500).send('Error interno del servidor');
    }
};

// Función para mostrar el panel de creación de artículos
const getCrearArticulo = async (req, res) => {
    try {
        res.render('crearArticuloAdmin.ejs', { 
            titulo: 'Crear Artículo'
        });
    } catch (error) {
        console.error('Error en getCrearArticulo:', error);
        res.status(500).send('Error interno del servidor');
    }
};

// Función para obtener el formulario para obtener el artículo que se desa editar
const getEditarArticulo = async (req, res) => {
    try {
        const articleId = req.params.id;

        if (articleId) {
            const resp = await fetch(`https://blog-agosto.onrender.com/api/v1/blog/articulos/${articleId}`);
            if (resp.ok) {
                const existingArticle = await resp.json();
                res.render('editarArticuloAdmin.ejs', { 
                    titulo: 'Editar Artículo',
                    articleId: articleId,
                    existingArticle: existingArticle
                });
            }
        } else {
            res.redirect('/admin'); // Redirecciona si no se proporciona un ID válido
        }
    } catch (error) {
        console.error('Error en getEditarArticulo:', error);
        res.status(500).send('Error interno del servidor');
    }
};

// Función para mostrar el formulario para la creación de artículos
const crearArticulo = async (req, res) => {

    const { titulo, imagen, excerp, category, content} = req.body; 
    const body = {
        titulo,
        imagen,
        excerp,
        category,
        content
    };

    const resp = await fetch('https://blog-agosto.onrender.com/api/v1/blog', {
        method: 'POST',
        body: JSON.stringify(body),
        //EN LA DOCUMENTACION DE LA CLASE DE FETCH
        headers: {
            'Content-Type': 'application/json'
        }

    })

    //CONFIRMAR RUTA
    res.redirect('/admin/blog/crearArticulo')
};

// Función para poder hacer la edición de artículo
const editarArticulo = async (req, res) => {
    console.log(req.body);
    try {
        const articleId = req.params.id; // Obtiene el ID del artículo si está presente en la URL

        // Si hay un ID de artículo, podrías obtener los datos del artículo existente desde la API
        let existingArticle = null;
        if (articleId) {
            const resp = await fetch(`https://blog-agosto.onrender.com/api/v1/blog/articulos/${articleId}`);
            if (resp.ok) {
                existingArticle = await resp.json();
            }
        }

        res.render('EditarArticuloAdmin.ejs', { 
            titulo: 'Editar Artículo',
            articleId: articleId, // Pasa el ID del artículo a la vista
            existingArticle: existingArticle // Pasa los datos del artículo existente a la vista
        });
    } catch (error) {
        console.error('Error en getCrearEditarArticulo:', error);
        res.status(500).send('Error interno del servidor');
    }
};

// Función para eliminar el usuario
const eliminarUsuario = async (req, res) => {
    try {
        const userId = req.params.id;

        // Realizar la eliminación del usuario en la base de datos
        const resp = await fetch(`https://blog-agosto.onrender.com/api/v1/blog/usuarios/${userId}`, {
            method: 'DELETE',
            // Agregar encabezados o autenticación si es necesario
        });

        if (resp.ok) {
            // Redireccionar a la página de administración o realizar otra acción después de la eliminación
            res.redirect('/admin/usuarios');
        } else {
            res.status(resp.status).send('Error al eliminar el usuario');
        }
    } catch (error) {
        console.error('Error en eliminarUsuario:', error);
        res.status(500).send('Error interno del servidor');
    }
};

const eliminarArticulo = async (req, res) => {
    try {
        const articleId = req.params.id;

        // Realizar la eliminación del artículo en la base de datos
        const resp = await fetch(`https://blog-agosto.onrender.com/api/v1/blog/articulos/${articleId}`, {
            method: 'DELETE',
            // Agregar encabezados o autenticación si es necesario
        });

        if (resp.ok) {
            // Redireccionar a la página de administración de artículos o realizar otra acción después de la eliminación
            res.redirect('/admin/articulos');
        } else {
            res.status(resp.status).send('Error al eliminar el artículo');
        }
    } catch (error) {
        console.error('Error en eliminarArticulo:', error);
        res.status(500).send('Error interno del servidor');
    }
};



module.exports = {
    getAdminInicio,
    getAdminEntradas,
    getAdminUsuarios,
    getCrearArticulo,
    getEditarArticulo,
    crearArticulo,
    editarArticulo,
    eliminarUsuario,
    eliminarArticulo
};
