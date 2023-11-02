import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { usePlanes_Carreras } from '../../context/Context'
import { useNavigate } from 'react-router-dom'


const PlanForm = () => {

    const { register, handleSubmit } = useForm()

    const { createPlanes_carreras } = usePlanes_Carreras()

    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (data) => {
        createPlanes_carreras(data)
        console.log(data);
        navigate('/')
    })






    return (
        <>
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md my-2">
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="nombre del colaborador"
                        {...register("nombre_colaborador")}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
                        autoFocus
                    />

                    <textarea
                        rows="3"
                        placeholder="descripcion"
                        {...register("descripcion")}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    ></textarea>

                    <textarea
                        rows="3"
                        placeholder="unidades estimadas"
                        {...register("unidades_estimadas")}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    ></textarea>

                    <textarea
                        rows="3"
                        placeholder="requiere pago?"
                        {...register("pago")}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    ></textarea>

                    <textarea
                        rows="3"
                        placeholder="meses de realizacion"
                        {...register(" meses_realizacion")}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    ></textarea>

                    <textarea
                        rows="3"
                        placeholder="colaborador lider"
                        {...register("colaborador_lider")}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    ></textarea>



                    <button type='submit'>Save</button>
                </form>


            </div>

        </>
    )
}

export default PlanForm