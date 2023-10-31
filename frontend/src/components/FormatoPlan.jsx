import React, { useState } from 'react';

const FormatoPlan = ({ onFormSubmit }) => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [unidadesEstimadas, setUnidadesEstimadas] = useState('');
    const [requierePago, setRequierePago] = useState('No');
    const [mesRealizacion, setMesRealizacion] = useState('');
    const [colaboradorLider, setColaboradorLider] = useState('');
    const [fecha, setFecha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación de datos aquí si es necesario

        const nuevoPlan = {
            nombre,
            descripcion,
            unidadesEstimadas,
            requierePago,
            mesRealizacion,
            colaboradorLider,
            fecha,
        };

        // Llama a la función proporcionada desde DashboardCoach para manejar los datos del formulario
        onFormSubmit(nuevoPlan);

        // Limpia los campos después de enviar el formulario
        setNombre('');
        setDescripcion('');
        setUnidadesEstimadas('');
        setRequierePago('No');
        setMesRealizacion('');
        setColaboradorLider('');
        setFecha('');
    };

    return (
        <div>
            <h3>Crear Nuevo Plan</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre del colaborador:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                </div>
                <div>
                    <label>Unidades estimadas:</label>
                    <input type="number" value={unidadesEstimadas} onChange={(e) => setUnidadesEstimadas(e.target.value)} required />
                </div>
                <div>
                    <label>Requiere pago (S/N):</label>
                    <select value={requierePago} onChange={(e) => setRequierePago(e.target.value)}>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div>
                    <label>Mes (es) de realización:</label>
                    <input type="text" value={mesRealizacion} onChange={(e) => setMesRealizacion(e.target.value)} required />
                </div>
                <div>
                    <label>Colaborador líder:</label>
                    <input type="text" value={colaboradorLider} onChange={(e) => setColaboradorLider(e.target.value)} required />
                </div>
                <div>
                    <label>Fecha:</label>
                    <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
                </div>
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default FormatoPlan;