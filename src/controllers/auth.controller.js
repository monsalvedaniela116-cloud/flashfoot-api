// auth.controller.js
// Contiene la lógica de negocio para el registro e inicio de sesión de usuarios.
// Las rutas (en src/routes) solo dirigen la petición hacia estas funciones.

const { buscarPorUsuario, crearUsuario } = require('../models/usuario.model');

/**
 * Registra un nuevo usuario en el sistema.
 * Espera en el body: { usuario: string, contrasena: string }
 */
function registrar(peticion, respuesta) {
  const { usuario, contrasena } = peticion.body;

  if (!usuario || !contrasena) {
    return respuesta.status(400).json({
      mensaje: 'Los campos usuario y contrasena son obligatorios.',
    });
  }

  const usuarioExistente = buscarPorUsuario(usuario);
  if (usuarioExistente) {
    return respuesta.status(400).json({
      mensaje: 'Ese nombre de usuario ya está registrado.',
    });
  }

  const nuevoUsuario = crearUsuario(usuario, contrasena);

  return respuesta.status(201).json({
    mensaje: 'Usuario registrado exitosamente.',
    usuario: {
      id: nuevoUsuario.id,
      usuario: nuevoUsuario.usuario,
    },
  });
}

/**
 * Autentica a un usuario existente.
 * Espera en el body: { usuario: string, contrasena: string }
 */
function login(peticion, respuesta) {
  // 1. Extraemos los datos enviados por el cliente
  const { usuario, contrasena } = peticion.body;

  // 2. Validamos que ambos campos hayan llegado
  if (!usuario || !contrasena) {
    return respuesta.status(400).json({
      mensaje: 'Los campos usuario y contrasena son obligatorios.',
    });
  }

  // 3. Buscamos el usuario en el "almacén" en memoria
  const usuarioEncontrado = buscarPorUsuario(usuario);

  // 4. Si no existe, o la contraseña no coincide, devolvemos el mismo
  //    mensaje genérico por seguridad (no revelamos cuál de los dos falló).
  if (!usuarioEncontrado || usuarioEncontrado.contrasena !== contrasena) {
    return respuesta.status(401).json({
      mensaje: 'Usuario o contraseña incorrectos.',
    });
  }

  // 5. Autenticación exitosa
  return respuesta.status(200).json({
    mensaje: 'Autenticación satisfactoria.',
    usuario: {
      id: usuarioEncontrado.id,
      usuario: usuarioEncontrado.usuario,
    },
  });
}

module.exports = {
  registrar,
  login,
};