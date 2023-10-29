import User from "../models/user.js"
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js'


export const register = async (req, res) => {
    const {nombre_completo, email,usuario,contraseña, ubicacion, cargo} = req.body

   try {
await User

const contraseñaHash = await bcrypt.hash(contraseña, 10)

    const newUser = new User ({
        nombre_completo, 
        email,
        usuario,
        contraseña:contraseñaHash, 
        ubicacion,
        cargo
    })

    const userSaved = await newUser.save()
    const token = await createAccessToken({id:userSaved._id})
    res.cookie("token",token)
    res.json({
        id:userSaved._id,
        nombre_completo: userSaved.nombre_completo,
        email:userSaved.email,
        usuario:userSaved.usuario,
        ubicacion:userSaved.ubicacion,
        cargo:userSaved.cargo
    })
   } catch (error){
    res.status(500).json({messge: error.message})
   }

  
}
export const login = async (req, res) => {
    const {email,contraseña} = req.body

   try {

    const userFound = await User.findOne({email})
    if (!userFound) return res.status(400).json({message: "User not found"}) 

    const isMatch = await bcrypt.compare(contraseña, userFound.contraseña)
   
    if(!isMatch) return res.status(400).json({message:"Incorrect Password"})
    
    const token = await createAccessToken({id:userFound._})
    
    res.cookie("token",token)
    res.json({
        id:userFound._id,
        nombre_completo: userFound.nombre_completo,
        email:userFound.email,
        usuario:userFound.usuario,
        ubicacion:userFound.ubicacion,
        cargo:userFound.cargo
    })
   } catch (error){
    res.status(500).json({messge: error.message})
   }

  User
}

export const logout  = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0),
      });
      return res.sendStatus(200);
}

export const profile = async (req,res) => {
    
const userFound = await User.findById(req.user.id)
if (!userFound) return res.status(400).json({message:"User not found"})

return res.json({
    id:userFound._id,
    usuario:userFound.usuario,
    email:userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
})
    res.send ('profile')
}

