import {Button, Stack, Col, Container, Navbar, Nav } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiLinkedin, mdiFacebook } from '@mdi/js';
import Gmail from '../images/jm.jpg';
import '../index.css';

import { Link } from 'react-router-dom';


export default function Home () {

	return(
		<Container>
			<Col className="pt-1 pt-lg-1">
				<Stack id="home-content" className="home-border mt-5 ">
					 	<Navbar expand="lg">
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
					    </Navbar>
					<Stack direction="horizontal" gap={3} className="">
						<Stack gap={3} className="justify-content-center m-md-5">
							<div className="text-dark" style={{fontWeight: 'bold', fontSize: '41px'}}>
								<span>Hi, </span>
								<h1 className="home-name text-dark" style={{fontWeight: 'bold', fontSize: '45px'}}>I'm Jerico!</h1>
							</div>
							<h3 style={{fontWeight: 'bold'}}>Web Developer</h3>
							<p className="">Basic skills in web design and web development. <br/>
							Let's connect.</p>
							<Button className="col-10 col-md-6 col-lg-4" style={{backgroundColor: '#8B05BD', border: 'none'}} as={Link} to="/contact">Contact Me</Button>
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
							<img src={Gmail} className="profile-pic m-md-5" alt="Profile Pic"/>
						</Stack>
					</Stack>
				</Stack>
			</Col>
		</Container>
	)
}