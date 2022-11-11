import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const Partido = sequelize.define('partidos', {
    idPartido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombrePartido:{
        type: DataTypes.STRING
    },
    resultadoPartido: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    puntuacionDePrediccion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
})