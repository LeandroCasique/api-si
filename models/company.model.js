module.exports = (sequelize, type) => {
    return sequelize.define('t00130_empresa', {
        Co_Empresa: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
            field: 'Co_Empresa'
        },
        Nb_Empresa: {
            type: type.STRING,
            allowNull: false,
            field: 'Nb_Empresa'
        },
        Nu_Registro: {
            type: type.STRING,
            allowNull: true,
            field: 'Nu_Registro'
        },
        Tx_Direccion: {
            type: type.STRING,
            allowNull: true,
            field: 'Tx_Direccion'
        },
        Nu_Latitud: {
            type: type.INTEGER,
            allowNull: true,
            field: 'Nu_Latitud'
        },
        Nu_Longitud: {
            type: type.INTEGER,
            allowNull: true,
            field: 'Nu_Longitud'
        },
        Nu_Movil: {
            type: type.STRING,
            allowNull: true,
            field: 'Nu_Movil'
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
        Co_Pais: {
            type: type.INTEGER,
            allowNull: true,
            field: 'Co_Pais'
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
        tableName: "t00130_empresa",
        freezeTableName: true,
        timestamps: false,
        classMethods: {
          associate: function (models) {
            // associations can be defined here
          },
        },
    })
}