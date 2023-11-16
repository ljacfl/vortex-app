import React, { useState } from 'react';

const Recompensas = () => {

    const [puntosActuales, setPuntosActuales] = useState(3500);
    const [mostrarInterfazSecundaria, setMostrarInterfazSecundaria] = useState(false);
    const [tipoRecompensa, setTipoRecompensa] = useState('');
    const [puntosNecesarios, setPuntosNecesarios] = useState(0);

    const handleObtenerClick = (tipo, puntosNecesarios) => {
        if (puntosActuales >= puntosNecesarios) {
            setMostrarInterfazSecundaria(true);
            setTipoRecompensa(tipo);
            setPuntosNecesarios(puntosNecesarios);
        } else {
            alert('No tienes suficientes puntos para redimir esta recompensa.');

        }

    };

    const handleAceptarClick = () => {
        const nuevosPuntosActuales = puntosActuales - puntosNecesarios;
        setPuntosActuales(nuevosPuntosActuales);
        setMostrarInterfazSecundaria(false);
    };

    const handleCancelarClick = () => {
        setMostrarInterfazSecundaria(false);
    };


    const contenidoInterfazSecundaria = () => {
        switch (tipoRecompensa) {
            case 'BonoMonetario':
                return (
                    <div className='ObtenerInterfaz'>
                        <h1>¡Felicidades! puedes obtener esta recompensa</h1>
                        <div className="DetallesRecompensa">
                            <h2>Bono monetario</h2>
                            <p>Puntos Necesarios: {puntosNecesarios}</p>
                            <p>Una bonificación en efectivo o tarjetas de regalo para gastar según su preferencia.</p>
                        </div>
                        <div className="Botones">
                            <button className="btnAceptar" onClick={handleAceptarClick}>Aceptar</button>
                            <button className="btnCancelar" onClick={handleCancelarClick}>Cancelar</button>
                        </div>
                    </div>
                );

            case 'DiaLibreRemunerado':
                return (
                    <div className='ObtenerInterfaz'>
                        <h1>¡Felicidades! puedes obtener esta recompensa</h1>
                        <div className="DetallesRecompensa">
                            <h2>Día libre remunerado</h2>
                            <p>Puntos Necesarios: {puntosNecesarios}</p>
                            <p>Un día libre adicional con su salario completo para disfrutar de tiempo libre.</p>
                        </div>
                        <div className="Botones">
                            <button className="btnAceptar" onClick={handleAceptarClick}>Aceptar</button>
                            <button className="btnCancelar" onClick={handleCancelarClick}>Cancelar</button>
                        </div>
                    </div>
                );

            case 'MembresiaGimnasio':
                return (
                    <div className='ObtenerInterfaz'>
                        <h1>¡Felicidades! puedes obtener esta recompensa</h1>
                        <div className="DetallesRecompensa">
                            <h2>Membresía de Gimnasio</h2>
                            <p>Puntos Necesarios: {puntosNecesarios}</p>
                            <p>Descuento en membresías de gimnasios afiliados.</p>
                        </div>
                        <div className="Botones">
                            <button className="btnAceptar" onClick={handleAceptarClick}>Aceptar</button>
                            <button className="btnCancelar" onClick={handleCancelarClick}>Cancelar</button>
                        </div>
                    </div>
                );


            case 'FormaciónAdicional':
                return (
                    <div className='ObtenerInterfaz'>
                        <h1>¡Felicidades! puedes obtener esta recompensa</h1>
                        <div className="DetallesRecompensa">
                            <h2>Formación Adicional</h2>
                            <p>Puntos Necesarios: {puntosNecesarios}</p>
                            <p>Acceso a cursos, talleres o capacitaciones especializadas extras.</p>
                        </div>
                        <div className="Botones">
                            <button className="btnAceptar" onClick={handleAceptarClick}>Aceptar</button>
                            <button className="btnCancelar" onClick={handleCancelarClick}>Cancelar</button>
                        </div>
                    </div>
                );

            case 'TrabajoRemoto':
                return (
                    <div className='ObtenerInterfaz'>
                        <h1>¡Felicidades! puedes obtener esta recompensa</h1>
                        <div className="DetallesRecompensa">
                            <h2>Trabajo remoto</h2>
                            <p>Puntos Necesarios: {puntosNecesarios}</p>
                            <p>La opción de trabajar desde casa un día a la semana.</p>
                        </div>
                        <div className="Botones">
                            <button className="btnAceptar" onClick={handleAceptarClick}>Aceptar</button>
                            <button className="btnCancelar" onClick={handleCancelarClick}>Cancelar</button>
                        </div>
                    </div>
                );

            case 'AlmuerzoPagado':
                return (
                    <div className='ObtenerInterfaz'>
                        <h1>¡Felicidades! puedes obtener esta recompensa</h1>
                        <div className="DetallesRecompensa">
                            <h2>Café o Almuerzo Pagado</h2>
                            <p>Puntos Necesarios: {puntosNecesarios}</p>
                            <p>Un bono para cubrir el costo de café o almuerzo durante un período específico.</p>
                        </div>
                        <div className="Botones">
                            <button className="btnAceptar" onClick={handleAceptarClick}>Aceptar</button>
                            <button className="btnCancelar" onClick={handleCancelarClick}>Cancelar</button>
                        </div>
                    </div>
                );

            case 'Estacionamiento':
                return (
                    <div className='ObtenerInterfaz'>
                        <h1>¡Felicidades! puedes obtener esta recompensa</h1>
                        <div className="DetallesRecompensa">
                            <h2>Estacionamiento Preferencial</h2>
                            <p>Puntos Necesarios: {puntosNecesarios}</p>
                            <p>Acceso a lugares de estacionamiento preferenciales en la empresa.</p>
                        </div>
                        <div className="Botones">
                            <button className="btnAceptar" onClick={handleAceptarClick}>Aceptar</button>
                            <button className="btnCancelar" onClick={handleCancelarClick}>Cancelar</button>
                        </div>
                    </div>
                );

            case 'SpaMasaje':
                return (
                    <div className='ObtenerInterfaz'>
                        <h1>¡Felicidades! puedes obtener esta recompensa</h1>
                        <div className="DetallesRecompensa">
                            <h2>Día de Spa o Masaje</h2>
                            <p>Puntos Necesarios: {puntosNecesarios}</p>
                            <p>Un día de spa o un masaje para relajarse y recargar energías.</p>
                        </div>
                        <div className="Botones">
                            <button className="btnAceptar" onClick={handleAceptarClick}>Aceptar</button>
                            <button className="btnCancelar" onClick={handleCancelarClick}>Cancelar</button>
                        </div>
                    </div>
                );

            case 'ProyectosEspeciales':
                return (
                    <div className='ObtenerInterfaz'>
                        <h1>¡Felicidades! puedes obtener esta recompensa</h1>
                        <div className="DetallesRecompensa">
                            <h2>Participación en Proyectos Especiales</h2>
                            <p>Puntos Necesarios: {puntosNecesarios}</p>
                            <p>La oportunidad de unirse a proyectos especiales interesantes y desafiantes.</p>
                        </div>
                        <div className="Botones">
                            <button className="btnAceptar" onClick={handleAceptarClick}>Aceptar</button>
                            <button className="btnCancelar" onClick={handleCancelarClick}>Cancelar</button>
                        </div>
                    </div>
                );


        };
    }


    return (
        <div className="container-fluid">
            <br></br>
            <div className="Recompensas-Container">
                <div class="row">
                    <div class="col">
                        <div className='Encabezado'>
                            <img src="trofeo.png" alt="Icono de un trofeo" className="collaborator-photo" />

                        </div>
                    </div>

                    <div class="col">

                        <h1 className='tituloR'>Recompensas</h1>
                    </div>

                    <div class="col">
                        <div className="float-right">
                            <h3 className="AP0">Puntos actuales:</h3>
                            <h4 className="contador0">{puntosActuales}</h4>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div className="card bg-primary text-white shadow mb-4">
                            <div className="card-body">
                                <h3>Bono Monetario</h3>
                                <p>Una bonificación en efectivo o tarjetas de regalo para gastar según su preferencia.</p>
                                <p>Puntos Necesarios: 500</p>
                                <div className="text-right">
                                    <button className="btn btn-primary" onClick={() => handleObtenerClick('BonoMonetario', 500)}>Obtener</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card bg-primary text-white shadow mb-4">
                            <div className="card-body">
                                <h3>Día Libre Remunerado</h3>
                                <p>Un día libre adicional con su salario completo para disfrutar de tiempo libre.</p>
                                <p>Puntos Necesarios: 1000</p>
                                <div className="text-right">
                                    <button className="btn btn-primary" onClick={() => handleObtenerClick('DiaLibreRemunerado', 1000)}>Obtener</button>                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div className="card bg-primary text-white shadow mb-4">
                            <div className="card-body">
                                <h3>Membresía de Gimnasio</h3>
                                <p>Descuento en membresías de gimnasios afiliados.</p>
                                <p>Puntos Necesarios: 1700</p>
                                <div className="text-right">
                                    <button className="btn btn-primary" onClick={() => handleObtenerClick('MembresiaGimnasio', 1700)}>Obtener</button>                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card bg-primary text-white shadow mb-4">
                            <div className="card-body">
                                <h3>Formación Adicional</h3>
                                <p>Acceso a cursos, talleres o capacitaciones extras.</p>
                                <p>Puntos Necesarios: 900</p>
                                <div className="text-right">
                                    <button className="btn btn-primary" onClick={() => handleObtenerClick('FormaciónAdicional', 900)}>Obtener</button>                            </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="row">
                    <div class="col">
                        <div className="card bg-primary text-white shadow mb-4">
                            <div className="card-body">
                                <h3>Día de Trabajo Remoto</h3>
                                <p>La opción de trabajar desde casa un día a la semana.</p>
                                <p>Puntos Necesarios: 1000</p>
                                <div className="text-right">
                                    <button className="btn btn-primary" onClick={() => handleObtenerClick('TrabajoRemoto', 1000)}>Obtener</button>                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card bg-primary text-white shadow mb-4">
                            <div className="card-body">
                                <h3>Café o Almuerzo Pagado</h3>
                                <p>Un bono para cubrir el costo de café o almuerzo durante un período específico.</p>
                                <p>Puntos Necesarios: 400</p>
                                <div className="text-right">
                                    <button className="btn btn-primary" onClick={() => handleObtenerClick('AlmuerzoPagado', 400)}>Obtener</button>                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div className="card bg-primary text-white shadow mb-4">
                            <div className="card-body">
                                <h3>Día de Spa o Masaje</h3>
                                <p>Un día de spa o un masaje para relajarse y recargar energías.</p>
                                <p>Puntos Necesarios: 1300</p>
                                <div className="text-right">
                                    <button className="btn btn-primary" onClick={() => handleObtenerClick('SpaMasaje', 1300)}>Obtener</button>                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card bg-primary text-white shadow mb-4">
                            <div className="card-body">
                                <h3>Estacionamiento Preferencial</h3>
                                <p>Acceso a lugares de estacionamiento preferenciales en la empresa.</p>
                                <p>Puntos Necesarios: 900</p>
                                <div className="text-right">
                                    <button className="btn btn-primary" onClick={() => handleObtenerClick('Estacionamiento', 900)}>Obtener</button>                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-primary text-white shadow mb-4">
                    <div className="card-body">
                        <h3>Participación en Proyectos Especiales</h3>
                        <p>La oportunidad de unirse a proyectos especiales interesantes y desafiantes.</p>
                        <p>Puntos Necesarios: 2000</p>
                        <div className="text-right">
                            <button className="btn btn-primary" onClick={() => handleObtenerClick('ProyectosEspeciales', 2000)}>Obtener</button>                            </div>
                    </div>
                </div>
                <br></br>

                {mostrarInterfazSecundaria && (
                    <div className="InterfazSecundaria">
                        {
                            contenidoInterfazSecundaria()
                        }
                    </div>
                )}

            </div>
        </div>
    );
};

export default Recompensas;
