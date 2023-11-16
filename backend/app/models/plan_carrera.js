import mongoose from "mongoose";

const plan_carreraSchema = new mongoose.Schema({
  nombre_colaborador: {
        type: String,
        required:true
      },
    coach_lider: {
      type: String
    },
    rol:{
      type:String
    },
      split: {
        type: String
      },
      
},{
   timestamps:true
})

export default mongoose.model ("plan_carrera",plan_carreraSchema)
