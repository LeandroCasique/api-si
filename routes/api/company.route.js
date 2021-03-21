const router = require('express').Router();
const companyCtrl =  require('../../controllers/company.controller');
const auth = require('../../middlewares/jwt');


router.use(auth.jwt);

/**
 * @swagger
 * /api/companies:
 *   get:
 *     tags:
 *     - Empresa
 *     summary: Todas las empresas
 *     description: Devuelve una lista de todas las empresas
 *     responses:
 *       200:
 *         description: Una lista de empresas.
 * security:
 * - petstore_auth:
 * - write:token
 */
router.get('/', companyCtrl.allCompanies);

/**
 * @swagger
 * /api/companies/{id}:
 *   get:
 *     tags:
 *     - Empresa
 *     summary: Información de una empresa
 *     description: Devuelve la información de una empresa según su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la empresa.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Información de una empresa.
 * security:
 * - token:
 * - write:token
 * - read:token
 */
router.get('/:id', companyCtrl.oneCompany);

/**
 * @swagger
 * /api/companies:
 *   post:
 *     tags:
 *     - Empresa
 *     summary: Crear una empresa
 *     description: Recibe datos de la empresa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nb_Empresa:
 *                 type: string
 *                 description: Nombre de la empresa.
 *                 example: Farmatodo
 *                 required: true
 *               Nu_Registro:
 *                 type: string
 *                 description: Registro.
 *                 example: registro
 *               Tx_Direccion:
 *                 type: string
 *                 description: Dirección.
 *                 example: 19 de abril
 *               Nu_Latitud:
 *                 type: number
 *                 format: double
 *                 description: Latitud.
 *                 example: 7.7596806
 *               Nu_Longitud:
 *                 type: number
 *                 format: double
 *                 description: Longitud.
 *                 example: -72.2139725
 *               Nu_Movil:
 *                 type: integer
 *                 description: Número del móvil.
 *                 example: 04128888888
 *               Nu_Telefono:
 *                 type: integer
 *                 description: Número de teléfono.
 *                 example: 02768888888
 *               Tx_Email:
 *                 type: string
 *                 description: Correo de la empresa.
 *                 example: example@email.com
 *     responses:
 *       201:
 *         description: Empresa creada
*/
router.post('/', companyCtrl.newCompany);

/**
 * @swagger
 * /api/companies:
 *   put:
 *     tags:
 *     - Empresa
 *     summary: Actualizar una empresa
 *     description: Recibe datos para actualizar una empresa
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la empresa.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nb_Empresa:
 *                 type: string
 *                 description: Nombre de la empresa.
 *                 example: Farmatodo
 *                 required: true
 *               Nu_Registro:
 *                 type: string
 *                 description: Registro.
 *                 example: registro
 *               Tx_Direccion:
 *                 type: string
 *                 description: Dirección.
 *                 example: 19 de abril
 *               Nu_Latitud:
 *                 type: number
 *                 format: double
 *                 description: Latitud.
 *                 example: 7.7596806
 *               Nu_Longitud:
 *                 type: number
 *                 format: double
 *                 description: Longitud.
 *                 example: -72.2139725
 *               Nu_Movil:
 *                 type: integer
 *                 description: Número del móvil.
 *                 example: 04128888888
 *               Nu_Telefono:
 *                 type: integer
 *                 description: Número de teléfono.
 *                 example: 02768888888
 *               Tx_Email:
 *                 type: string
 *                 description: Correo de la empresa.
 *                 example: example@email.com
 *     responses:
 *       201:
 *         description: Empresa actualizada
*/
router.put('/:id', companyCtrl.updateCompany);

/**
 * @swagger
 * /api/companies/{id}:
 *   delete:
 *     tags:
 *     - Empresa
 *     summary: Eliminar una empresa
 *     description: Eliminar una empresa con su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la empresa.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Empresa eliminada.
 * security:
 * - token:
 * - write:token
 * - read:token
 */
router.delete('/:id', companyCtrl.deleteCompany);

module.exports = router;