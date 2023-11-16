import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const EquipoCoach = () => {
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
            <div className='resume-text'>Equipo</div>
            </div>
            <div className="card-body">

                <div class="card bg-primary text-white shadow">
                    <div className="collaborator">
                        <img src="alvaro.png" alt className=" perfil-alvaro " />
                        <div className='valor'>Álvaro Tabares </div>
                        <div class="text-white-70">Colaborador</div>
                        <h4 class="text-gray-800">Progreso</h4>

                        <div role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar text-bg-warning mb-2" style={{ width: '56%' }}>56%</div>
                        </div>
                        <br></br>
                        <Link to="/plan-carrera">
                            <Button className="btn btn-primary">Consultar</Button>
                        </Link>

                    </div>
                    <br></br>


                </div>
                <br></br>

                <div class="card bg-primary text-white shadow">
                    <div class="card-body-1">
                        <div className="collaborator">
                            <img src="user.png" alt className=" perfil-alvaro " />
                            <div className='valor'>Valeria Rivas </div>
                            <div class="text-white-70">Colaborador</div>
                            <h4 class="text-gray-800">Progreso</h4>

                            <div role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar text-bg-warning mb-2" style={{ width: '20%' }}>20%</div>
                            </div>
                            <br></br>
                            {/* <Button className="btn btn-primary">Consultar</Button> */}
                            <Button className="btn btn-primary">Consultar</Button>
                        </div>

                    </div>
                    <br></br>
                </div>
                <br></br>

                <div class="card bg-primary text-white shadow">
                    <div className="collaborator">
                        <img src="user.png" alt className=" perfil-alvaro " />
                        <div className='valor'>Mariana Velázques </div>
                        <div class="text-white-70">Colaborador</div>
                        <h4 class="text-gray-800">Progreso</h4>

                        <div role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar text-bg-warning mb-2" style={{ width: '75%' }}>75%</div>
                        </div>
                        <br></br>
                        <Button className="btn btn-primary">Consultar</Button>
                    </div>

                    <br></br>
                </div>
                <br></br>

                <div className="text-right mt-3">
                    {/* <Button variant="primary" className="btn btn-primary">Ver más</Button>&nbsp; */}
                </div>
            </div>
        </div>

    )
}

export default EquipoCoach;