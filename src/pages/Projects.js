import '../App.css';
import Project1 from '../images/proj1.png';
import Project2 from '../images/proj2.png';
import Project3 from '../images/proj3.png';
import Project4 from '../images/proj4.png';

import { Container } from 'react-bootstrap';

export default function Projects () {
	return(
		<>
		<Container>
			<div className="box-container">
				<div className="box-item m-3">
				    <div className="flip-box">
					    <div className="flip-box-front text-center">
					        <div className="inner color-white">
					        	<h3 className="flip-box-header">Web Portfolio</h3>
					            <p>Capstone Project 1</p>
					          	<img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"/>
					        </div>
					    </div>
					    <div className="flip-box-back text-center" >
					        <div className="inner color-white">
					          	<img src={Project1} alt="project1" className="img-fluid"/>
					          	<p>HTML, CSS and Bootstrap</p>
					          	<button className="flip-box-button"><a className="proj-anchor" href="https://pferstarke.github.io/webportfolio" target="_blank">Visit website</a></button>
					        </div>
					    </div>
					</div>
				</div>
				<div className="box-item m-3">
				    <div className="flip-box">
				      	<div className="flip-box-front text-center" >
				        	<div className="inner color-white">
				          		<h3 className="flip-box-header">API server</h3>
				          		<p>Capstone Project 2</p>
				          		<img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"/>
				        	</div>
				     	</div>
					    <div className="flip-box-back text-center" >
					        <div className="inner color-white">
					          	<img src={Project2} alt="project1" className="img-fluid"/>
					          	<p>Postman, MongoDB and Express JS</p>
					          	<button className="flip-box-button"><a className="proj-anchor" href="https://github.com/pferstarke/capstone2" target="_blank">View on Github</a></button>
					        </div>
				    	</div>
				    </div>
				</div>
				<div className="box-item m-3">
				    <div className="flip-box">
				      	<div className="flip-box-front text-center filter-" >
				        	<div className="inner color-white">
				          		<h3 className="flip-box-header">E-commerce website</h3>
				          		<p>Capstone Project 3</p>
				          		<img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"/>
				        	</div>
				      	</div>
				    	<div className="flip-box-back text-center">
				        	<div className="inner color-white">
				          		<img src={Project3} alt="project1" className="img-fluid"/>
				          		<p>React JS</p>
				          		<button className="flip-box-button"><a className="proj-anchor" href="https://e-commerce-blush-tau.vercel.app" target="_blank">Visit website</a></button>
				        	</div>
				      	</div>
				    </div>
				</div>
				<div className="box-item m-3">
				    <div className="flip-box">
				      	<div className="flip-box-front text-center filter-" >
				        	<div className="inner color-white">
				          		<h3 className="flip-box-header">Chat Application</h3>
				          		<img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"/>
				        	</div>
				      	</div>
				    	<div className="flip-box-back text-center">
				        	<div className="inner color-white">
				          		<img src={Project4} alt="project1" className="img-fluid"/>
				          		<p>MERN with socket.io</p>
				          		<button className="flip-box-button"><a className="proj-anchor" href="https://chatt-app-flame.vercel.app/register" target="_blank">Visit website</a></button>
				        	</div>
				      	</div>
				    </div>
				</div>
			</div>
		</Container>
		</>
	)
}