const Joi = require("joi").extend(require("@hapi/joi-date"));

const newCompanyQuerySchema = Joi.object({
    Nb_Empresa: Joi.string().empty("").required(),
    Nu_Registro: Joi.string().empty(""),
    Tx_Direccion: Joi.string().empty(""),
    Nu_Latitud: Joi.number(),
    Nu_Longitud: Joi.number(),
    Nu_Movil: Joi.string().empty(""),
    Nu_Telefono: Joi.string().empty(""),
    Tx_Email: Joi.string().empty(""),
    Co_Pais: Joi.number().integer(),
    St_Rama: Joi.number().integer(),
    St_Activo: Joi.number().integer(),
    Co_Auditoria: Joi.number().integer()
});

const updateCompanyQuerySchema = Joi.object({
    Nb_Empresa: Joi.string().empty("").required(),
    Nu_Registro: Joi.string().empty(""),
    Tx_Direccion: Joi.string().empty(""),
    Nu_Latitud: Joi.number(),
    Nu_Longitud: Joi.number(),
    Nu_Movil: Joi.string().empty(""),
    Nu_Telefono: Joi.string().empty(""),
    Tx_Email: Joi.string().empty(""),
    Co_Pais: Joi.number().integer(),
    St_Rama: Joi.number().integer(),
    St_Activo: Joi.number().integer(),
    Co_Auditoria: Joi.number().integer()
});

module.exports = {
    newCompanyQuerySchema,
    updateCompanyQuerySchema
};