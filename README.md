# FlashFoot API

Servicio web (API REST) de registro e inicio de sesión de usuarios, desarrollado como evidencia **GA7-220501096-AA5-EV01** del componente formativo "Construcción API" — programa de Análisis y Desarrollo de Software (SENA).

## Objetivo

Diseñar y codificar un servicio web que reciba un usuario y una contraseña, valide la autenticación y responda con un mensaje de éxito o de error, aplicando buenas prácticas de arquitectura y control de versiones.

## Tecnologías

- Node.js
- Express
- JavaScript (CommonJS)

## Estructura del proyecto

```
flashfoot-api/
├── src/
│   ├── routes/auth.routes.js         # Define las URLs de autenticación
│   ├── controllers/auth.controller.js # Lógica de registro e inicio de sesión
│   ├── models/usuario.model.js        # Estructura del usuario y almacenamiento en memoria
│   └── index.js                       # Punto de entrada del servidor
├── .gitignore
├── package.json
└── package-lock.json
```

## Cómo ejecutarlo localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/monsalvedaniela116-cloud/flashfoot-api.git
cd flashfoot-api

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor
node src/index.js
```

El servidor queda disponible en `http://localhost:3000`.

## Endpoints

| Endpoint | Método | Body (JSON) | Éxito | Error |
|---|---|---|---|---|
| `/api/auth/registro` | POST | `{ "usuario": "string", "contrasena": "string" }` | `201 Created` | `400 Bad Request` (campos vacíos o usuario ya registrado) |
| `/api/auth/login` | POST | `{ "usuario": "string", "contrasena": "string" }` | `200 OK` — "Autenticación satisfactoria." | `401 Unauthorized` — "Usuario o contraseña incorrectos." |

### Ejemplo de petición de registro

```json
POST /api/auth/registro
{
  "usuario": "juanperez",
  "contrasena": "clave123"
}
```

### Ejemplo de respuesta exitosa de login

```json
{
  "mensaje": "Autenticación satisfactoria.",
  "usuario": {
    "id": 1,
    "usuario": "juanperez"
  }
}
```

## Nota sobre el almacenamiento

Por el alcance de esta evidencia, los usuarios se almacenan en un arreglo en memoria (no en una base de datos). Esto significa que los datos se reinician cada vez que el servidor se detiene y se vuelve a ejecutar.

## Autor
Daniela monsalve - amanda salcedo