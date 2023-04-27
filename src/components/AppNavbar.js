import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export default function AppNavbar() {
  const location = useLocation();

  return (
    <>
    {location.pathname === "/"? null :
  	<Navbar expand="lg" className="mt-2"> 
      <Container>
        <Nav.Link id="nav-logo" as={Link} to="/" style={{fontWeight: 'bold', fontSize: '2em', color: 'white'}}>Jerico</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto"/>
        <Navbar.Collapse id="basic-navbar-nav" className="ms-auto">
          <Nav className="ms-auto ">
            <Nav.Link as={Link} to="/about" className="nav-hover mx-md-5 ms-auto text-white">About</Nav.Link>
 						<Nav.Link as={Link} to="/projects" className="nav-hover mx-md-5 ms-auto text-white">Projects</Nav.Link>
 						<Nav.Link as={Link} to="/tools" className="nav-hover mx-md-5 ms-auto text-white">Tools</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>}
    </>
  );
}
