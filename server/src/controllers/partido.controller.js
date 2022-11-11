import {Partido} from '../models/Partido.js'

//  FUNCIONES PARA REALIZAR CONSULTAS Y ACCIONES EN LA BASE DE DATOS
export const getPartidosDatabase = async (req, res) => {
    try {

        const partidos = await Partido.findAll();

        res.json(partidos);

    } catch (error) {

        return res.status(500).json({message: error.message});

    }
}

export const getPartidosByProdeDatabase = async (req, res) => {
    try {
        const { prodeID } = req.params;

        const partidos = await Partido.findAll({
            where: {
                prodeID
            }
        });

        res.json(partidos);

    } catch (error) {

        return res.status(500).json({message: error.message});

    }
}

export const getPartidoByID = async (req, res) => {
    try {

        const { idPartido } = req.params;
        const partido = await Partido.findOne({
            where: {
                idPartido,
            },
        });

        if (!partido) return res.status(404).json({ message: "Partido no encontrado" });

        res.json(partido);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//  NO CAPTURA BIEN EL PARAMETRO
export const getPartidoByName = async (req, res) => {
    try {
        const { nombrePartido } = req.body;

        await Partido.findOne({
            where:{
                nombrePartido: nombrePartido,
            }
        }).then(partido => {
            if(!partido) return res.status(404).json({ message: 'Partido no encontrado' });

            res.json(usuario);
        })
    } catch (error) {
        return res.status(500).json({ message: error.message});
    }
}

export const createPartidoDatabase = async (req, res) => {
    const { prodeID } = req.params;
    const { nombrePartido, resultadoPartido, puntuacionDePrediccion } = req.body;

    try {

        const newPartido = await Partido.create({
            prodeID,
            nombrePartido,
            resultadoPartido,
            puntuacionDePrediccion,
        });

        res.json(newPartido);

    } catch (error) {

        return res.status(500).json({message: error.message});

    }
};

export const updatePartidoDatabase = async (req, res) => {
    try {

        const { idPartido } = req.params;
        const { nombrePartido, resultadoPartido, puntuacionDePrediccion } = req.body;

        const partido = await Partido.findByPk(idPartido);

        usuario.nombrePartido = nombrePartido
        usuario.resultadoPartido = resultadoPartido
        usuario.puntuacionDePrediccion = puntuacionDePrediccion

        await partido.save()

        res.json(partido)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const deletePartidoDatabase = async (req, res) => {
    try {

        const { idPartido } = req.params;
        const partido = await Partido.findByPk(idPartido);

        partido.destroy();

        res.sendStatus(204);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};