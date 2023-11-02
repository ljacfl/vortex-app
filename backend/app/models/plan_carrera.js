import mongoose from "mongoose";

const plan_carreraSchema = new mongoose.Schema({
  nombre_colaborador: {
        type: String,
        required:true
      },
      descripcion: {
        type: String
      },
      unidades_estimadas: {
        type: String
      },
    pago: {
      type: String
    },
    meses_realizacion: {
      type: String
    },
    colaborador_lider: {
      type: String
    },
      fecha_inicio: {
        type: Date,
        default:Date.now
      },
      
},{
   timestamps:true
})

export default mongoose.model ("plan_carrera",plan_carreraSchema)
