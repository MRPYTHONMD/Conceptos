/*. Crear una función llamada "agregarProducto" que tome dos parámetros: un objeto "producto" con
las propiedades "nombre", "precio" y "disponible", y un array "productos". La función debe agregar
el objeto al array y devolver el array actualizado. Si el producto ya existe en el array, la función debe
devolver un mensaje indicando que ya está en el array. */

function agregarProducto(producto, productos) {
    const existe = productos.find( p => p.nombre === producto.nombre);
  
    if (existe) {
      return "El producto ya existe en el array";
    } else {
      productos.push(producto);
      return productos;
    }
  }
  
  const productos = [
    { nombre: "leche", precio: 4000, disponible: true },
    { nombre: "pan", precio: 300, disponible: false },
  ];
  
  const productoNuevo = { nombre: "papas", precio: 3000, disponible: true };
  
  const productosActualizados = agregarProducto(productoNuevo, productos);
  
  console.log(productosActualizados);
  
  const productoExistente = { nombre: "papas", precio: 1000, disponible: true };
  console.log(agregarProducto(productoExistente, productos))