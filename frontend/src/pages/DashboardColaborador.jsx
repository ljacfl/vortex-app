import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';


const DashboardColaborador = ({ user }) => {
  const now = 10;
  const [showRegistros, setShowRegistros] = useState(false); // Controla la visibilidad del registro de evidencias
  const [selectedFile, setSelectedFile] = useState(null); // Define the selected file state variable

  const toggleRegistros = () => {
    setShowRegistros(!showRegistros); // Toggle (muestra y oculta)
  };

  const handleFileChange = (e) => {
    // Update the state with the selected file information
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div class="container-fluid">
      <br></br>
      
      <div className="text-900 text-3xl font-medium mb-3 welcome-text">Inicio - Colaborador</div>

      <img src="alvaro150.png" alt className=" perfil-alvaro " />
      <hr className="border-light m-0" />
      <br></br>

      <div className="card_resumen mb-4">
        <div className="card-header py-3">
          <div className="resume-text">Resumen</div>
        </div>
        <div className="row">
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="col mr-2">
                <div className="fuente">Actividad 1</div>
                <h4 class="small font-weight-bold">SCRUM</h4>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  <h4 class="small font-weight-bold">Progreso </h4>
                </div>
                <ProgressBar now={now + 50} label={`${now + 50}%`} />
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="col mr-2">
                <div class="fuente">Actividad 2</div>
                <h4 class="small font-weight-bold">REACT</h4>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  <h4 class="small font-weight-bold">Progreso </h4>
                </div>
                <ProgressBar now={now + 80} label={`${now + 80}%`} />
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="col mr-2">
                <div class="fuente">Actividad 3</div>
                <h4 class="small font-weight-bold">PYTHON</h4>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  <h4 class="small font-weight-bold">Progreso </h4>
                </div>
                <ProgressBar now={now + 20} label={`${now + 20}%`} />
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="col mr-2">
                <div class="fuente">Actividad 4 </div>
                <h4 class="small font-weight-bold">JAVA</h4>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  <h4 class="small font-weight-bold">Progreso</h4>
                </div>
                <ProgressBar now={now + 70} label={`${now + 70}%`} />
              </div>
              <div class="col-auto">
                <i class="fas fa-calendar fa-2x text-gray-300"></i>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div class="col-lg-6">
          <Button onClick={toggleRegistros}>Registrar avance</Button>
        </div>
        <div class="col-lg-6">
          <Link to="/plan-carrera">
            <Button>Plan carrera</Button>
          </Link>
        </div>
      </div>
      <br></br>
      {showRegistros && (
        <div className="card_resumen mb-4">
          <div className="card-header py-3">
            <div className="resume-text">Registros</div>
          </div>
          <br></br>

          <Form>
            <Container className="evidencia">
              <Row>
                <Col>Asunto:</Col>
                <Form.Control placeholder="Nombre de la actividad" />
              </Row>
              <Col>Descripción:</Col>
              <Form.Control placeholder="Descripción registro" />
            </Container>
            <br></br>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State: </Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option></option>
                  <option>Actividad 1</option>
                  <option>Actividad 2</option>
                  <option>Actividad 3</option>
                  <option>Actividad 4</option>
                </Form.Select>
              </Form.Group>
            </Row>


            <Button variant='primary'>
              <label >
                Adjuntar archivo
                <input type="file" className="account-settings-fileinput" style={{ display: 'none' }} onChange={handleFileChange} />
              </label> &nbsp;
            </Button>

            <div className="aaa">Allowed JPG, PNG or PDF. Max size of 800 kB </div>

            {/* 
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <hr className="border-light m-2" />

            {/* Display the selected file information */}
            {selectedFile && (
              <div className="parrafo">
                <p>Archivo seleccionado: {selectedFile.name}</p>
                <p>Tamaño: {selectedFile.size} bytes</p>
              </div>
            )}

            <Button variant="primary" type='reset' >Guardar</Button>

          </Form>
          <br></br>
        </div>

      )}
      <br></br>
    </div>

  )
};

export default DashboardColaborador;
