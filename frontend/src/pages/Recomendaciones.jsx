import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap'


import { Link } from 'react-router-dom';


const Recomendaciones = () => {

    const [inputText, setInputText] = useState(''); // Estado para el primer textarea
    const [outputText, setOutputText] = useState(''); // Estado para el segundo textarea

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
        <div className="container-fluid">

            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css" rel="stylesheet" />
            </head>
            <div className="text-center">
                <div className="card-header py-3">
                    <br></br>
                    <div className="text-900 text-3xl font-medium mb-3 welcome-text">Información</div>
                </div>
                <hr className="border-light m-0" />
                <br></br>
            </div>
            <div className="row">

                <div className="col-lg-6">
                    <div className="card_resumen mb-4">
                        <div className="card-header py-3">
                            <div className="resume-text">Gamificación</div>
                        </div>
                        <div className="card-body">
                            <div class="row">
                                <div class="col">
                                    <div className='valor'>Premios primer split: </div>
                                </div>
                                <img src="/trofeo.png" alt="Trofeo" />
                            </div>
                            <div className='h1-premios mb-2'>¡Redime tus puntos!</div>
                            <div className="text-right mt-3">
                                <Link to="/recompensas">
                                    <Button className='btn-primary'>Ver Recompensas</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-6">
                    <div className="card_resumen mb-4">
                        <div className="card-header py-3">
                            <div className="resume-text">VortexChat</div>
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
                                <h6>Agregar nueva recomendacion:</h6>
                                <textarea
                                    id="inputTextArea"
                                    class="form-control"
                                    rows="4"
                                    value={inputText}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>

                            <button class="btn btn-primary" onClick={handleSaveButtonClick}>
                                Enviar
                            </button>
                        </div>
                    </div>
                    <br></br>
                </div>
            </div>
        </div>
    )
}

export default Recomendaciones;