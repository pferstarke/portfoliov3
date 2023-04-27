import {Button, Stack, Col, Container, Navbar, Nav } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiLinkedin, mdiFacebook } from '@mdi/js';
import ME from '../images/jm.jpg';
import '../index.css';

import { Link } from 'react-router-dom';


export default function Home () {

	return(
		<Container>
			<Col className="pt-1 pt-lg-1">
				<Stack id="home-content" className="home-border mt-5 ">
					 	<Navbar expand="lg">
					     	<Container>
					     	<Nav.Link as={Link} to="/" style={{fontWeight: 'bold', fontSize: '2em'}}>Jerico</Nav.Link>
					       	<Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto"/>
					       		<Navbar.Collapse id="basic-navbar-nav" className="ms-auto">
							        <Nav className="ms-auto">
					           			<Nav.Link as={Link} to="/about" className="nav-hover mx-md-5 ms-auto text-white">About</Nav.Link>
										<Nav.Link as={Link} to="/projects" className="nav-hover mx-md-5 ms-auto text-white">Projects</Nav.Link>
										<Nav.Link as={Link} to="/tools" className="nav-hover mx-md-5 ms-auto text-white">Tools</Nav.Link>
					         		</Nav>
					       		</Navbar.Collapse> 
					     	</Container>
					    </Navbar>
					<Stack direction="horizontal" gap={3} className="">
						<Stack gap={3} className="justify-content-center m-md-5">
							<div className="text-dark" style={{fontWeight: 'bold', fontSize: '41px'}}>
								<span>Hi, </span>
								<h1 className="home-name" style={{fontWeight: 'bold', fontSize: '45px', color: '#8B05BD'}}>I'm Jerico!</h1>
							</div>
							<h3 style={{fontWeight: 'bold'}}>Web Developer</h3>
							<p className="">Basic skills in web design and web development. <br/>
							Let's connect.</p>
							<Button className="col-8 col-md-7 col-lg-5" style={{background: 'linear-gradient(to bottom,  #BF7BF1, #B367EA, #850BDF)', border: 'none'}} as={Link} to="/contact">Contact Me</Button>
							<span>
								<a href="https://www.linkedin.com/in/jerico2327" target="_blank">
									<Icon path={mdiLinkedin} size={2} style={{color: 'gray'}} className="linkedin mx-2"/>
								</a>
								<a href="https://www.facebook.com/jerico2327" target="_blank">
									<Icon path={mdiFacebook} size={2} style={{color: 'gray'}} className="facebook mx-2"/>
								</a>
							</span>
						</Stack>
						<Stack className="d-flex justify-content-center align-items-center">
							<img src={ME} className="profile-pic m-md-5" alt="Profile Pic" style={{borderRadius: '10px'}}/>
						</Stack>
					</Stack>
				</Stack>
			</Col>
		</Container>
	)
}