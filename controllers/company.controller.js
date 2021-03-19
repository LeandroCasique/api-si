const { CompanyModel } = require('../config/db');
const { 
    newCompanyQuerySchema,
    updateCompanyQuerySchema
} = require('../middlewares/validations/company.validation');

class Company {

    static async allCompanies(req, res, next) {
        try {
            const companies = await CompanyModel.findAll();

            res.status(201).send(companies);
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    static async oneCompany(req, res, next) {
        const { id } = req.params;
        try {
            const company = await CompanyModel.findOne({ where: { Co_Empresa: id }});

            res.status(201).send(company);
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    static async newCompany(req, res, next) {
        const {
            Nb_Empresa,
            Nu_Registro,
            Tx_Direccion,
            Nu_Latitud,
            Nu_Longitud,
            Nu_Movil,
            Nu_Telefono,
            Tx_Email,
            Co_Pais,
            St_Rama,
            St_Activo,
            Co_Auditoria
        } = req.body;

        try {
            await newCompanyQuerySchema.validateAsync(req.body);
        } catch (error) {
            return res.status(400).send({
                message: `Error al validar el body: ${error.message}`
            });   
        }

        try {
            const companyCreated = await CompanyModel.create({
                Nb_Empresa,
                Nu_Registro,
                Tx_Direccion,
                Nu_Latitud,
                Nu_Longitud,
                Nu_Movil,
                Nu_Telefono,
                Tx_Email,
                Co_Pais,
                St_Rama,
                St_Activo,
                Co_Auditoria
            });

            return  res
                .status(201)
                .send({ 
                    message: "Sea creado la compañia",
                    companyCreated
                });
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    static async updateCompany(req, res, next) {
        const {
            Nb_Empresa,
            Nu_Registro,
            Tx_Direccion,
            Nu_Latitud,
            Nu_Longitud,
            Nu_Movil,
            Nu_Telefono,
            Tx_Email,
            Co_Pais,
            St_Rama,
            St_Activo,
            Co_Auditoria
        } = req.body;
        const { id } = req.params;

        try {
            await updateCompanyQuerySchema.validateAsync(req.body);
        } catch (error) {
            return res.status(400).send({
                message: `Error al validar el body: ${error.message}`
            });  
        }

        const updateCompany = await CompanyModel.findOne({ where: { Co_Empresa: id } });

        if(!updateCompany) {
            return res
                .status(404)
                .send({ message: `No se consiguio la compañia: ${id}` });
        }

        try {
            await updateCompany.update({
                Nb_Empresa,
                Nu_Registro,
                Tx_Direccion,
                Nu_Latitud,
                Nu_Longitud,
                Nu_Movil,
                Nu_Telefono,
                Tx_Email,
                Co_Pais,
                St_Rama,
                St_Activo,
                Co_Auditoria
            });

            return res
                .status(201)
                .send({ 
                    message: `Se actualizo correctamente la compañia`,
                    updateCompany
                });
        } catch (error) {
            return res
                .status(500)
                .send({ message: `No se pudo actualizar la compañia: ${id}` });
        }
    }

    static async deleteCompany(req, res, next) {
        const { id } = req.params;

        const company = await CompanyModel.findOne({ where: { Co_Empresa: id } });

        if(!company) {
            return res
                .status(404)
                .send({ message: `No se consiguio la compañia: ${id}` });
        }

        try {
            await company.destroy();

            return res
                .status(200)
                .send({
                    message: `Se ha eliminado la compañia: ${id}`
                });
        } catch (error) {
            return res
                .status(500)
                .send({ message: `No se pudo eleminar la compañia: ${id}` });
        }
    }
}

module.exports = Company;