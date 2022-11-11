import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'
import { Prode } from './Prode.js'

export const Usuario = sequelize.define('usuarios', {
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreUsuario:{
        type: DataTypes.STRING
    },
    apellidoUsuario: {
        type: DataTypes.STRING
    },    
    mailUsuario: {
        type: DataTypes.STRING
    },
    contrasenaUsuario:{
        type: DataTypes.STRING
    }
});

Usuario.hasOne(Prode, { as: "usuario", foreignKey: "usuarioID" });

/*
Prode.hasMany(Prode, {
    foreignKey: 'usuarioID',
    sourceKey: 'idUsuario'
})

Partido.belongsTo(Usuario, {
    foreignKey: 'usuarioID',
    targetId: 'idUsuario'
})*/