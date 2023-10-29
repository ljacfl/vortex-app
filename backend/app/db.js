import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect ("mongodb+srv://gomol:hola1234@clusteruao.xtakili.mongodb.net/ing_software")
        console.log(">>DB is connected")
    } catch (error) {
        console.log (error)
    }
}
