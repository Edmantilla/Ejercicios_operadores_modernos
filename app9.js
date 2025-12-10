
// Función registrarUsuarios
function registrarUsuarios(usuarioPrincipal, ...otrosUsuarios) {
    // 1. Usa destructuración para extraer nombre y edad del usuario principal.
    const { nombre, edad } = usuarioPrincipal;

    // 2. La función debe mostrar un mensaje indicando cuántos usuarios adicionales se registraron.
    console.log(`Usuario principal: ${nombre}, Edad: ${edad} — Usuarios adicionales registrados: ${otrosUsuarios.length}`);
}

// Ejemplo de uso
const usuarioMain = { nombre: "Ana", edad: 28 };
registrarUsuarios(usuarioMain, "Carlos", "Luis", "Maria");

