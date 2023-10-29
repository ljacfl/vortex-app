import mongoose from 'mongoose'

const UserSchema =  new mongoose.Schema({
    
    nombre_completo: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    usuario: {
        type: String,
        trim: true,
    },
    contraseña: {
        type: String, 
        required: true,
        trim: true,
    },
    ubicacion: {
        type: String,
        trim: true,
    },
    cargo: {
        type: String,
        trim: true,
    }, 
}, { 
    timestamps: true

})

export default mongoose.model('User', UserSchema);
