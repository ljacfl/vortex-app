import avance from "../models/avance.js"


export const getAvances = async (req,res) => {
    const avances = await avance.find()
    res.json(avances)
}

export const createAvances = async (req,res) => {
    const {nombre_colaborador, unidades_realizadas,fecha_inicio,numero_actvidad} = req.body
    
    console.log(req.user)

    const newAvance = new avance({
        nombre_colaborador, 
        unidades_realizadas,
        fecha_inicio,
        numero_actvidad
    })
const savedAvance = await newAvance.save()
res.json(savedAvance)
    
}

export const getAvance = async (req,res) => {
    const avances = await avance.findById(req.params.id)
    if(!avances) return res.status(404).json({message: 'Avance not found'})
    res.json(avances)
}

export const delateAvances =async (req,res) => {
    const avances = await avance.findByIdAndDelete(req.params.id)
    if(!avances) return res.status(404).json({message: 'avances not found'})
    res.json(avances)
}
export const updateAvances =async (req,res) => {
    const avances = await avance.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if(!avances) return res.status(404).json({message: 'avance not found'})
    res.json(avances)
}

