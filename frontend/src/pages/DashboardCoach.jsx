import { Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormatoPlan from "../components/FormatoPlan";

const DashboardCoach = () => {
    const [inputText, setInputText] = useState(''); // Estado para el primer textarea
    const [outputText, setOutputText] = useState(''); // Estado para el segundo textarea

    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [planes, setPlanes] = useState([]);

    const handleFormSubmit = (nuevoPlan) => {
        // Agregar el nuevo plan a la lista de planes
        setPlanes([...planes, nuevoPlan]);

        // Ocultar el formulario después de enviarlo
        setMostrarFormulario(false);
    };



    useEffect(() => {
        // Inicializar el estado con tareas predeterminadas
        const initialTasks = [
            'Desarrollar una aplicación web simple.',
            'Aprender y practicar un nuevo lenguaje de programación.',
            'Mejorar habilidades de resolución de problemas.'
        ];
        setOutputText(initialTasks.map(task => `\n\u2022 ${task}`).join(''));
    }, []);

    const handleInputChange = (e) => {
        setInputText(e.target.value); // Actualizar el estado cuando cambia el primer textarea
    };

    const handleSaveButtonClick = () => {
        // Comprobar si el texto de entrada no está vacío
        if (inputText.trim() !== '') {
            setOutputText((prevOutputText) => {
                // Agregar el nuevo elemento a la lista con viñetas circulares
                return prevOutputText + `\n\u2022 ${inputText}`;
            });

            setInputText(''); // Limpiar el primer textarea
        }
    };
    return (
        <div class="container-fluid">
            <br></br>
            <h1>Inicio - Coach</h1>
            <img src="raul.png" alt className=" perfil-alvaro " />
            <div className="card_resumen mb-4">
                <div className="card-header py-3">
                    <h6 className="h3">Resumen</h6>
                </div>
                <div className="row">
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <h3>Alvaro Tabares</h3>
                            <div className="resumen-coach">
                                <img src="alvaro.png" alt className="perfil" />


                            </div>
                            <h4 class="text-gray-800">Progreso <span
                                class="float-right">60%</span></h4>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `60%` }}
                                    aria-valuenow="1"
                                    aria-valuemin="0"
                                    aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div>
                            <Button>asd</Button>
                        </div>

                    </div>
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2">
                            <h3>Valeria Rivera</h3>
                            <div className="resumen-coach">
                                <img src="user.png" alt className="perfil" />
                            </div>

                        </div>
                        <br></br>
                        <div>
                            <Button>asd</Button>
                        </div>

                    </div>
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2">
                            <h3>Mariana Velasquez</h3>
                            <div className="resumen-coach">
                                <img src="user.png" alt className="perfil" />
                            </div>
                        </div>
                        <br></br>
                        <div>
                            <Button>asd</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 className="h3">Recomendaciones</h6>
                        </div>
                        <div class="card-body">
                            <div class="form-group mt-4">
                                <textarea
                                    id="outputTextArea"
                                    class="form-control"
                                    rows="10"
                                    value={outputText}
                                    readOnly
                                ></textarea>
                            </div>

                            <div class="form-group">
                                <label htmlFor="inputTextArea">Agregar nueva recomendacion:</label>
                                <textarea
                                    id="inputTextArea"
                                    class="form-control"
                                    rows="4"
                                    value={inputText}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <Button class="btn btn-primary" onClick={handleSaveButtonClick}>
                                Almacenar y Mostrar
                            </Button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 className="h3">Plan Carrera</h6>
                        </div>
                        <div class="card-body">
                            {/* Agrega un botón para mostrar/ocultar el formulario */}
                            <button onClick={() => setMostrarFormulario(!mostrarFormulario)}>
                                {mostrarFormulario ? 'Ocultar Formulario' : 'Crear Nuevo Plan'}
                            </button>

                            {/* Mostrar el formulario si mostrarFormulario es verdadero */}
                            {mostrarFormulario && <FormatoPlan onFormSubmit={handleFormSubmit} />}

                            {/* Mostrar la lista de planes */}
                            {planes.length > 0 && (
                                <div className="fuente-form">
                                    <h3>Planes Creados</h3>
                                    <ul>
                                        {planes.map((plan, index) => (
                                            <li key={index}>
                                                <p><strong>Nombre del colaborador:</strong> {plan.nombre}</p>
                                                <p><strong>Descripción:</strong> {plan.descripcion}</p>
                                                <p><strong>Unidades estimadas:</strong> {plan.unidadesEstimadas}</p>
                                                <p><strong>Requiere pago (S/N):</strong> {plan.requierePago}</p>
                                                <p><strong>Mes (es) de realización:</strong> {plan.mesRealizacion}</p>
                                                <p><strong>Colaborador líder:</strong> {plan.colaboradorLider}</p>
                                                <p><strong>Fecha:</strong> {plan.fecha}</p>
                                                <hr />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                </div>


            </div>





        </div>


    )
}

export default DashboardCoach;