import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import NumericInput from 'react-numeric-input';

import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos CSS de react-toastify
import { ToastContainer, toast } from 'react-toastify';

const DashboardColaborador = ({ user }) => {
  const now = 10;
  const [showRegistros, setShowRegistros] = useState(false);
  const [showPlanCarrera, setShowPlanCarrera] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [actividades, setActividades] = useState([]); // Agregar estado para actividades


  const showNotification = (message, type) => {
    toast(message, { type });
  };

  const toggleRegistros = () => {
    setShowRegistros(!showRegistros);
  };

  const togglePlanCarrera = () => {
    setShowPlanCarrera(!showPlanCarrera);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleGuardarClick = () => {
    // Realiza la lógica de guardar aquí
    // Luego muestra una notificación
    showNotification('Guardado exitosamente', 'success');
    setShowRegistros(false);
  };

  const handleAgregarActividadClick = () => {
    setActividades([
      ...actividades,
      { nombre: '', udp: '', pago: '', meses: [] },
    ]);
  };

  const handleEliminarActividadClick = (index) => {
    const updatedActividades = [...actividades];
    updatedActividades.splice(index, 1);
    setActividades(updatedActividades);
  };

  const handleActividadNombreChange = (e, index) => {
    const updatedActividades = [...actividades];
    updatedActividades[index].nombre = e.target.value;
    setActividades(updatedActividades);
  };

  const handleActividadUDPChange = (e, index) => {
    const updatedActividades = [...actividades];
    updatedActividades[index].udp = e.target.value;
    setActividades(updatedActividades);
  };

  const handleActividadPagoChange = (e, index) => {
    const updatedActividades = [...actividades];
    updatedActividades[index].pago = e.target.value;
    setActividades(updatedActividades);
  };

  const handleMesesChange = (e, index) => {
    const updatedActividades = [...actividades];
    updatedActividades[index].meses = Array.from(e.target.selectedOptions, (option) => option.value);
    setActividades(updatedActividades);
  };

  return (
    <div className="container-fluid">
      <br />

      <div className="text-900 text-3xl font-medium mb-3 welcome-text">Inicio - Colaborador</div>

      <img src="alvaro150.png" alt="perfil-alvaro" className="perfil-alvaro" />
      <hr className="border-light m-0" />
      <br />

      <div className="card_resumen mb-4">
        <div className="card-header py-3">
          <div className="resume-text">Resumen</div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="col mr-2">
                <div className="fuente">Actividad 1</div>
                <h4 className="small font-weight-bold">SCRUM</h4>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  <h4 className="small font-weight-bold">Progreso </h4>
                </div>
                <ProgressBar now={now + 50} label={`${now + 50}%`} />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="col mr-2">
                <div className="fuente">Actividad 2</div>
                <h4 className="small font-weight-bold">REACT</h4>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  <h4 className="small font-weight-bold">Progreso </h4>
                </div>
                <ProgressBar now={now + 80} label={`${now + 80}%`} />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="col mr-2">
                <div className="fuente">Actividad 3</div>
                <h4 className="small font-weight-bold">PYTHON</h4>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  <h4 className="small font-weight-bold">Progreso </h4>
                </div>
                <ProgressBar now={now + 20} label={`${now + 20}%`} />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="col mr-2">
                <div className="fuente">Actividad 4</div>
                <h4 className="small font-weight-bold">JAVA</h4>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  <h4 className="small font-weight-bold">Progreso</h4>
                </div>
                <ProgressBar now={now + 70} label={`${now + 70}%`} />
              </div>
              <div className="col-auto">
                <i className="fas fa-calendar fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <Button onClick={toggleRegistros}>Registrar avance</Button>
        </div>
        <div className="col-lg-6">
          <Button onClick={togglePlanCarrera}>Crear plan carrera</Button>
        </div>
        <div className="col-lg-6">
          <Link to="/plan-carrera">
            <Button>Plan carrera</Button>
          </Link>
        </div>
      </div>
      <br />
      {showRegistros && (
        <div className="card_resumen mb-4">
          <div className="card-header py-3">
            <div className="resume-text">Registros</div>
          </div>
          <br />

          <Form>
            <Row>
              <Col>
                <Container className="evidencia">
                  <label>Colaborador: </label>
                  <Form.Control placeholder="Nombre del colaborador" />
                </Container>
              </Col>

              <Col>
                <Container className="evidencia">
                  <label>Fecha: </label>
                  <Form.Control placeholder="dd/mm/yyyy" />
                </Container>
              </Col>
            </Row>
            <br></br>

            <Row>
              <Col>
                <label className="aaa">UDPs realizadas: </label>
                <NumericInput min={0} max={50} value={0} />
              </Col>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Seleccione la actividad: </Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>...</option>
                  <option>Actividad 1</option>
                  <option>Actividad 2</option>
                  <option>Actividad 3</option>
                  <option>Actividad 4</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <br />

            <Button variant='primary'>
              <label>
                Adjuntar archivo
                <input type="file" className="account-settings-fileinput" style={{ display: 'none' }} onChange={handleFileChange} />
              </label>
            </Button>

            <div className="aaa">Allowed JPG, PNG or PDF. Max size of 800 kB </div>

            <hr className="border-light m-2" />

            {selectedFile && (
              <div className="parrafo">
                <p>Archivo seleccionado: {selectedFile.name}</p>
                <p>Tamaño: {selectedFile.size} bytes</p>
              </div>
            )}

            <Button variant="primary" onClick={handleGuardarClick}>Guardar</Button>
          </Form>

          <br />

        </div>
      )}

      {showPlanCarrera && (
        <div className="card_resumen mb-4">
          <div className="card-header py-3">
            <div className="resume-text">Crear plan carrera</div>
          </div>
          <br />

          <Form>
            <Row>
              <Col>
                <Container className="evidencia">
                  <label>Colaborador: </label>
                  <Form.Control placeholder="Nombre del colaborador" />
                </Container>
              </Col>

              <Col>
                <Container className="evidencia">
                  <label>Coach lider: </label>
                  <Form.Control placeholder="Nombre del coach lider" />
                </Container>
              </Col>
            </Row>

            <br></br>

            <Row>
              <Col>
                <Container className="evidencia">
                  <label>Rol que desempeña: </label>
                  <Form.Control placeholder="Junior/Semi-senior/Senior" />
                </Container>
              </Col>

              <Col>
                <Container className="evidencia">
                  <label>Split: </label>
                  <Form.Control placeholder="Enero - Marzo" />
                </Container>
              </Col>
            </Row>

            <br></br>
            <hr className="border-light m-2" />
            <br></br>
            <Row>
              <Col>
                <label className="aaa">Unidades de desarrollo: </label>
                <NumericInput min={0} max={50} value={0} />
              </Col>
            </Row>

            <br></br>


            <Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Tipo de UDP: </Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>...</option>
                  <option>Desarrollo Profesional</option>
                  <option>Crecimiento personal</option>
                  <option>Retorno vortex</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Pago:</Form.Label>
                <Form.Control placeholder="Pago de la actividad" />
              </Form.Group>
              <Button variant="primary" onClick={handleAgregarActividadClick}>Agregar actividad</Button>
            </Row>

            {actividades.map((actividad, index) => (
              <Row key={index}>
                <Col>Nombre de actividad:</Col>
                <Form.Control
                  placeholder="Nombre de la actividad"
                  value={actividad.nombre}
                  onChange={(e) => handleActividadNombreChange(e, index)}
                />
                <Col>Tipo de UDP:</Col>
                <Form.Select
                  value={actividad.udp}
                  onChange={(e) => handleActividadUDPChange(e, index)}>
                  <option>...</option>
                  <option>Desarrollo Profesional</option>
                  <option>Crecimiento personal</option>
                  <option>Retorno vortex</option>
                </Form.Select>
                <Col>Pago:</Col>
                <Form.Control
                  placeholder="Pago de la actividad"
                  value={actividad.pago}
                  onChange={(e) => handleActividadPagoChange(e, index)}
                />
                <Button variant="danger" onClick={() => handleEliminarActividadClick(index)}>Eliminar actividad</Button>
              </Row>
            ))}
            <br />

            <Button variant="primary" onClick={handleGuardarClick}>Guardar</Button>
          </Form>
          <br />
        </div>
      )}
      <br />
      <ToastContainer position="top-right" autoClose={3000} />
    </div >
  );
};

export default DashboardColaborador;
