import mongoose from "mongoose";

const colaboradorSchema = new mongoose.Schema({
    nombre_completo: {
        type: String
      },
      email: {
        type: String
      },
      usuario: {
        type: String
      },
      contraseña: {
        type: String
      },
      ubicación: {
        type: String
      },
      cargo: {
        type: String
      },
      nivel_actual: {
        type: String
      },
      objetivo: {
        type: String
      },
      logros: [
        {
          nombre: {
            type: String
          },
          descripcion: {
            type: String
          }
        }
      ],
      recompensas: [
        {
          nombre: {
            type: String
          },
          cantidad: {
            type: Number
          },
          descripcion: {
            type: String
          }
        }
      ],
      puntos_obtenidos: {
        type: Number
      }
    
},{
    timestamps:true
})


export default mongoose.model ("curso",colaboradorSchema)