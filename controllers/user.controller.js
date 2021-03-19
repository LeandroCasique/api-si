const jwt = require("jsonwebtoken");
const { UserModel } = require('../config/db');
const { 
    singUpQuerySchema,
    newLoginSchema
 } = require('../middlewares/validations/user.validation');

class User {
    static async singUp(req, res, next) {
        let {
            Nb_Usuario,
            Tx_Email,
            Nu_Movil,
            Tx_Clave,
            Tx_Patron,
            Nu_Intentos,
            Fe_Recuperacion,
            St_Bloqueo,
            St_Activo,
            Co_Auditoria,
        } = req.body;
        console.log(req.body)
        //app validation body

        try {
            await singUpQuerySchema.validateAsync(req.body);
        } catch (error) {
            return res.status(400).send({
                message: `Error al validar el body: ${error.message}`
            });
        }

        try {
            const userCreated = await UserModel.create({
                Nb_Usuario,
                Tx_Email,
                Nu_Movil,
                Tx_Clave,
                Tx_Patron,
                Nu_Intentos,
                Fe_Recuperacion,
                St_Bloqueo,
                St_Activo,
                Co_Auditoria,
            });

            return  res
                .status(201)
                .send({ 
                    message: "Sea creado el Usuario",
                    userCreated
                });
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    static async login(req, res, next) {
        const { Tx_Email, Tx_Clave } = req.body;
        try {
          await newLoginSchema.validateAsync(req.body);
        } catch (err) {
            return res.status(400).send({
                message: `Error al validar el body: ${error.message}`
            });
        }
        const oneUser = await UserModel.findOne({
          where: { Tx_Email: Tx_Email, Tx_Clave: Tx_Clave },
        });
        try {
          // In case client do not exist
          if (!oneUser)
            return res.status(404).send({ message: `No se ha encontrado el usuario` });
          // Return client data successfully
          const token = jwt.sign(
            {
              Co_Usuario: oneUser.Co_Usuario,
              Nb_Usuario: oneUser.Nb_Usuario,
            },
            'secret'
          );
          return res.status(200).send({ token });
        } catch (err) {
          // In case an error occur calling data from db
          return res.status(500).send({
            message: `Error al comunicarse a la base de datos: ${err.message}`,
          });
        }
    }
}

module.exports = User;