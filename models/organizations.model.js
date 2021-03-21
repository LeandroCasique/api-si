module.exports = (sequelize, type) => {
    return sequelize.define('t00150_organizacion', {
        Co_Organizacion : {
            type: type.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
            field: 'Co_Organizacion'
        },
        Nb_Organizacion: {
            type: type.STRING,
            allowNull: false,
            field: 'Nb_Organizacion'
        },
        Co_Organizacion_Organizacion: {
            type: type.INTEGER,
            allowNull: true,
            field: 'Co_Organizacion_Organizacion'
        },
        Co_Empresa: {
            type: type.INTEGER,
            allowNull: true,
            field: 'Co_Empresa'
        },
        Nu_Telefono: {
            type: type.STRING,
            allowNull: true,
            field: 'Nu_Telefono'
        },
        Tx_Email: {
            type: type.STRING,
            allowNull: true,
            field: 'Tx_Email'
        },
        St_Rama: {
            type: type.INTEGER,
            allowNull: false,
            defaultValue: 1,
            field: 'St_Rama'
        },
        St_Activo: {
            type: type.INTEGER,
            allowNull: false,
            defaultValue: 1,
            field: 'St_Activo'
        },
        Co_Auditoria: {
            type: type.INTEGER,
            allowNull: true,
            field: 'Co_Auditoria'
        }
    },
    {
        underscored: true,
        tableName: "t00150_organizacion",
        freezeTableName: true,
        timestamps: false,
        classMethods: {
          associate: function (models) {
            // associations can be defined here
          },
        },
    })
}