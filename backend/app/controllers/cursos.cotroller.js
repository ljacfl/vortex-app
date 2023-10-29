import curso from '../models/curso.js'


export const getCursos = async (req,res) => {
    const cursos = await curso.find()
    res.json(cursos)
}

export const createCursos = async (req,res) => {
    const {nombre, descripcion,modalidad, institucion, estado, unidades_Estimadas, fecha_inicio, fecha_fin,puntos_a_obtener} = req.body
    
    console.log(req.user)

    const newCurso = new curso({
       nombre,
       descripcion,
       modalidad,
       institucion,
       estado,
       unidades_Estimadas, 
       fecha_inicio, 
       fecha_fin,
       puntos_a_obtener,
       user: req.user.id
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

