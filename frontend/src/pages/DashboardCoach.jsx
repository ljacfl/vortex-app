import { Button } from "react-bootstrap";

const DashboardCoach = () => {
    return (
        <div class="container-fluid">
            <br></br>
            <h1>Inicio - Coach</h1>
            <img src="raul.png" alt className=" perfil-alvaro " />
            <div className="card_resumen mb-4">
                <div className="card-header py-3">
                    <h6 className="h3">Resumen</h6>
                </div>
                <div className="row">
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <h3>Alvaro Tabares</h3>
                            <div className="resumen-coach">
                                <img src="alvaro.png" alt className="perfil" />
                                

                            </div>
                            <h4 class="text-gray-800">Progreso <span
                                    class="float-right">60%</span></h4>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `60%` }}
                                        aria-valuenow="1"
                                        aria-valuemin="0"
                                        aria-valuemax="100">
                                    </div>
                                </div>
                        </div>
                        <br></br>
                        <div>
                            <Button>asd</Button>
                        </div>

                    </div>
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2">
                            <h3>Valeria Rivera</h3>
                            <div className="resumen-coach">
                                <img src="user.png" alt className="perfil" />
                            </div>
                            
                        </div>
                        <br></br>
                        <div>
                            <Button>asd</Button>
                        </div>
                        
                    </div>
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2">
                            <h3>Mariana Velasquez</h3>
                            <div className="resumen-coach">
                                <img src="user.png" alt className="perfil" />
                            </div>
                        </div>
                        <br></br>
                        <div>
                            <Button>asd</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default DashboardCoach;