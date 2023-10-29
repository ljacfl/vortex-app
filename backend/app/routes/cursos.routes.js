import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { 
    getCursos,
    getCurso,
    createCursos,
    updateCursos,
    delateCursos
 } from "../controllers/cursos.cotroller.js";

const router = Router()

router.get('/cursos', authRequired, getCursos)

router.get('/cursos/:id', authRequired,getCurso)

router.post('/cursos', authRequired,createCursos)

router.delete('/cursos/:id', authRequired,delateCursos)

router.put('/cursos/:id', authRequired,updateCursos)

export default router