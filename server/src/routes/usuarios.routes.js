import {Router} from 'express'
import {getUsuariosDatabase, getUsuarioByID, getUsuarioByEmail ,createUsuarioDatabase, updateUsuarioDatabase, deleteUsuarioDatabase} from '../controllers/usuario.controller.js'
import {getProdesDatabase, getProdeByID, createProdeDatabase, updateProdeDatabase, deleteProdeDatabase} from '../controllers/prode.controller.js'
import {getPartidosDatabase, getPartidosByProdeDatabase, getPartidoByID, getPartidoByName, createPartidoDatabase, updatePartidoDatabase, deletePartidoDatabase} from '../controllers/partido.controller.js'

const router = Router()

// USUARIO: Peticiones Http a la Base de Datos
router.get("/database/usuarios", getUsuariosDatabase)
router.get("/database/usuario/:idUsuario", getUsuarioByID)
router.post("/database/usuario/login", getUsuarioByEmail)
router.post("/database/usuario", createUsuarioDatabase)
router.put("/database/usuario/:idUsuario", updateUsuarioDatabase)
router.delete("/database/usuario/:idUsuario", deleteUsuarioDatabase)

// PRODE: Peticiones Http a la Base de Datos
router.get("/database/prodes", getProdesDatabase)
router.get("/database/prode/:idProde", getProdeByID)
router.post("/database/prode", createProdeDatabase)
router.put("/database/prode/:idProde", updateProdeDatabase)
router.delete("/database/prode/:idProde", deleteProdeDatabase)

// PARTIDO: Peticiones Http a la Base de Datos
router.get("/database/partidos", getPartidosDatabase)
router.get("/database/partidos/:prodeID", getPartidosByProdeDatabase)
router.get("/database/partido/:idPartido", getPartidoByID)
router.post("/database/partido/busqueda", getPartidoByName)
router.post("/database/partido/:prodeID", createPartidoDatabase)
router.put("/database/partido/:idPartido", updatePartidoDatabase)
router.delete("/database/partido/:idPartido", deletePartidoDatabase)

export default router