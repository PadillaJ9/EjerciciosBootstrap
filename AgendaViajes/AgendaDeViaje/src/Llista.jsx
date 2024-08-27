import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ViajesController from './controllers/ViajeController';
import './Llista.css'; 

function Llista() {
    const [viajes, setViajes] = useState([]);

    useEffect(() => {
        async function getAll() {
            const viajescontroller = new ViajesController();
            const recs = await viajescontroller.getAllViajes();
            if (recs.length) {
                setViajes(recs);
                console.log(recs);
            } else {
                console.log(recs);
            }
        }

        getAll();
    }, []);

    if (viajes.length === 0) {
        return (
            <>
                <h1>No hay viajes disponibles</h1>
            </>
        );
    }

    return (
        <>
            <h1>Lista de Viajes</h1>

            <div className="card-container">
                {viajes.map((viaje) => (
                    
                    <div key={viaje.Id} className="card">
                        <Link to={"/viaje/" + viaje.Id}>
                            <img src={viaje.Imagen} alt={`Imagen de ${viaje.Ciudad}`} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{viaje.Pais}</h5>
                                <p className="card-text">{viaje.Ciudad}</p>
                                <p className="card-text">{viaje.Descripcion}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Llista;
