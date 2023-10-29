import React, { useState } from 'react';
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
                <h1>Plan Carrera</h1>
            </div>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h3>Ingresar Nueva Actividad</h3>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        value={activity.title}
                                        onChange={handleChange}
                                        placeholder="Nombre de la actividad"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="description"
                                        value={activity.description}
                                        onChange={handleChange}
                                        placeholder="Descripción de la actividad"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Unidades de Desarrollo Profesional (UDP)</Form.Label>
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
                                <Button onClick={handleSave}>Guardar</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h3>Actividades Registradas</h3>
                        </Card.Header>
                        <Card.Body>
                            {activities.map((activity, index) => (
                                <div key={index}
                                    className="activity-container"
                                    style={{ backgroundColor: '#00B8A9', borderRadius: '1rem' }}>
                                    <h4 className="text-white">{activity.title}</h4>
                                    <p className="text-white">{activity.description}</p>
                                    <p className="text-white">UDP: {activity.udp}</p>
                                    <p className="text-white">Tiempo Estimado de Terminación: {activity.estimatedCompletionTime}</p>
                                    <p className="text-white">Es de Pago: {activity.isPaid ? 'Sí' : 'No'}</p>
                                    <hr></hr>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br></br>
            <br></br>
        </Container>
    );
};

export default PlanCarrera;
