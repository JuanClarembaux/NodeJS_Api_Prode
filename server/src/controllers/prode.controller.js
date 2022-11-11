import {Prode} from '../models/Prode.js'

//  FUNCIONES PARA REALIZAR CONSULTAS Y ACCIONES EN LA BASE DE DATOS
export const getProdesDatabase = async (req, res) => {
    try {

        const prodes = await Prode.findAll();

        res.json(prodes);

    } catch (error) {

        return res.status(500).json({message: error.message});

    }
}

export const getProdeByID = async (req, res) => {
    try {

        const { idProde } = req.params;
        const prode = await Prode.findOne({
            where: {
                idProde,
            },
        });

        if (!prode) return res.status(404).json({ message: "Prode no encontrado" });

        res.json(prode);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createProdeDatabase = async (req, res) => {
    const { puntuacionTotal, usuarioID } = req.body;

    try {

        const newProde = await Prode.create({
            usuarioID,
            puntuacionTotal,
        });

        res.json(newProde);

    } catch (error) {

        return res.status(500).json({message: error.message});

    }
};

export const updateProdeDatabase = async (req, res) => {
    try {

        const { idProde } = req.params;
        const { puntuacionTotal } = req.body;

        const prode = await Prode.findByPk(idProde);

        prode.puntuacionTotal = puntuacionTotal

        await prode.save()

        res.json(prode)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const deleteProdeDatabase = async (req, res) => {
    try {

        const { idProde } = req.params;
        const prode = await Prode.findByPk(idProde);

        prode.destroy();

        res.sendStatus(204);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};