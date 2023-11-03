import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const DashboardDirectivo = () => {
    return (
        <div className="container-fluid">
            <div className="dashboard-directivo">
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
                                <h6 className="h3">Reportes</h6>
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