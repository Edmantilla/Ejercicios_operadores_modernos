function mostrarDireccion(direccion) {
  try {
    // 1. Desestructuración
    const { ciudad, pais } = direccion;

    // Validación de propiedades
    if (!ciudad || !pais) {
      throw new Error("La información de la dirección no es válida");
    }

    console.log(`Ciudad: ${ciudad}, País: ${pais}`);

  } catch (error) {
    // 2 y 3. Capturar y mostrar error personalizado
    console.error(error.message);
  }
}

// Ejemplo correcto
mostrarDireccion({ ciudad: "Bogotá", pais: "Colombia" });

// Ejemplo con error
mostrarDireccion({ ciudad: "Bogotá" });

