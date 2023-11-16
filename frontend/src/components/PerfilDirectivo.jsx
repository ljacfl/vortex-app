import React from "react";
import { FormControl, Button } from 'react-bootstrap';

const PerfilDirectivo = () =>{
    return(
        <div class="card shadow mb-4">
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css" rel="stylesheet" />
            </head>
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Perfil</h6>
                </div>
                <div class="card-body">
                    <div className="row no-gutters row-bordered row-border-light">
                        <div className="col-md-9">
                            <div className="tab-content">
                                <div className="card-body media align-items-center">
                                    <img src="beatriz.png" alt className="d-block ui-w-80" />
                                    <div class="media-body ml-4">
                                        <label className="btn btn-outline-primary">
                                            Subir nueva foto
                                            <input type="file" className="account-settings-fileinput" style={{ display: 'none' }} />
                                        </label> &nbsp;                                    
                                        <div className="aaa">Permitido JPG, GIF or PNG. Tamaño máximo 800K </div>
                                    </div>
                                </div>
                                <hr className="border-light m-0" />
                                <div className="card-body">
                                    <div className="form-group">
                                        <label className="form-label">Usuario</label>
                                        <FormControl type="text" className="form-control mb-1" value="BGrass" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Nombre</label>
                                        <FormControl type="text" className="form-control" value="Beatriz Grass" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Correo electrónico</label>
                                        <FormControl type="text" className="form-control mb-1" value="beatriz@vortexbird.com" />
                                        <div className="alert alert-warning mt-3">
                                            Su correo no ha sido confirmado. Porfavor revise su bandeja de entrada.
                                            <a href="javascript:void(0)">Reenviar confirmación</a>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Compañia</label>
                                        <FormControl type="text" className="form-control" value="VortexBird Ltd." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-right mt-3">
                        <Button variant="primary">Guardar</Button>&nbsp;
                    </div>
    
    
                </div>
            </div>
    );
};

export default PerfilDirectivo;