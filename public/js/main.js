// adminScript.js

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar los botones de crear artículo y cerrar sesión
    const crearArticuloBtn = document.querySelector('#crearArticuloBtn');
    const cerrarSesionBtn = document.querySelector('#cerrarSesionBtn');
    // Seleccionar los botones de editar y eliminar en las entradas de blog
    const editarEntradaBtns = document.querySelectorAll('#editarEntradaBtns');
    const eliminarEntradaBtns = document.querySelectorAll('#eliminarEntradaBtns');
    // Seleccionar el botón de eliminar en la tabla de usuarios
    const eliminarUsuarioBtns = document.querySelectorAll('#eliminarUsuarioBtns');
  
    // Agregar evento al botón de crear artículo
    crearArticuloBtn.addEventListener('click', () => {
      
      console.log('Botón Crear Artículo clickeado');
    });
  
    // Agregar evento al botón de cerrar sesión
    cerrarSesionBtn.addEventListener('click', () => {
      
      console.log('Botón Cerrar Sesión clickeado');
    });
  
  
    // Agregar eventos a los botones de editar en las entradas de blog
    editarEntradaBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        
        console.log('Botón Editar entrada clickeado');
      });
    });
  
    // Agregar eventos a los botones de eliminar en las entradas de blog
    eliminarEntradaBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        
        console.log('Botón Eliminar entrada clickeado');
      });
    });
  
    
  
    // Agregar eventos a los botones de eliminar en la tabla de usuarios
    eliminarUsuarioBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        
        console.log('Botón Eliminar usuario clickeado');
      });
    });
  });
  