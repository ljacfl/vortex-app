import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormatoPlan from "../components/FormatoPlan";
import { usePlanes_Carreras } from "../context/Context";

const DashboardCoach = () => {
    const [inputText, setInputText] = useState(''); // Estado para el primer textarea
    const [outputText, setOutputText] = useState(''); // Estado para el segundo textarea

    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [planes, setPlanes] = useState([]);

    const Navigate = useNavigate();

    const handleFormSubmit = (nuevoPlan) => {
        // Agregar el nuevo plan a la lista de planes
        setPlanes([...planes, nuevoPlan]);

        // Ocultar el formulario después de enviarlo
        setMostrarFormulario(false);
    };

    const { planes_carreras, getPlanes_carreras } = usePlanes_Carreras()

    useEffect(() => {
        // Inicializar el estado con tareas predeterminadas
        const initialTasks = [
            'Desarrollar una aplicación web simple.',
            'Aprender y practicar un nuevo lenguaje de programación.',
            'Mejorar habilidades de resolución de problemas.'
        ];
        setOutputText(initialTasks.map(task => `\n\u2022 ${task}`).join(''));
        getPlanes_carreras()
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

    const navigatePlanForm = () => {
        Navigate('planForm')
    }
    return (
        <div class="container-fluid">
            <br></br>
            <div className="text-900 text-3xl font-medium mb-3 welcome-text">Inicio - Coach</div>
            <img src="raul.png" alt className=" perfil-alvaro " />
            <div className="card_resumen mb-4">
                <div className="card-header py-3">
                    <div className="resume-text">Equipo</div>
                </div>
                <div className="row">
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="h3">Alvaro Tabares</div>
                            <div className="resumen-coach">
                                <img src="alvaro.png" alt className="perfil" />
                            </div>
                            <h4 class="text-gray-800">Progreso </h4>
                            <div role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar text-bg-warning mb-2" style={{ width: '60%' }}>60%</div>
                            </div>
                        </div>
                        <br></br>

                        <Link to="/plan-carrera" k>
                            <Button>Ver más</Button>
                        </Link>

                    </div>
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2">
                            <div className="h3">Valeria Rivera</div>
                            <div className="resumen-coach">
                                <img src="user.png" alt className="perfil" />
                            </div>
                            <h4 class="text-gray-800">Progreso </h4>
                            <div role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar text-bg-warning mb-2" style={{ width: '20%' }}>20%</div>
                            </div>
                        </div>
                        <br></br>

                        <Button>Ver más</Button>

                    </div>
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2">
                            <div className="h3">Mariana Velasquez</div>
                            <div className="resumen-coach">
                                <img src="user.png" alt className="perfil" />
                            </div>
                            <h4 class="text-gray-800">Progreso </h4>
                            <div role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar text-bg-warning mb-2" style={{ width: '75%' }}>75%</div>
                            </div>
                        </div>
                        <br></br>

                        <Button>Ver más</Button>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <div className="recomendaciones-text">Recomendaciones</div>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
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
                            <div className="plancarrera-text">Plan Carrera</div>
                        </div>
                        {planes_carreras.map((plan, index) => (
                            <div key={index} className="activity-container mb-4">
                                <p>Colaborador: {plan.nombre_colaborador}</p>
                                <p>Descripcion: {plan.descripcion}</p>
                                <p>UDP: {plan.unidades_estimadas}</p>
                                <p>Es de pago: {plan.pago}</p>
                                {/* <p>Duracion en meses : {plan.meses_realizacion}</p> */}
                                <p>Coach lider : {plan.coach_lider}</p>
                                <p>fecha inicio : {plan.fecha_inicio}</p>
                            </div>
                        ))}
                        <div class="card-body">
                            {/* Boton formulario Plan carrera */}
                            <Button onClick={() => navigatePlanForm()}>
                                Crear Plan Carrera
                            </Button>

                            {/* Mostrar el formulario si mostrarFormulario es verdadero */}
                            {mostrarFormulario && <FormatoPlan onFormSubmit={handleFormSubmit} />}

                            {/* Mostrar la lista de planes */}
                            {planes.length > 0 && (
                                <div className="fuente-form">
                                    <div className="h3">Planes Creados</div>
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