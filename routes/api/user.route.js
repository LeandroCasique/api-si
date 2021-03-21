const router = require('express').Router();
const userCtrl =  require('../../controllers/user.controller');

/**
 * @swagger
 * /api/users/sing-up:
 *   post:
 *     tags:
 *     - Usuario
 *     summary: Registro de usuario
 *     description: Recibe los datos del usuario para poder registrarlo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nb_Usuario:
 *                 type: string
 *                 description: Nombre del usuario.
 *                 example: Edgar
 *                 required: true
 *               Tx_Email:
 *                 type: string
 *                 description: Correo del usuario.
 *                 example: example@email.com
 *               Nu_Movil:
 *                 type: integer
 *                 description: Número del móvil.
 *                 example: 04128888888
 *               Tx_Clave:
 *                 type: integer
 *                 description: Contraseña.
 *                 example: password
 *     responses:
 *       201:
 *         description: Usuario creado
*/
router.post('/sing-up', userCtrl.singUp);


/**
 * @swagger
 * /api/users/login:
 *   post:
 *     tags:
 *     - Usuario
 *     summary: Acceso
 *     description: Recibe los datos del usuario para poder ingresar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Tx_Email:
 *                 type: string
 *                 description: Correo del usuario.
 *                 example: example@email.com
 *                 required: true
 *               Tx_Clave:
 *                 type: integer
 *                 description: Contraseña.
 *                 example: password
 *                 required: true
 *     responses:
 *       200:
 *         description: Ingreso exitoso
 *       404:
 *         description: No se ha encontrado el usuario
*/
router.post('/login', userCtrl.login);

module.exports = router;