import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import cx from 'classnames';

import uncheckImage from '../images/checkbox-uncheck.svg';
import checkImage from '../images/checkbox-check.svg';

const DashboardDirectivo = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            content: 'Sign contract for "What are conference organizers afraid of?"',
            completed: true,
        },
        {
            id: 2,
            content: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
            completed: true,
        },
        {
            id: 3,
            content: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
            completed: true,
        },
        {
            id: 4,
            content: 'Create 4 Invisible User Experiences you Never Knew About',
            completed: false,
        },
        {
            id: 5,
            content: 'Read "Following makes Medium better"',
            completed: false,
        },
        {
            id: 6,
            content: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
            completed: false,
        },
    ]);

    const toggleComplete = (todoId) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === todoId) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        );
    };

    const deleteTodo = (todoId) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    };

    // Estado para controlar la visibilidad de la interfaz de notificaciones
    const [mostrarNotificaciones, setMostrarNotificaciones] = useState(false);

    // Función para mostrar/ocultar la interfaz de notificaciones
    const toggleNotificaciones = () => {
        setMostrarNotificaciones(!mostrarNotificaciones);
    };

    
    return (
        <div className="container-fluid">
            <div className="dashboard-directivo">

            <div className="d-flexjustify-content-end">
                    <button className="btn btn-link notificaciones-button" onClick={toggleNotificaciones}>
                        <img src="campana.png" alt className="Notificaciones" />
                    </button>

                </div>

                {mostrarNotificaciones && (
                    <div className="notificaciones-overlay">
                        <h1>Notificaciones</h1>
                        <p>Johan Bejarano a finalizado su Split.</p>
                        <p>Álvaro Tabares añadió una nueva actividad.</p>
                    </div>
                )}

                <div className="text-900 text-3xl font-medium mb-3 welcome-text">Inicio - Directivo</div>
                <img src="beatriz.png" alt className=" perfil-alvaro " />
                <hr className="border-light m-0" />
                <br></br>
                <div className="card_resumen mb-4">
                    <div className="card-header py-3">
                        <div className="resume-text">Equipo</div>
                    </div>
                    <div className="row">
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="h3">Raul Collazos</div>
                                <div className="resumen-coach">
                                    <img src="raul90.png" alt className="perfil" />
                                </div>

                            </div>
                            <br></br>

                            <Link to="/equipo-coach">
                                <Button>Ver más</Button>
                            </Link>

                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div className="h3">Johan Bejarano</div>
                                <div className="resumen-coach">
                                    <img src="user.png" alt className="perfil" />
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

                            </div>
                            <br></br>

                            <Button>Ver más</Button>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="h3">Tareas</h6>
                            </div>

                            <div className="content-task">
                                <form>
                                    {todos.map((todo) => (
                                        <div className={cx("todo-item-task", { completed: todo.completed })} key={todo.id}>
                                            <div className="todo-item-wrapper-task">
                                                <div className="checkbox-icons-task" onClick={() => toggleComplete(todo.id)}>
                                                    <img className="checkbox-icon-task" src={todo.completed ? checkImage : uncheckImage} width={17} />
                                                </div>
                                                <div className="todo-content-task">{todo.content}</div>
                                                <a className="delete-icon-task" onClick={() => deleteTodo(todo.id)}>&times;</a>
                                            </div>
                                        </div>
                                    ))}
                                </form>
                            </div>
                            <div className="footer">
                                <hr />
                                <div className="stats">
                                    <i className="fa fa-history"></i> Updated 3 minutes ago
                                </div>
                            </div>

                            <ul class="Estadisticas">
                                <div className='fuente-form'>
                                    <h4>Estádisticas</h4>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div class="card bg-primary text-white shadow">

                                            <p>Balance UDP</p>

                                            <img src="diagrama.png " class="img_estadistica" />
                                        </div>
                                    </div>
                                    <br></br>

                                    <div className="col-lg-6">
                                        <div class="card bg-primary text-white shadow">
                                            <p>Balance UDP</p>
                                            <img src="diagrama.png " class="img_estadistica" />
                                        </div>
                                    </div>
                                </div>


                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="h3">Gamificación</h6>
                            </div>
                            <div className="card-body">
                                <img src="/trofeo.png" alt="Trofeo" />
                                <h1>Premios primer split</h1>
                                <p>¡Redime tus puntos!</p>

                                <div className="text-right mt-3">

                                    <Link to="/recompensas">
                                        <Button variant="primary">Ver Recompensas</Button>
                                    </Link>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}



export default DashboardDirectivo;