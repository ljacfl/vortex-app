import mongoose from "mongoose";

const cursoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required:true
      },
      descripcion: {
        type: String
      },
      modalidad: {
        type: String
      },
      institucion: {
        type: String
      },
      estado: {
        type: String
      },
      unidades_estimadas: {
        type: String
      },
      fecha_inicio: {
        type: Date,
        default:Date.now
      },
      fecha_fin: {
        type: Date
      },
      puntos_a_obtener: {
        type: Number
      },
      User: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      }
},{
   timestamps:true
})

export default mongoose.model ("curso",cursoSchema)
