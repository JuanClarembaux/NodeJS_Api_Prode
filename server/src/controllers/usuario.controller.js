import { Prode } from '../models/Prode.js';
import {Usuario} from '../models/Usuario.js'

//  FUNCIONES PARA REALIZAR CONSULTAS Y ACCIONES EN LA BASE DE DATOS
export const getUsuariosDatabase = async (req, res) => {
    try {

        const usuarios = await Usuario.findAll();

        res.json(usuarios);

    } catch (error) {

        return res.status(500).json({message: error.message});

    }
}

export const getUsuarioByID = async (req, res) => {
    try {

        const { idUsuario } = req.params;
        const usuario = await Usuario.findOne({
            where: {
                idUsuario,
            },
        });

        if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });

        res.json(usuario);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//  NO CAPTURA BIEN EL PARAMETRO
export const getUsuarioByEmail = async (req, res) => {
    try {
        const { mailUsuario, contrasenaUsuario } = req.body;

        await Usuario.findOne({
            where:{
                gmailUsuario: mailUsuario,
                contrasenaUsuario: contrasenaUsuario,
            }
        }).then(usuario => {
            if(!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });

            res.json(usuario);
        })
    } catch (error) {
        return res.status(500).json({ message: error.message});
    }
}

export const createUsuarioDatabase = async (req, res) => {
    const { nombreUsuario, apellidoUsuario, mailUsuario, contrasenaUsuario } = req.body;

    try {

        const newUsuario = await Usuario.create({
            nombreUsuario,
            apellidoUsuario,
            mailUsuario,
            contrasenaUsuario,
        });

        const usuarioID = newUsuario.idUsuario

        const newProde = await Prode.create({
            usuarioID
        });

        res.json(newUsuario);

    } catch (error) {

        return res.status(500).json({message: error.message});

    }
};

export const updateUsuarioDatabase = async (req, res) => {
    try {

        const { idUsuario } = req.params;
        const { nombreUsuario, apellidoUsuario, mailUsuario, contrasenaUsuario } = req.body;

        const usuario = await Usuario.findByPk(idUsuario);

        usuario.nombreUsuario = nombreUsuario
        usuario.apellidoUsuario = apellidoUsuario
        usuario.mailUsuario = mailUsuario
        usuario.contrasenaUsuario = contrasenaUsuario

        await usuario.save()

        res.json(usuario)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const deleteUsuarioDatabase = async (req, res) => {
    try {

        const { idUsuario } = req.params;
        const usuario = await Usuario.findByPk(idUsuario);

        usuario.destroy();

        res.sendStatus(204);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};