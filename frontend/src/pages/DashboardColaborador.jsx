import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const DashboardColaborador = ({ user }) => {
  return (
    <div class="container-fluid">
      <br></br>
      <div className="text-900 text-3xl font-medium mb-3 welcome-text">Inicio - Colaborador</div>

      <img src="alvaro150.png" alt className=" perfil-alvaro " />

      <div className="card_resumen mb-4">
        <div className="card-header py-3">
          <h6 className="h3">Resumen</h6>
        </div>
        <div className="row">
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">

              <div class="col mr-2">
                <div className="fuente">Actividad 1</div>
                <h4 class="small font-weight-bold">SCRUM</h4>
                <div class="h5 mb-0 font-weight-bold text-gray-800"><h4 class="small font-weight-bold">Progreso <span
                  class="float-right">60%</span></h4>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar-1"
                    role="progressbar"
                    style={{ width: `60%` }}
                    aria-valuenow="1"
                    aria-valuemin="0"
                    aria-valuemax="100">
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">

              <div class="col mr-2">
                <div class="fuente">Actividad 2</div>
                <h4 class="small font-weight-bold">REACT</h4>
                <div class="h5 mb-0 font-weight-bold text-gray-800"><h4 class="small font-weight-bold">Progreso <span
                  class="float-right">100%</span></h4>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar-1"
                    role="progressbar"
                    style={{ width: `100%` }}
                    aria-valuenow="1"
                    aria-valuemin="0"
                    aria-valuemax="100">
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">

              <div class="col mr-2">
                <div class="fuente">Actividad 3</div>
                <h4 class="small font-weight-bold">PYTHON</h4>
                <div class="h5 mb-0 font-weight-bold text-gray-800"><h4 class="small font-weight-bold">Progreso <span
                  class="float-right">20%</span></h4>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar-1"
                    role="progressbar"
                    style={{ width: `20%` }}
                    aria-valuenow="1"
                    aria-valuemin="0"
                    aria-valuemax="100">
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">

              <div class="col mr-2">
                <div class="fuente">Actividad 4 </div>
                <h4 class="small font-weight-bold">JAVA</h4>
                <div class="h5 mb-0 font-weight-bold text-gray-800"><h4 class="small font-weight-bold">Progreso <span
                  class="float-right">10%</span></h4>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar-1"
                    role="progressbar"
                    style={{ width: `10%` }}
                    aria-valuenow="1"
                    aria-valuemin="0"
                    aria-valuemax="100">
                  </div>
                </div>
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
          <Button>Registrar avance</Button>
        </div>
        <div class="col-lg-6">
          <Link to="/plan-carrera">
            <Button>Plan carrera</Button>
          </Link>
        </div>
      </div>

    </div>
  )
};

export default DashboardColaborador;
