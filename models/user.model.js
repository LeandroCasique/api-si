module.exports = (sequelize, type) => {
    return sequelize.define('t00100_usuario', {
        Co_Usuario: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
            field: 'Co_Usuario'
        },
        Nb_Usuario: {
            type: type.STRING,
            allowNull: false,
            field: 'Nb_Usuario'
        },
        Tx_Email: {
            type: type.STRING,
            allowNull: false,
            field: 'Tx_Email'
        },
        Nu_Movil: {
            type: type.STRING,
            allowNull: true,
            field: 'Nu_Movil'
        },
        Tx_Clave: {
            type: type.STRING,
            allowNull: false,
            field: 'Tx_Clave'
        },
        Tx_Patron: {
            type: type.STRING,
            allowNull: true,
            field: 'Tx_Patron'
        },
        Nu_Intentos: {
            type: type.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: 'Nu_Intentos'
        },
        Fe_Recuperacion: {
            type: type.DATE,
            allowNull: true,
            field: 'Fe_Recuperacion'
        },
        St_Bloqueo: {
            type: type.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: 'St_Bloqueo'
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
        tableName: "t00100_usuario",
        freezeTableName: true,
        timestamps: false,
        classMethods: {
          associate: function (models) {
            // associations can be defined here
          },
        },
    })
}