// Crea una función llamada registrarUsuarios que reciba un primer argumento obligatorio
// con la información de un usuario principal (nombre, edad) y luego un número
// indeterminado de usuarios adicionales usando parámetros rest.
// 1. Usa destructuración para extraer nombre y edad del usuario principal.
// 2. La función debe mostrar un mensaje indicando cuántos usuarios adicionales se
// registraron.
// Resultado esperado (ejemplo):
// Usuario principal: Ana, Edad: 28 — Usuarios adicionales registrados: 3


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

