import { Router } from "express"
import {
  login,
  register, 
  logout, 
  profile
} from "../controllers/auth.controller.js"
import { authRequired } from "../middlewares/validateToken.js"
import { validateSchema } from "../middlewares/validatetor.middleware.js"
import { registerSchema, loginSchema } from "../schemas/auth.shcema.js"

const router = Router()


router.post('/register', validateSchema(registerSchema), register)
router.post('/login',validateSchema(loginSchema), login)
router.post('/logout', logout)
router.get('/profile',authRequired, profile)


export default router

