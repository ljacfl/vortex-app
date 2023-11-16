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

    const { planes_carreras, getPlanes_carreras, loadActividades, actividades } = usePlanes_Carreras()

    useEffect(() => {
        // Inicializar el estado con tareas predeterminadas
        const initialTasks = [
            'Desarrollar una aplicación web simple.',
            'Aprender y practicar un nuevo lenguaje de programación.',
            'Mejorar habilidades de resolución de problemas.'
        ];
        setOutputText(initialTasks.map(task => `\n\u2022 ${task}`).join(''));
        loadActividades()
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

    const handleAprobarPlan = () => {
        // Lógica para aprobar el plan de carrera (si es necesario)
        
        // Muestra la notificación
        showNotification('Plan carrera aprobado', 'success');
      };

    const navigatePlanForm = () => {
        Navigate('planForm')
    }

    // Estado para controlar la visibilidad de la interfaz de notificaciones
    const [mostrarNotificaciones, setMostrarNotificaciones] = useState(false);

    // Función para mostrar/ocultar la interfaz de notificaciones
    const toggleNotificaciones = () => {
        setMostrarNotificaciones(!mostrarNotificaciones);
    };

    return (
        <div class="container-fluid">
            <br></br>

            <div className="d-flexjustify-content-end">
                <button className="btn btn-link notificaciones-button" onClick={toggleNotificaciones}>
                    <img src="campana.png" alt className="Notificaciones" />
                </button>

            </div>

            {mostrarNotificaciones && (
                <div className="notificaciones-overlay">
                    <h1>Notificaciones</h1>
                    <p>Álvaro Tabares ha creado una propuesta de plan carrera.</p>
                    <p>Valeria Rivera añadió una nueva evidencia.</p>
                    <p>Álvaro tabares ha realizado una recomendación.</p>

                </div>
            )}




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

                        <Link to="/plan-carrera">
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
                            <div className="plancarrera-text">Plan Carrera</div>
                        </div>
                        <br></br>
                        {planes_carreras.map((plan, index) => (
                            <div key={index} className="activity-container mb-4">
                                {/* <p>Colaborador: {plan.nombre_colaborador}</p>
                                <p>Coach lider: {plan.coach_lider}</p>
                                <p>Rol: {plan.rol}</p>
                                <p>Split: {plan.split}</p> */}
                                {/* <p>Fecha: {plan.createdAt}</p> */}

                                <div class="row">
                                    <div class="col">
                                        <div className='h1-plan-carrera mb-2'>Colaborador: {plan.nombre_colaborador}</div>

                                    </div>
                                    <div class="col">
                                        <div className='h1-plan-carrera mb-2'>Coach lider: {plan.coach_lider}</div>
                                    </div>

                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div className='h1-plan-carrera mb-2'>Rol: {plan.rol}</div>

                                    </div>
                                    <div class="col">
                                        <div className='h1-plan-carrera mb-2'>Split: {plan.split}</div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                    <Button onClick={handleAprobarPlan}>Aprobar</Button>
                                    </div>
                                    <div className="col-lg-6">
                                        <Link to="/cursos">

                                            <Button >Ver más</Button>
                                        </Link>
                                    </div>

                                </div>
                                <br></br>
                            </div>
                        ))}
                        <div class="card-body">
                            {/* Boton formulario Plan carrera */}


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

                            {actividades.map((actividad, index) => (
                                <div key={index} className="activity-container"
                                    style={{ backgroundColor: '#00B8A9', borderRadius: '1rem' }}>
                                    <h4 className="text-white">Tipo de unidad: {actividad.tipo_unidad_desarrollo}</h4>
                                    <p className="text-white">Es de pago: {actividad.pago}</p>
                                    <p className="text-white">Meses realizaciòn: {actividad.meses_realizacion}</p>
                                    <p className="text-white">Unidades estimadas: {actividad.unidades_estimadas}</p>
                                    <p className="text-white">descripcion : {actividad.descripcion}</p>
                                    <br></br>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCoach;