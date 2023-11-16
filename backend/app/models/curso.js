import mongoose from "mongoose";

const cursoSchema = new mongoose.Schema({
    tipo_unidad_desarrollo: {    
        type: String,
      
      },
      pago: {
        type: String
      },
      meses_realizacion: {
        type: String
      },
      unidades_estimadas: {
        type: String
      },
      descripcion: {
        type: String
},
})

export default mongoose.model ("curso",cursoSchema)
