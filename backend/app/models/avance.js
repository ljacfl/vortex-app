import mongoose from "mongoose";

const avanceSchema = new mongoose.Schema({
    nombre_colaborador: {        
        type: String,
      
      },
      unidades_realizadas: {
        type: String
      },
      meses_realizacion: {
        type: String
      },
      fecha_inicio: {
        type: Date,
        default:Date.now
      },
      numero_actvidad:{
        type: String
      }
})

export default mongoose.model ("avance",avanceSchema)
