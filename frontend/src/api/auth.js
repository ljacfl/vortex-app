import axios from "axios";
import user from "../../../backend/app/models/user";

const API ='http://localhost:3000/api'

export const registerRequest = user => axios.post (`${API}/register`, user ) 

//Actualizar usuario existente
const updateUser = (id, user) => axios.put (`${API}/users/${id}`, user )

//Eliminar usuario existente
const deleteUser = (id) => axios.delete (`${API}/users/${id}`)

updateUser(user.id, user);

deleteUser(user.id);