import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Card, Col, Row } from 'react-bootstrap';
import { usePlanes_Carreras } from '../context/Context';

const PlanCarrera = () => {

    const { loadAvances, avances } = usePlanes_Carreras()

    useEffect(() => {
        loadAvances()
    }, [])

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
                    <div className="text-900 text-3xl font-medium mb-3 welcome-text">Plan Carrera - Álvaro Tabares</div>
                </div>
                <hr className="border-light m-0" />
                <br></br>
            </div>

            <div className="card_resumen mb-4">
                <div className="card-header py-3">
                    <div className='resume-text'>Estado</div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col">
                        <div className='h1-titulos mb-4'>Nivel actual:</div>
                        <div className='h1-cursos mb-4'>Desarrollador Junior</div>
                    </div>
                    <div className="col" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className='h1-titulos mb-4'>Progreso Split:</div>
                        <div className="progress-bar text-bg-warning mb-4" style={{ width: '56%' }}>56%</div>
                    </div>
                    <div className="col" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className='h1-titulos mb-4'>Puntos acumulados:</div>
                        <div className='h1-cursos mb-4'>3500</div>
                    </div>
                </div>
                <br></br>
                <div>
                    <Link to="/cursos">
                        <Button>Ver más</Button>
                    </Link>
                </div>
                <br></br>

            </div>
            <Row className="justify-content-center">

                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <div className='resume-text'>Actividades Registradas</div>
                        </Card.Header>
                        <Card.Body>
                            {avances.map((avance, index) => (
                                <div key={index} className="activity-container"
                                    style={{ backgroundColor: '#00B8A9', borderRadius: '1rem' }}>
                                    <div className='h1-cursos mb-2'>Nombre colaborador: {avance.nombre_colaborador}</div>
                                    <div className='h1-cursos mb-2'>Unidades realizadas: {avance.unidades_realizadas}</div>
                                    <div className='h1-cursos mb-2'>Fecha de inicio: {avance.fecha_inicio}</div>
                                    <div className='h1-cursos mb-2'>Actividad: {avance.numero_actvidad}</div>
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
