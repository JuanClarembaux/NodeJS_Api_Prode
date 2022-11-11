import express from "express";
import usuarioRoutes from './routes/usuarios.routes.js'

const app = express();

// Middlewares
app.use(express.json())

app.use(usuarioRoutes)

export default app;