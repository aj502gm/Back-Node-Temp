import express from "express";
import {mainMenu,nosotrosMenu,testimonialesMenu,paginaDetalleViaje} from "../controllers/viewsControllers";
//objeto ruteador.
const router = express.Router();

//Ruta para pagina index (default)
router.get('/', mainMenu);

//Ruta para pagina de contactos.
router.get('/nosotros', nosotrosMenu);

//Ruta para testimoniales
router.get('/testimoniales', testimonialesMenu);

//ruta para viajes.
router.get('/viajes', viajesMenu);

router.get("viajes/:slug", paginaDetalleViaje); //<-XXX




export default router;