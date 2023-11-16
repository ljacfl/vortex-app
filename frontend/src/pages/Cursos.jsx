import React, { useState } from 'react';
import { Button, Container, Form, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cursos = () => {
    return (
        <Container fluid>
            <div className="text-center">
                <div className="card-header py-3">
                    <br></br>
                    <div className="text-900 text-3xl font-medium mb-3 welcome-text">Cursos</div>
                </div>
                <hr className="border-light m-0" />
                <br></br>
            </div>

            <div className="card_resumen mb-4">
                <div className="card-header py-3">
                    <div className="resume-text">Formación técnica</div>

                </div>
                <div class="row">
                    <div class="col">
                        <div className='h1-titulos'>Actividad:</div>
                        <div className='h1-cursos mb-2'>Scrum</div>
                        <div className='h1-cursos mb-2'>React</div>
                        <div className='h1-cursos mb-2'>Python</div>
                        <div className='h1-cursos mb-2'>Java</div>
                    </div>
                    <div class="col">
                        <div className='h1-titulos'>Unidades estimadas:</div>
                        <div className='h1-cursos mb-2'>6</div>
                        <div className='h1-cursos mb-2'>8</div>
                        <div className='h1-cursos mb-2'>12</div>
                        <div className='h1-cursos mb-2'>30</div>
                    </div>
                    <div class="col">
                        <div className='h1-titulos'>Tiempo (meses):</div>
                        <div className='h1-cursos mb-2'>1</div>
                        <div className='h1-cursos mb-2'>1</div>
                        <div className='h1-cursos mb-2'>2</div>
                        <div className='h1-cursos mb-2'>3</div>
                    </div>
                    <div className="col" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className='h1-titulos'>Progreso:</div>
                        <div className="progress-bar text-bg-warning mb-2" style={{ width: '60%' }}>60%</div>
                        <div className="progress-bar text-bg-warning mb-2" style={{ width: '80%' }}>80%</div>
                        <div className="progress-bar text-bg-warning mb-2" style={{ width: '30%' }}>30%</div>
                        <div className="progress-bar text-bg-warning mb-2" style={{ width: '80%' }}>80%</div>
                    </div>
                    <div class="col">
                        <div className='h1-titulos'>Estado:</div>
                        <div className='mb-1'>
                            <Form.Select>
                                <option>Pendiente</option>
                                <option>En curso</option>
                                <option>Completado</option>
                            </Form.Select>
                        </div>
                        <div className='mb-1'>
                            <Form.Select>
                                <option>Pendiente</option>
                                <option>En curso</option>
                                <option>Completado</option>
                            </Form.Select>
                        </div>
                        <div className='mb-1'>
                            <Form.Select>
                                <option>Pendiente</option>
                                <option>En curso</option>
                                <option>Completado</option>
                            </Form.Select>
                        </div>
                        <div className='mb-1'>
                            <Form.Select>
                                <option>Pendiente</option>
                                <option>En curso</option>
                                <option>Completado</option>
                            </Form.Select>
                        </div>

                    </div>
                </div>
            </div>
            <div className="card_resumen mb-4">
                <div className="card-header py-3">
                    <div className="resume-text">Crecimiento personal</div>
                </div>
                <div class="row">
                    <div class="col">
                        <div className='h1-titulos'>Actividad:</div>
                        <div className='h1-cursos mb-2'>Trabajo en equipo - Seminario</div>
                        <div className='h1-cursos mb-2'>Curso - Comunicación efectiva</div>
                    </div>
                    <div class="col">
                        <div className='h1-titulos'>Unidades estimadas:</div>
                        <div className='h1-cursos mb-9'>2</div>
                        <div className='h1-cursos mb-9'>5</div>
                    </div>
                    <div class="col">
                        <div className='h1-titulos'>Tiempo (meses):</div>
                        <div className='h1-cursos mb-9'>3</div>
                        <div className='h1-cursos mb-9'>3</div>
                    </div>
                    <div className="col" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className='h1-titulos'>Progreso:</div>
                        <div className="progress-bar text-bg-warning mb-9" style={{ width: '60%' }}>60%</div>
                        <div className="progress-bar text-bg-warning mb-4" style={{ width: '100%' }}>100%</div>
                    </div>

                    <div class="col">
                        <div className='h1-titulos'>Estado:</div>
                        <div className='mb-9'>
                            <Form.Select>
                                <option>En curso</option>
                                <option>Pendiente</option>
                                <option>Completado</option>
                            </Form.Select>
                        </div>
                        <div className='mb-9'>
                            <Form.Select>
                                <option>Completado</option>
                                <option>En curso</option>
                                <option>Pendiente</option>
                            </Form.Select>
                        </div>

                    </div>

                </div>

            </div>
            <div className="card_resumen mb-4">
                <div className="card-header py-3">
                    <div className="resume-text">Retorno a Vortex</div>

                </div>
                <div class="row">
                    <div class="col">
                        <div className='h1-titulos'>Actividad:</div>
                        <div className='h1-cursos mb-4'>Capacitacion - Introducción Scrum</div>
                        <div className='h1-cursos mb-4'>Charla trabajo en equipo</div>


                    </div>
                    <div class="col">
                        <div className='h1-titulos'>Unidades estimadas:</div>
                        <div className='h1-cursos mb-9'>3.5</div>
                        <div className='h1-cursos mb-2'>3.5</div>


                    </div>
                    <div class="col">
                        <div className='h1-titulos'>Tiempo (meses):</div>
                        <div className='h1-cursos mb-9'>1</div>
                        <div className='h1-cursos mb-2'>2</div>


                    </div>

                    <div className="col" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className='h1-titulos'>Progreso:</div>
                        <div className="progress-bar text-bg-warning mb-9" style={{ width: '20%' }}>20%</div>
                        <div className="progress-bar text-bg-warning mb-4" style={{ width: '20%' }}>20%</div>
                    </div>

                    <div class="col">
                        <div className='h1-titulos'>Estado:</div>
                        <div className='mb-9'>
                            <Form.Select>
                                <option>Pendiente</option>
                                <option>En curso</option>
                                <option>Completado</option>
                            </Form.Select>
                        </div>
                        <div className='mb-9'>
                            <Form.Select>
                                <option>Pendiente</option>
                                <option>En curso</option>
                                <option>Completado</option>
                            </Form.Select>
                        </div>

                    </div>
                </div>

            </div>
<div>
            <Link to="/plan-carrera">
                <Button>Volver</Button>
            </Link>
            </div>
            <br></br>

        </Container>


    )
}

export default Cursos;