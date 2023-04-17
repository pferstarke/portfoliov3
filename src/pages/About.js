import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react';
import CV from '../resume/cvitae.pdf'

import '../App.css';


export default function About () {

	return(	
		<Container className="pt-3 mt-3">
			<div id="about-main-div" className="wrap animate pop">
				<div className="overlay">
					<div className="overlay-content animate slide-left delay-2">
						<h1 className="animate slide-left pop delay-4">About me</h1>
					</div>
					<div className="image-content animate slide delay-5"></div>
							<div className="dots animate">
								<div className="dot animate slide-up delay-6"></div>
								<div className="dot animate slide-up delay-7"></div>
								<div className="dot animate slide-up delay-8"></div>
							</div>
				</div>
				<div className="text pt-4 pt-lg-5">
					<p>I was a Mechanical Engineer and now switching career to tech industry. I've seen how technologies have changed our daily living, inspiring me to pursue this path and optimistic to develop a software that will make an impact.<br/>
					<br/>I'm still learning the basics of programming and completing 3 capstone projects in a bootcamp was a huge accomplishment.<br/>
					<br/>If I sound interesting to you, please feel free to view my CV in the button below.<br/>
					<br/>Thank you!</p>
					
				</div>
			</div>
			<Row>
				<Col>
					<Button style={{backgroundColor: '#8B05BD', border: 'none'}}><a href={CV} target="_blank" style={{textDecoration: 'none', color: 'white'}}>Curriculum Vitae</a></Button>
				</Col>
			</Row>
		</Container>
		)
}