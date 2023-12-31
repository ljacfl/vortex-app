import express from "express"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import cors from "cors";
import authRoutes from './routes/auth.routes.js'
import cursosRoutes from './routes/cursos.routes.js'
import plan_carreraRoutes from './routes/plan_carrera.routes.js'
import avanceRoutes from './routes/avance.routes.js'

const app = express()

app.use(cors({
      origin: 'http://localhost:5173',
      credentials: true,
}));


app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())


app.use("/api", authRoutes)
app.use("/api", cursosRoutes)
app.use("/api", plan_carreraRoutes)
app.use("/api", avanceRoutes)
export default app