import { useParams, useNavigate } from "react-router-dom";
import ViajesController from "./controllers/ViajeController";
import ViajesComprados from "./controllers/ViajesComprados";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Col, Row, Button, Form, Modal } from "react-bootstrap";

function Viaje() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [viaje, setViaje] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [pasajeros, setPasajeros] = useState(1);
    const [fechaIda, setFechaIda] = useState('');
    const [fechaVuelta, setFechaVuelta] = useState('');

    useEffect(() => {
        async function getViaje() {
            const viajesController = new ViajesController();
            const resposta = await viajesController.getViajeById(id);
            if (resposta) {
                setViaje(resposta);
            } else {
                console.log('Viaje no encontrado', resposta);
            }
        }

        getViaje();
    }, [id]);

    const handleDelete = async () => {
        const viajesController = new ViajesController();
        try {
            await viajesController.deleteViaje(id);
            navigate('/');
        } catch (error) {
            console.error('Error al eliminar el viaje:', error);
        }
    };

    const handleComprar = async () => {
        const viajeComprados = new ViajesComprados();
        const nuevoViajeComprado = {
            Pais: viaje.Pais,
            Ciudad: viaje.Ciudad,
            NumerosPasajeros: pasajeros,
            FechaIda: fechaIda,
            FechaVuelta: fechaVuelta,
            Descripcion: viaje.Descripcion
        };
        try {
            await viajeComprados.guardarViaje(nuevoViajeComprado);
            alert('Viaje comprado correctamente');
            setShowModal(false);
            navigate('/');
        } catch (error) {
            console.error('Error al guardar el viaje comprado:', error);
            alert('Hubo un problema al guardar el viaje');
        }
    };

    if (!viaje) {
        return (
            <>
                <h1>Viaje no encontrado</h1>
            </>
        );
    }

    return (
        <>
            <h1>Detalles del Viaje</h1>
            <hr />

            <Row>
                <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Card>
                        <Card.Img variant="top" src={viaje.Imagen} />
                        <Card.Body>
                            <Card.Title>{viaje.Pais}</Card.Title>
                            <Card.Text>
                                {viaje.Descripcion
                                    ?.replace(/\n/g, "*n*")
                                    .split("*n*")
                                    .map((e, i) => <p key={i}>{e}</p>)
                                }
                            </Card.Text>
                            <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
                            <Button variant="success" onClick={() => setShowModal(true)} style={{ marginLeft: '10px' }}>Comprar</Button>

                            <Link className="btn btn-outline-primary" to="/" style={{ marginLeft: '10px' }}>Tornar</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Comprar Viaje</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formPasajeros">
                            <Form.Label>Número de pasajeros:</Form.Label>
                            <Form.Control type="number" value={pasajeros} onChange={(e) => setPasajeros(e.target.value)} min="1" required />
                        </Form.Group>

                        <Form.Group controlId="formFechaIda">
                            <Form.Label>Fecha de ida:</Form.Label>
                            <Form.Control type="date" value={fechaIda} onChange={(e) => setFechaIda(e.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="formFechaVuelta">
                            <Form.Label>Fecha de vuelta:</Form.Label>
                            <Form.Control type="date" value={fechaVuelta} onChange={(e) => setFechaVuelta(e.target.value)} required />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleComprar}>
                        Comprar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Viaje;
