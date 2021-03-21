const Sequelize = require('sequelize');
const UserModel = require('../models/user.model');
const CompanyModel = require('../models/company.model');
const OrganizationsModel = require('../models/organizations.model');

const sequelize = new Sequelize('equipo e casique-mendez', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = UserModel(sequelize, Sequelize);
const Company = CompanyModel(sequelize, Sequelize);
const Organizations = OrganizationsModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(() => {
        console.log('DB sincronizadas');
    });

module.exports = {
    UserModel: User,
    CompanyModel: Company,
    OrganizationsModel: Organizations
};