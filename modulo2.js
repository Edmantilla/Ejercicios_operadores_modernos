const productos = ["teclado", "mouse", "pantalla"];

function agregarProducto(lista, nuevoProducto) {
  // 1 y 2. No modificar la lista original y crear una nueva usando spread
  const nuevaLista = [...lista, nuevoProducto];
  return nuevaLista;
}

// Ejemplo de uso:
const productosActualizados = agregarProducto(productos, "impresora");

// 3. Mostrar ambos arreglos para comprobar la inmutabilidad
console.log("Arreglo original:", productos);
console.log("Nuevo arreglo:", productosActualizados);
