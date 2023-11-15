import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';

import NumericInput from 'react-numeric-input';

import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos CSS de react-toastify
import { ToastContainer, toast } from 'react-toastify';

const DashboardColaborador = ({ user }) => {

  const [showRegistros, setShowRegistros] = useState(false);
  const [showPlanCarrera, setShowPlanCarrera] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [actividades, setActividades] = useState({
    data: [],
    contador: 0,
  });
  const [actividadCount, setActividadCount] = useState(1);
  const [progressByActividad, setProgressByActividad] = useState({
    'Actividad 1': 20,
    'Actividad 2': 60,
    'Actividad 3': 40,
    'Actividad 4': 80,
  });

  // Función para obtener el texto de la actividad
  const getActividadText = (actividadNum) => {
    switch (actividadNum) {
      case 1:
        return 'SCRUM';
      case 2:
        return 'REACT';
      case 3:
        return 'PYTHON';
      case 4:
        return 'JAVA';
      default:
        return '';
    }
  };

  const [selectedActividad, setSelectedActividad] = useState(null);


  const [registro, setRegistro] = useState({
    colaborador: '',
    fecha: '',
    unidadesRealizadas: 0,
  });


  const showNotification = (message, type) => {
    toast(message, { type });
  };

  const toggleRegistros = () => {
    setShowRegistros(!showRegistros);
    setShowPlanCarrera(false);
  };

  const togglePlanCarrera = () => {
    setShowPlanCarrera(!showPlanCarrera);
    setShowRegistros(false);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const validarCampos = (campos, mensajeError) => {
    for (const campo of campos) {
      if (!campo) {
        showNotification(mensajeError, 'error');
        return false;
      }
    }
    return true;
  };

  const handleGuardarAvanceClick = () => {
    const { colaborador, fecha, unidadesRealizadas } = registro;

    // Verifica si el colaborador está vacío
    if (!colaborador) {
      showNotification('Por favor, ingresa el nombre del colaborador', 'error');
      return;
    }

    // Verifica si la fecha está vacía
    if (!fecha) {
      showNotification('Por favor, ingresa la fecha', 'error');
      return;
    }

    // Verifica si las unidades realizadas no son un número válido
    if (isNaN(unidadesRealizadas) || unidadesRealizadas <= 0) {
      showNotification('Por favor, ingresa un número válido de unidades realizadas', 'error');
      return;
    }

    if (!selectedActividad) {
      // No se ha seleccionado ninguna actividad
      showNotification('Por favor, selecciona una actividad', 'error');
      return;
    }

    // Realiza la lógica de guardar aquí
    const updatedProgress = { ...progressByActividad };
    updatedProgress[selectedActividad] += 10;
    setProgressByActividad(updatedProgress);

    showNotification('Guardado exitosamente', 'success');
    setShowRegistros(false);
  };

  const handleAgregarActividadClick = () => {
    setActividades((prevActividades) => {
      const newActividad = {
        numero: prevActividades.contador + 1,
        tipoUnidadDesarrollo: '', // Agrega más propiedades según tus necesidades
        mesesRealizacion: 0,
        esDePago: false,
        unidadesEstimadas: 0,
        descripcion: '',
        // Puedes agregar más propiedades según tus necesidades
      };

      return {
        ...prevActividades,
        data: [...prevActividades.data, newActividad],
        contador: prevActividades.contador + 1,
      };
    });
  };

  const handleCrearActividad = () => {

    actividades.data.forEach((actividad) => {
      const {
        tipoUnidadDesarrollo,
        mesesRealizacion,
        esDePago,
        unidadesEstimadas,
        descripcion,
      } = actividad;

      if (!tipoUnidadDesarrollo) {
        showNotification('Por favor, selecciona el tipo de unidad de desarrollo', 'error');

        return;
      }

      if (isNaN(mesesRealizacion) || mesesRealizacion <= 0) {
        showNotification('Por favor, ingresa un número válido de meses de realización', 'error');

        return;
      }

      if (esDePago && isNaN(unidadesEstimadas)) {
        showNotification('Por favor, ingresa un número válido de unidades estimadas', 'error');

        return;
      }

      if (!descripcion) {
        showNotification('Por favor, ingresa una descripción para la actividad', 'error');

        return;
      }
    });

  };

  const handleEliminarActividadClick = (numero) => {
    setActividades((prevActividades) => {
      const updatedData = [...prevActividades.data];
      const index = updatedData.findIndex((actividad) => actividad.numero === numero);

      if (index !== -1) {
        updatedData.splice(index, 1);
      }

      // Reasignar automáticamente los números de las actividades
      const renumberedData = updatedData.map((actividad, i) => ({
        ...actividad,
        numero: i + 1,
      }));

      // Reajustar el contador al eliminar una actividad
      const newContador = renumberedData.length;

      return {
        ...prevActividades,
        data: renumberedData,
        contador: newContador < 1 ? 1 : newContador, // Asegurarse de que el contador no sea menor a 1
      };
    });
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

          {[1, 2, 3, 4].map((actividadNum) => (
            <div className="col-xl-3 col-md-6 mb-4" key={`Actividad ${actividadNum}`}>
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="col mr-2">
                  <div className="fuente">{`Actividad ${actividadNum}`}</div>
                  <h4 className="small font-weight-bold">{getActividadText(actividadNum)}</h4>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    <h4 className="small font-weight-bold">Progreso </h4>
                  </div>
                  <ProgressBar now={progressByActividad[`Actividad ${actividadNum}`]} label={`${progressByActividad[`Actividad ${actividadNum}`]}%`} />
                </div>
              </div>
            </div>
          ))}
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
                  <Form.Control
                    id="colaborador"
                    placeholder="Nombre del colaborador"
                    value={registro.colaborador}
                    onChange={(e) => setRegistro({ ...registro, colaborador: e.target.value })}
                  />
                </Container>
              </Col>

              <Col>
                <Container className="evidencia">
                  <label>Fecha: </label>
                  <Form.Control
                    id="fecha"
                    placeholder="dd/mm/yyyy"
                    value={registro.fecha}
                    onChange={(e) => setRegistro({ ...registro, fecha: e.target.value })}
                  />
                </Container>
              </Col>
            </Row>
            <br></br>

            <Row>
              <Col>
                <Form.Label>Unidades realizadas (UDP):</Form.Label><br></br>
                <Form.Control
                  type="number"
                  id="unidadesRealizadas"
                  name="udp"
                  value={registro.unidadesRealizadas}
                  onChange={(e) => setRegistro({ ...registro, unidadesRealizadas: e.target.value })}
                />
              </Col>
              <Col>

                <Form.Label>Seleccione la actividad: </Form.Label><br></br>
                <Form.Select value={selectedActividad} onChange={(e) => setSelectedActividad(e.target.value)}>
                  <option>...</option>
                  <option>Actividad 1</option>
                  <option>Actividad 2</option>
                  <option>Actividad 3</option>
                  <option>Actividad 4</option>
                </Form.Select>
              </Col>
            </Row>
            <br />

            <Button variant='primary'>
              <label>
                Adjuntar archivo
                <input type="file" className="account-settings-fileinput" style={{ display: 'none' }} onChange={handleFileChange} />
              </label>
            </Button>

            <div className="aaa">Allowed JPG, PNG or PDF. Max size of 800 kB </div>
            <br></br>

            <hr className="border-light m-2" />

            {selectedFile && (
              <div className="parrafo">
                <p style={{ fontStyle: "italic" }}>Archivo seleccionado: {selectedFile.name}</p>
                <p style={{ fontStyle: "italic" }}>Tamaño: {selectedFile.size} bytes</p>
              </div>
            )}

            <Button variant="primary" onClick={handleGuardarAvanceClick}>Guardar</Button>
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
                  <Form.Control id="colaborador" name="colaborador" placeholder="Nombre del colaborador" />
                </Container>
              </Col>

              <Col>
                <Container className="evidencia">
                  <label>Coach lider: </label>
                  <Form.Control id="coachLider" name="coachLider" placeholder="Nombre del coach lider" />
                </Container>
              </Col>
            </Row>

            <br></br>

            <Row>
              <Col>
                <Container className="evidencia">
                  <label>Rol que desempeña: </label>
                  <Form.Control id="rolDesempena" name="rolDesempena" placeholder="Junior/Semi-senior/Senior" />
                </Container>
              </Col>

              <Col>
                <Container className="evidencia">
                  <label>Split: </label>
                  <Form.Control id="split" name="split" placeholder="Enero - Marzo" />
                </Container>
              </Col>
            </Row>

            <br></br>
            <hr className="border-light m-2" />

            <br></br>

            <Button variant="primary" onClick={handleAgregarActividadClick}>Agregar actividad</Button>

            <br></br>
            <br></br>
            {actividades.data.map((actividad, index) => (
              <div key={index}>
                <Col>
                  <div className="text-900 text-3xl font-medium mb-3 welcome-text">Actividad #{actividad.numero}</div>
                </Col>
                <Row>
                  <Col>
                    <Form.Label htmlFor={`tipoUnidadDesarrollo${actividad.numero}`}>Tipo de unidad de desarrollo: </Form.Label>
                    <Form.Select
                      id={`tipoUnidadDesarrollo${actividad.numero}`}
                      name={`tipoUnidadDesarrollo${actividad.numero}`}
                      defaultValue="Choose..."
                      onChange={(e) => handleTipoUnidadDesarrolloChange(e, actividad.numero)}
                    >
                      <option>...</option>
                      <option>Desarrollo Profesional</option>
                      <option>Crecimiento personal</option>
                      <option>Retorno vortex</option>
                    </Form.Select><br></br><br></br>
                    <Form.Label htmlFor={`mesesRealizacion${actividad.numero}`}>Meses de realizacion:</Form.Label>
                    <Form.Group md="4">
                      <NumericInput id={`mesesRealizacion${actividad.numero}`} name={`mesesRealizacion${actividad.numero}`} min={0} max={50} value={0} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Label htmlFor={`esDePago${actividad.numero}`}>Es de pago:</Form.Label>
                    <Form.Check id={`esDePago${actividad.numero}`} name={`esDePago${actividad.numero}`} type="checkbox" label="✔" /><br></br>
                    <Form.Label htmlFor={`unidadesEstimadas${actividad.numero}`}>Unidades estimadas:</Form.Label>
                    <NumericInput id={`unidadesEstimadas${actividad.numero}`} name={`unidadesEstimadas${actividad.numero}`} min={0} max={50} value={0} />
                  </Col>
                  <Col>
                    <Form.Label htmlFor={`descripcion${actividad.numero}`}>Descripción:</Form.Label>
                    <Form.Control
                      id={`descripcion${actividad.numero}`}
                      name={`descripcion${actividad.numero}`}
                      as="textarea"
                      placeholder="Descripción de la actividad"
                      style={{ height: '99px', width: '300px' }}
                    />
                  </Col>
                </Row>
                <br></br>
                <Button onClick={() => handleEliminarActividadClick(actividad.numero)}>Eliminar actividad</Button>
                <br></br>
                <br></br>
                <hr className="border-light" />
                <br></br>
              </div>

            ))}
            <br />

            <Button variant="primary" onClick={handleCrearActividad}>Guardar</Button>
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
