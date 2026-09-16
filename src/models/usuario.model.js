// usuario.model.js
// Define la forma de un usuario dentro de la API y el lugar donde,
// por ahora, se van a almacenar (un arreglo en memoria).
//
// Nota: esto NO es una base de datos real. Cada vez que reinicies el
// servidor (Ctrl+C y volver a correr node src/index.js), este arreglo
// se vacía. Es suficiente para la evidencia, ya que el enunciado no
// pide persistencia en disco ni en base de datos.

// Arreglo donde se guardan los usuarios registrados.
// Cada usuario tendrá la forma: { id, usuario, contrasena }
const usuarios = [];

// Contador simple para asignar un id único a cada usuario nuevo.
let siguienteId = 1;

/**
 * Busca un usuario por su nombre de usuario.
 * @param {string} nombreUsuario
 * @returns {object|undefined} el usuario encontrado, o undefined si no existe
 */
function buscarPorUsuario(nombreUsuario) {
  return usuarios.find((u) => u.usuario === nombreUsuario);
}

/**
 * Crea y guarda un nuevo usuario en el arreglo en memoria.
 * @param {string} nombreUsuario
 * @param {string} contrasena
 * @returns {object} el usuario recién creado
 */
function crearUsuario(nombreUsuario, contrasena) {
  const nuevoUsuario = {
    id: siguienteId++,
    usuario: nombreUsuario,
    contrasena: contrasena,
  };
  usuarios.push(nuevoUsuario);
  return nuevoUsuario;
}

// Exportamos las funciones para que el controlador pueda usarlas
module.exports = {
  buscarPorUsuario,
  crearUsuario,
};