import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { usePlanes_Carreras } from '../../context/Context'
import { useNavigate } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'


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

        <Container fluid>
            <div className="text-center">
                <div className="card-header py-3">
                    <br></br>
                    <div className="text-900 text-3xl font-medium mb-3 welcome-text">Plan Carrera</div>
                </div>
                <hr className="border-light m-0" />
                <br></br>
            </div>

            <div className="card_resumen mb-4">
                <div className="card-header py-3">
                    <form onSubmit={onSubmit}>
                        <div className='h1-titulos'>Colaborador: </div>
                        <input
                            type="text"
                            placeholder="nombre del colaborador"
                            {...register("nombre_colaborador")}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
                            autoFocus
                        />
                        <div className='h1-titulos'>Descripción: </div>
                        <textarea
                            rows="3"
                            placeholder="descripcion"
                            {...register("descripcion")}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        ></textarea>
                        <div className='h1-titulos'>UDP: </div>

                        <textarea
                            rows="3"
                            placeholder="unidades estimadas"
                            {...register("unidades_estimadas")}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        ></textarea>
                        <div className='h1-titulos'>Requiere pago: </div>

                        <textarea
                            rows="3"
                            placeholder="requiere pago?"
                            {...register("pago")}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        ></textarea>
                        <div className='h1-titulos'>Coach lider: </div>

                        {/* <textarea
                            rows="3"
                            placeholder="meses de realizacion"
                            {...register(" meses_realizacion")}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        ></textarea> */}
                        

                        <textarea
                            rows="3"
                            placeholder="colaborador lider"
                            {...register("colaborador_lider")}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        ></textarea>



                        <Button type='submit'>Save</Button>
                    </form>



                </div>
            </div>
        </Container>

    )
}

export default PlanForm