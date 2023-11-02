import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { 
    getPlanes_carreras,
    getPlan_carrera,
    createPlanes_carreras,
    updatePlanes_carreras,
    delatePlanes_carreras
 } from "../controllers/planes_carreras.controller.js";

const router = Router()

router.get('/Planes_carreras',  getPlanes_carreras)

router.get('/Planes_carreras/:id',  getPlan_carrera)

router.post('/Planes_carreras', createPlanes_carreras)

router.delete('/Planes_carreras/:id', delatePlanes_carreras)

router.put('/Planes_carreras/:id', updatePlanes_carreras)

export default router