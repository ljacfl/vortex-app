import curso from '../models/curso.js'


export const getCursos = async (req,res) => {
    const cursos = await curso.find()
    res.json(cursos)
}

export const createCursos = async (req,res) => {
    const {tipo_unidad_desarrollo, pago, meses_realizacion, unidades_estimadas, descripcion} = req.body
    
    console.log(req.user)

    const newCurso = new curso({
        tipo_unidad_desarrollo, 
        pago, 
        meses_realizacion, 
        unidades_estimadas, 
        descripcion
    })
const savedCurso = await newCurso.save()
res.json(savedCurso)
    
}

export const getCurso = async (req,res) => {
    const cursos = await curso.findById(req.params.id)
    if(!cursos) return res.status(404).json({message: 'Task not found'})
    res.json(cursos)
}

export const delateCursos =async (req,res) => {
    const cursos = await curso.findByIdAndDelete(req.params.id)
    if(!cursos) return res.status(404).json({message: 'Task not found'})
    res.json(cursos)
}
export const updateCursos =async (req,res) => {
    const cursos = await curso.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if(!cursos) return res.status(404).json({message: 'Task not found'})
    res.json(cursos)
}

