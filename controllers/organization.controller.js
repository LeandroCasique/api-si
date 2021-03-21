const { OrganizationsModel } = require('../config/db');

class Organizations {
    static async aLLOrganizations(req, res, next) {
        const { id } = req.params;

        try {
            const organizations = await OrganizationsModel.findAll({ where: { Co_Empresa: id } });
            console.log(organizations)
            res.status(201).send(organizations);
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    static async oneOrganizations(req, res, next) {
        const { id } = req.params;
        try {
            const organizacion = await OrganizationsModel.findOne({ where: { Co_Organizacion: id } });

            res.status(201).send(organizacion);
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    static async newOrganizations(req, res, next) {
        let { 
            Co_Empresa,
            Nu_Telefono,
            Tx_Email,
            Nb_Organizacion,
            Co_Organizacion_Organizacion
        } = req.body;

        try {
            let organizationCreated = await OrganizationsModel.create({
                Nb_Organizacion,
                Co_Empresa,
                Nu_Telefono,
                Tx_Email,
                Co_Organizacion_Organizacion
            });
            
            return  res
                .status(201)
                .send({ 
                    message: "Sea creado la organizacion",
                    organizationCreated
                });
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    static async updateOrganization(req, res, next) {
        let { 
            Nu_Telefono,
            Tx_Email,
            Nb_Organizacion,
            Co_Organizacion_Organizacion
        } = req.body;
        const { id } = req.params;

        const updateOrganization = await OrganizationsModel.findOne({ where: { Co_Organizacion: id } });

        if(!updateOrganization) {
            return res
                .status(404)
                .send({ message: `No se consiguio la organizacion: ${id}` });
        }

        try {
            await updateOrganization.update({
                Nb_Organizacion,
                Nu_Telefono,
                Tx_Email,
                Co_Organizacion_Organizacion
            });
            
            return res
                .status(201)
                .send({ 
                    message: `Se actualizo correctamente la organizacion`,
                    updateOrganization
                });
        } catch (error) {
            return res
                .status(500)
                .send({ message: `No se pudo actualizar la organizacion: ${id}` });
        }
    }

    static async deleteOrganizations(req, res, next) {
        const { id } = req.params;

        const organizacion = await OrganizationsModel.findOne({ where: { Co_Organizacion: id } });

        if(!organizacion) {
            return res
                .status(404)
                .send({ message: `No se consiguio la organizacion: ${id}` });
        }

        const organizations = await OrganizationsModel.findAll({ where: { Co_Organizacion_Organizacion: id } });

        try {
            for (const element of organizations) {
                await element.update({
                    Co_Organizacion_Organizacion: null
                });
            }
        } catch (error) {
            return res
                .status(500)
                .send({ message: `No se pudo eleminar la organizacion: ${id}` });
        }

        try {
            await organizacion.destroy();

            return res
                .status(200)
                .send({
                    message: `Se ha eliminado la organizacion: ${id}`
                });
        } catch (error) {
            return res
                .status(500)
                .send({ message: `No se pudo eleminar la organizacion: ${id}` });
        }
    }
}

module.exports = Organizations;