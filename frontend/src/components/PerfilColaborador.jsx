import React from "react";
import { FormControl, Button } from 'react-bootstrap';


const PerfilColaborador = () => {
    return (

        <div class="card shadow mb-4">
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css" rel="stylesheet" />
            </head>
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Perfil</h6>
            </div>
            <div className="card-body">
                <div className="row no-gutters row-bordered row-border-light">
                    <div className="col-md-9">
                        <div className="tab-content">
                            <div className="card-body media">
                                <img src="alvaro.png" alt className="d-block ui-w-80" />
                                <div class="media-body ml-4">
                                    <label className="btn btn-outline-primary">
                                        Upload new photo
                                        <input type="file" className="account-settings-fileinput" style={{ display: 'none' }} />
                                    </label> &nbsp;
                                    <div className="aaa">Allowed JPG, GIF or PNG. Max size of 800K </div>
                                </div>
                            </div>
                            <hr className="border-light-perfil m-0" />
                            <div className="card-body">
                                <div className="form-group">
                                    <label className="form-label">Username</label>
                                    <FormControl type="text" className="form-control mb-1" value="Atabares" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <FormControl type="text" className="form-control" value="Álvaro Tabares" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">E-mail</label>
                                    <FormControl type="text" className="form-control mb-1" value="alvaro@vortexbird.com" />
                                    <div className="alert alert-warning mt-3">
                                        Your email is not confirmed. Please check your inbox.
                                        <a href="javascript:void(0)">Resend confirmation</a>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Company</label>
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

export default PerfilColaborador;