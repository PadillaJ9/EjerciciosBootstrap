import './App.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">Lista de Viajes Disponibles</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/añadir" className='nav-link'>Añadir Viaje</Link>
            </Nav>
           
            <Nav className="me-auto">
              <Link to="/viajesComprados" className='nav-link'>Viajes Comprados</Link>
            </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
      <br />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default App

