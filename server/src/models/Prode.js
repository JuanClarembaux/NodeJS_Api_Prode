import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'
import { Partido } from './Partido.js'

export const Prode = sequelize.define('prodes', {
    idProde: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    puntuacionTotal: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
});

Prode.hasMany(Partido, { as: "Prode", foreignKey: "prodeID" });

/*
Prode.hasMany(Partido, {
    foreignKey: 'prodeID',
    sourceKey: 'idProde'
})

Partido.belongsTo(Prode, {
    foreignKey: 'prodeID',
    targetId: 'idProde'
})*/