import plan_carrera from '../models/plan_carrera.js'
//import curso from '../models/plan_carrera.js'


export const getPlanes_carreras = async (req,res) => {
    const Planes_carreras = await plan_carrera.find()
    res.json(Planes_carreras)
}

export const createPlanes_carreras = async (req,res) => {
    const {nombre_colaborador, coach_lider,rol,split} = req.body
    
    console.log(req.user)

    const newPlan_carrera = new plan_carrera({
        nombre_colaborador, 
        coach_lider,
        rol,
        split
    })
const savedPlan_carrera = await newPlan_carrera.save()
res.json(savedPlan_carrera)
    
}

export const getPlan_carrera = async (req,res) => {
    const Planes_carreras = await plan_carrera.findById(req.params.id)
    if(!Planes_carreras) return res.status(404).json({message: 'plan carrera not found'})
    res.json(Planes_carreras)
}

export const delatePlanes_carreras =async (req,res) => {
    const Planes_carreras = await plan_carrera.findByIdAndDelete(req.params.id)
    if(!Planes_carreras) return res.status(404).json({message: 'plan carrera not found'})
    res.json(Planes_carreras)
}
export const updatePlanes_carreras =async (req,res) => {
    const Planes_carreras = await plan_carrera.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if(!Planes_carreras) return res.status(404).json({message: 'plan carrera not found'})
    res.json(Planes_carreras)
}

