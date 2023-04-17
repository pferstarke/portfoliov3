import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export default function AppNavbar() {
  const location = useLocation();

  return (
    <>
    {location.pathname === "/"? null :
  	<Navbar expand="lg" className="mt-3">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto"/>
        <Navbar.Collapse id="basic-navbar-nav" className="ms-auto">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="nav-hover mx-md-5 ms-auto">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-hover mx-md-5 ms-auto">About</Nav.Link>
 						<Nav.Link as={Link} to="/projects" className="nav-hover mx-md-5 ms-auto">Projects</Nav.Link>
 						<Nav.Link as={Link} to="/tools" className="nav-hover mx-md-5 ms-auto">Tools</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>}
    </>
  );
}
