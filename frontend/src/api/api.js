import axios from "./axios.js";

export const getPlanes_CarrerasRequest = async () => axios.get('/Planes_carreras')

export const getPlan_CarreraRequest = (id) => axios.get(`/Planes_carreras/${id}`)

export const createPlanes_carrerasRequest = async (plan_carrera) => axios.post('/Planes_carreras', plan_carrera)

export const updatePlanes_carrerasRequest = (plan_carrera) => 
axios.put(`/Planes_carreras/${plan_carrera._id}`,plan_carrera)

export const deletePlanes_carrerasRequest = (id) => axios.delete(`/Planes_carreras/${id}`)

export const createAvanceRequest = async (data) => axios.post('/avances', data)

export const getAvancesRequest = async () => axios.get('/avances')


export const createActividadRequest = async (data) => axios.post('/cursos', data)

export const getActividadesRequest = async () => axios.get('/cursos')

