import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Card, Col, Row } from 'react-bootstrap';

const PlanCarrera = () => {
    const [activities, setActivities] = useState([]);
    const [activity, setActivity] = useState({
        title: '',
        description: '',
        udp: 0,
        estimatedCompletionTime: '',
        isPaid: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setActivity({
            ...activity,
            [name]: newValue,
        });
    };

    const handleSave = () => {
        if (activity.title && activity.description && activity.udp >= 0) {
            setActivities([...activities, activity]);
            setActivity({
                title: '',
                description: '',
                udp: 0,
                estimatedCompletionTime: '',
                isPaid: false,
            });
        }
    };

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
                    <div class="row">
                        <div class="col">
                            <div className='h1-titulos mb-4'>Nivel actual:</div>
                            <div className='h1-actividades mb-4'>Desarrollador Junior</div>
                        </div>
                        <div className="col" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className='h1-titulos mb-4'>Progreso Split:</div>
                            <div className="progress-bar text-bg-warning mb-4" style={{ width: '60%' }}>60%</div>
                        </div>
                        <div className="col" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className='h1-titulos mb-4'>Puntos acumulados:</div>
                            <div className='h1-actividades mb-4'>350</div>
                        </div>
                    </div>
                    <Link to="/cursos">
                        <Button>Ver más</Button>
                    </Link>
                </div>



            </div>
            <Row className="justify-content-center">
                <Card>
                    <Card.Header>
                        <div className='resume-text'>Ingresar Nueva Actividad</div>
                    </Card.Header>
                    <Card.Body>
                        <Form className='sign-in-text'>
                            <Col>
                                <Form.Group>

                                    <Form.Label>Título: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        value={activity.title}
                                        onChange={handleChange}
                                        placeholder="Nombre de la actividad"
                                    />

                                </Form.Group>


                                <Form.Group>
                                    <Form.Label>Descripción: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="description"
                                        value={activity.description}
                                        onChange={handleChange}
                                        placeholder="Descripción de la actividad"
                                    />
                                </Form.Group>


                                <Form.Group>
                                    <Form.Label>Unidades de Desarrollo Profesional (UDP):</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="udp"
                                        value={activity.udp}
                                        onChange={handleChange}
                                    />
                                </Form.Group>


                                <Form.Group>
                                    <Form.Label>Tiempo Estimado de Terminación</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="estimatedCompletionTime"
                                        value={activity.estimatedCompletionTime}
                                        onChange={handleChange}
                                    />
                                </Form.Group>


                                <Form.Group>
                                    <Form.Check
                                        type="checkbox"
                                        name="isPaid"
                                        checked={activity.isPaid}
                                        label="¿Es de pago?"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Button onClick={handleSave}>Guardar</Button>
                        </Form>
                    </Card.Body>
                </Card>

                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h3>Actividades Registradas</h3>
                        </Card.Header>
                        <Card.Body>
                            {activities.map((activity, index) => (
                                <div key={index} className="activity-container"
                                    style={{ backgroundColor: '#00B8A9', borderRadius: '1rem' }}>
                                    <h4 className="text-white">Actividad: {activity.title}</h4>
                                    <p className="text-white">Descripcion: {activity.description}</p>
                                    <p className="text-white">UDP: {activity.udp}</p>
                                    <p className="text-white">Tiempo (dias): {activity.estimatedCompletionTime}</p>
                                    <p className="text-white">Es de Pago: {activity.isPaid ? 'Sí' : 'No'}</p>
                                    <br></br>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br></br>
        </Container>
    );
};

export default PlanCarrera;
