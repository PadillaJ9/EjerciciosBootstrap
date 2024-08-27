import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ViajesComprados from './controllers/ViajesComprados';
import './Llista.css';

function Llista() {
    const [viajes, setViajes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getAllViajes() {
            const viajesController = new ViajesComprados();
            try {
                const recs = await viajesController.getAllViajes();
                setViajes(recs);
            } catch (error) {
                console.error('Error al obtener los viajes:', error);
            } finally {
                setLoading(false);
            }
        }

        getAllViajes();
    }, []);

    if (loading) {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        );
    }

    if (viajes.length === 0) {
        return (
            <div>
                <h1>No hay viajes disponibles</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>Lista de Viajes Comprados</h1>

            <div className="card-container">
                {viajes.map((viaje) => (
                    <div key={viaje.Id} className="card">
                            <div className="card-body">
                                <img src={viaje.Imagen} alt="Imagen del viaje" className="card-img-top" />
                                <h5 className="card-title">País: {viaje.Pais}</h5>
                                <p className="card-text">Ciudad: {viaje.Ciudad}</p>
                                <p className="card-text">Descripción: {viaje.Descripcion}</p>
                                <p className="card-text">Número de Pasajeros: {viaje.NumerosPasajeros}</p>
                                <p className="card-text">Fecha de Ida: {viaje.FechaIda}</p>
                                <p className="card-text">Fecha de Vuelta: {viaje.FechaVuelta}</p>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Llista;
