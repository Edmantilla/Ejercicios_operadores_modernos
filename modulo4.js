const estudiante = {
  nombre: "Laura",
  notas: [4.0, 3.8]
};

function actualizarNotas(estudiante, ...nuevasNotas) {
  // 2. Crear nuevo arreglo combinando notas anteriores y nuevas
  const notasActualizadas = [...estudiante.notas, ...nuevasNotas];

  // 3. Devolver un nuevo objeto SIN mutar el original
  const nuevoEstudiante = {
    ...estudiante,
    notas: notasActualizadas
  };

  return nuevoEstudiante;
}

// Uso:
const estudianteActualizado = actualizarNotas(estudiante, 4.5, 3.9);

// 4. Verificar inmutabilidad
console.log("Estudiante original:", estudiante);
console.log("Estudiante actualizado:", estudianteActualizado);

