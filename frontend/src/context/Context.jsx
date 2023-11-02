import { createContext, useContext, useState } from "react"
import { getPlanes_CarrerasRequest,getPlan_CarreraRequest,createPlanes_carrerasRequest,updatePlanes_carrerasRequest } from "../api/api.js"
const Plan_carreraContext = createContext() 

export const usePlanes_Carreras = () => {
      const context = useContext(Plan_carreraContext)

if(!context){
    throw new Error("usePlanes_carreras must be used wihtin a CursoProvider")
}

return context
}

export function CursoProvider({children}) {
  const [planes_carreras, setPlanes_carreras] = useState([])

  const getPlanes_carreras =async () => {
    try {
      const res = await getPlanes_CarrerasRequest()
      setPlanes_carreras(res.data)
    } catch (error) {
      console.error(error)
    }
  }
  
  const createPlanes_carreras = async (plan_carrera) => {
   const res = await createPlanes_carrerasRequest(plan_carrera)
    console.log(res)
  }
  
    return( 
    <Plan_carreraContext.Provider 
    value={{
        planes_carreras,
        createPlanes_carreras,
        getPlanes_carreras
    }}
    >
    {children} 
    </Plan_carreraContext.Provider>
    )
}