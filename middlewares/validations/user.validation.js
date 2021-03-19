const Joi = require("joi").extend(require("@hapi/joi-date"));

const singUpQuerySchema = Joi.object({
    Nb_Usuario: Joi.string().empty("").required(),
    Tx_Email: Joi.string().empty("").required(),
    Nu_Movil: Joi.string().empty(""),
    Tx_Clave: Joi.string().empty("").required(),
    Tx_Patron: Joi.string().empty(""),
    Nu_Intentos: Joi.number().integer(),
    Fe_Recuperacion: Joi.date().format("YYYY-MM-DD").iso().empty(""),
    St_Bloqueo: Joi.number().integer(),
    St_Activo: Joi.number().integer(),
    Co_Auditoria: Joi.number().integer()
});

const newLoginSchema = Joi.object({
    Tx_Email: Joi.string().empty("").required(),
    Tx_Clave: Joi.string().empty("").required(),
});

module.exports = {
    singUpQuerySchema,
    newLoginSchema
}