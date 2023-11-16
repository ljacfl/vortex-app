import { Router } from "express";
import { 
    getAvances,
    getAvance,
    createAvances,
    updateAvances,
    delateAvances
 } from "../controllers/avance.controller.js";

const router = Router()

router.get('/avances', getAvances)

router.get('/avances/:id', getAvance)

router.post('/avances',createAvances)

router.delete('/avances/:id', delateAvances)

router.put('/avances/:id',updateAvances)

export default router