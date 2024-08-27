import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ViajeController from './controllers/ViajeController';
import './add.css';


function Añadir() {
    const [pais, setPais] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [archivoImagen, setArchivoImagen] = useState(null);
    const [urlImagen, setUrlImagen] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Realizar la carga del archivo si hay un archivo seleccionado
        if (archivoImagen) {
            const formData = new FormData();
            formData.append('imagen', archivoImagen);

            try {
                const response = await fetch('https://app.nocodb.com/api/v2/tables/mgble2kq1sii5sv', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    setUrlImagen(data.url); // Guardar la URL de la imagen después de subirla
                } else {
                    throw new Error('Error al subir la imagen');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        const nuevoViaje = {
            Pais: pais,
            Ciudad: ciudad,
            Descripcion: descripcion,
            Imagen: urlImagen || null, // Usar la URL de la imagen si está disponible
        };

        const viajesController = new ViajeController();
        const respuesta = await viajesController.guardarViaje(nuevoViaje);

        if (respuesta) {
            alert('Viaje añadido correctamente');
            navigate('/'); // Redirige a la página principal después de añadir el viaje
        } else {
            alert('Hubo un problema al añadir el viaje');
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setArchivoImagen(file);
    };

    return (
        <div>
            <h1>Añadir Nuevo Viaje</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>País:</label>
                    <input
                        type="text"
                        value={pais}
                        onChange={(e) => setPais(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Ciudad:</label>
                    <input
                        type="text"
                        value={ciudad}
                        onChange={(e) => setCiudad(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Imagen:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit">Añadir Viaje</button>
            </form>
        </div>
    );
}

export default Añadir;
