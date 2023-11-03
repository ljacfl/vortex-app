import React from 'react';

const Recompensas = () => {
    return (
        <div className="Recompensas-Container">
            {/* Otras partes de tu componente DashboardCoach */}
            <div class="float-right">
                <h3 class="AP0">Puntos Actuales</h3>
                <h4 class="contador0">8000</h4>
            </div>
            <h1>Recompensas</h1>
            <img src="trofeo.png" alt="Icono de un trofeo" className="collaborator-photo" />
            <br></br>
            <br></br>

            <div className="card bg-primary text-white shadow">
                <div className="card-body-1">
                    <div className="collaborator">
                        
                        <h3>Bono Monetario</h3>
                        <p>Una bonificación en efectivo o tarjetas de regalo para gastar según su preferencia.</p>
                        <p>Puntos Necesarios: 500</p>
                        <float className="float-right">
                            <button className="btn btn-primary">Obtener</button>
                        </float>
                        {/* Agrega cualquier otro contenido que desees para esta recompensa */}
                    </div>
                </div>
            </div>
            <div className="card bg-primary text-white shadow">
                <div className="card-body-1">
                    <div className="collaborator">

                        <h3>Día Libre Remunerado</h3>
                        <p>Un día libre adicional con su salario completo para disfrutar de tiempo libre.</p>
                        <p>Puntos Necesarios: 1000</p>
                        <float className="float-right">
                            <button className="btn btn-primary">Obtener</button>
                        </float>
                        {/* Agrega cualquier otro contenido que desees para esta recompensa */}
                    </div>
                </div>
            </div>
            <div className="card bg-primary text-white shadow">
                <div className="card-body-1">
                    <div className="collaborator">

                        <h3>Membresía de Gimnasio</h3>
                        <p>Descuento en membresías de gimnasios afiliados.</p>
                        <p>Puntos Necesarios: 1700</p>
                        <float className="float-right">
                            <button className="btn btn-primary">Obtener</button>
                        </float>
                        {/* Agrega cualquier otro contenido que desees para esta recompensa */}
                    </div>
                </div>
            </div>
            {/* Agrega más recompensas aquí... */}
            <div className="card bg-primary text-white shadow">
                <div className="card-body-1">
                    <div className="collaborator">

                        <h3>Formación Adicional</h3>
                        <p>Acceso a cursos, talleres o capacitaciones especializadas extras.</p>
                        <p>Puntos Necesarios: 900</p>
                        <float className="float-right">
                            <button className="btn btn-primary">Obtener</button>
                        </float>
                        {/* Agrega cualquier otro contenido que desees para esta recompensa */}
                    </div>
                </div>
            </div>
            <div className="card bg-primary text-white shadow">
                <div className="card-body-1">
                    <div className="collaborator">

                        <h3>Día de Trabajo Remoto</h3>
                        <p>La opción de trabajar desde casa un día a la semana.</p>
                        <p>Puntos Necesarios: 1000</p>
                        <float className="float-right">
                            <button className="btn btn-primary">Obtener</button>
                        </float>
                        {/* Agrega cualquier otro contenido que desees para esta recompensa */}
                    </div>
                </div>
            </div>
            <div className="card bg-primary text-white shadow">
                <div className="card-body-1">
                    <div className="collaborator">

                        <h3>Café o Almuerzo Pagado</h3>
                        <p>Un bono para cubrir el costo de café o almuerzo durante un período específico.</p>
                        <p>Puntos Necesarios: 400</p>
                        <float className="float-right">
                            <button className="btn btn-primary">Obtener</button>
                        </float>
                        {/* Agrega cualquier otro contenido que desees para esta recompensa */}
                    </div>
                </div>
            </div>
            <div className="card bg-primary text-white shadow">
                <div className="card-body-1">
                    <div className="collaborator">

                        <h3>Día de Spa o Masaje</h3>
                        <p>Un día de spa o un masaje para relajarse y recargar energías.</p>
                        <p>Puntos Necesarios: 1300</p>
                        <float className="float-right">
                            <button className="btn btn-primary">Obtener</button>
                        </float>
                        {/* Agrega cualquier otro contenido que desees para esta recompensa */}
                    </div>
                </div>
            </div>
            <div className="card bg-primary text-white shadow">
                <div className="card-body-1">
                    <div className="collaborator">

                        <h3>Estacionamiento Preferencial</h3>
                        <p>Acceso a lugares de estacionamiento preferenciales en la empresa.</p>
                        <p>Puntos Necesarios: 900</p>
                        <float className="float-right">
                            <button className="btn btn-primary">Obtener</button>
                        </float>
                        {/* Agrega cualquier otro contenido que desees para esta recompensa */}
                    </div>
                </div>
            </div>
            <div className="card bg-primary text-white shadow">
                <div className="card-body-1">
                    <div className="collaborator">

                        <h3>Participación en Proyectos Especiales</h3>
                        <p>La oportunidad de unirse a proyectos especiales interesantes y desafiantes.</p>
                        <p>Puntos Necesarios: 2000</p>
                        <float className="float-right">
                            <button className="btn btn-primary">Obtener</button>
                        </float>
                        {/* Agrega cualquier otro contenido que desees para esta recompensa */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Recompensas;
