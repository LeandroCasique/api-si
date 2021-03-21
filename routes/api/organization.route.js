const router = require('express').Router();
const organizationCtrl =  require('../../controllers/organization.controller');
const auth = require('../../middlewares/jwt');


router.use(auth.jwt);

/**
 * @swagger
 * /api/companies/organization/{id}:
 *   get:
 *     tags:
 *     - Organización
 *     summary: Lista de organizaciones
 *     description: Lista de organizaciones que pertenecen a una empresa
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la empresa.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de organizaciones de una empresa.
 * security:
 * - token:
 * - write:token
 * - read:token
 */
router.get('/:id', organizationCtrl.aLLOrganizations);


/**
 * @swagger
 * /api/companies/organization/one/{id}:
 *   get:
 *     tags:
 *     - Organización
 *     summary: Información de una organización
 *     description: Devuelve la información de una organización según su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la organización.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Información de una organización.
 * security:
 * - token:
 * - write:token
 * - read:token
 */
router.get('/one/:id', organizationCtrl.oneOrganizations);

/**
 * @swagger
 * /api/organization:
 *   post:
 *     tags:
 *     - Organización
 *     summary: Crear una organización
 *     description: Recibe datos de la organización
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nb_Organizacion:
 *                 type: string
 *                 description: Nombre de la organización.
 *                 example: organización
 *                 required: true
 *               Co_Organizacion_Organizacion:
 *                 type: integer
 *                 description: ID de la organización padre.
 *                 example: 1
 *                 required: true
 *               Co_Empresa:
 *                 type: string
 *                 description: Nombre de la empresa.
 *                 example: Farmatodo
 *                 required: true
 *               Nu_Telefono:
 *                 type: integer
 *                 description: Teléfono.
 *                 example: 04128888888
 *               Tx_Email:
 *                 type: string
 *                 description: Correo electronico.
 *                 example: example@email.com
 *     responses:
 *       201:
 *         description: Organización creada
*/
router.post('/', organizationCtrl.newOrganizations);


/**
 * @swagger
 * /api/organization:
 *   put:
 *     tags:
 *     - Organización
 *     summary: Actualizar una organización
 *     description: Recibe datos para actualizar una organización
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la organización.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nb_Organizacion:
 *                 type: string
 *                 description: Nombre de la organización.
 *                 example: organización
 *                 required: true
 *               Co_Organizacion_Organizacion:
 *                 type: integer
 *                 description: ID de la organización padre.
 *                 example: 1
 *                 required: true
 *               Co_Empresa:
 *                 type: string
 *                 description: Nombre de la empresa.
 *                 example: Farmatodo
 *                 required: true
 *               Nu_Telefono:
 *                 type: integer
 *                 description: Teléfono.
 *                 example: 04128888888
 *               Tx_Email:
 *                 type: string
 *                 description: Correo electronico.
 *                 example: example@email.com
 *     responses:
 *       201:
 *         description: Empresa actualizada
*/
router.put('/:id', organizationCtrl.updateOrganization);

/**
 * @swagger
 * /api/organization/{id}:
 *   delete:
 *     tags:
 *     - Organización
 *     summary: Eliminar una organización
 *     description: Eliminar una organización con su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la organización.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Organización eliminada.
 * security:
 * - token:
 * - write:token
 * - read:token
 */
router.delete('/:id', organizationCtrl.deleteOrganizations);

module.exports = router;