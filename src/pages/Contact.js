import { Form, Stack, Button, Alert } from 'react-bootstrap';
import { useRef, useState } from 'react';
import  emailjs  from '@emailjs/browser'
import Swal from 'sweetalert2';

function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const form = useRef();

	const sendEmail = (e) => {
	    e.preventDefault();

	    emailjs.sendForm('service_q02c22g', 'template_po38fjc', form.current, 'xxv8Y5RM9Au5F6h5m')
	    .then((result) => {
	        if(result.status === 200 && result.text === 'OK'){
	        	console.log(result);
	        	Swal.fire({
	        		title: 'Message sent.',
	        		icon: 'success',
	        		text: 'I will get back to you as soon as possible. Thank you!'
	        	})
	        }
	        else{
	        	Swal.fire({
	        		title: 'Error sending message!',
	        		icon: 'error',
	        		text: 'An error occurred.'
	        	})
	        }

	    }, (error) => {
	        console.log(error.text);
	    });
	    
	    setName('');
	    setEmail('');
	    setSubject('');
	    setMessage('');
	 };

	const clearFields = (e) => {
		e.preventDefault();
		
		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
	}

	return (
	  	<Stack className="form col-10 col-md-6 col-lg-6 mx-auto mt-3 mt-md-5 pt-md-3">
		    <Form ref={form} onSubmit={sendEmail}>
		    	<h1 className="text-center text-dark">Contact me</h1>
		    	<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
		    	  	<Form.Label>Name:</Form.Label>
		    	  	<Form.Control 
		    	  		type="text" 
		    	  		name="user_name" 
		    	  		placeholder="Full name" 
		    	  		value={name}
		    	  		onChange={(e) => setName(e.target.value)}
		    	  		required
		    	  	/>
		    	</Form.Group>
		      	<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
		        	<Form.Label>Email address:</Form.Label>
		        	<Form.Control 
		        		type="email" 
		        		name="user_email" 
		        		placeholder="Email address"
		        		value={email}
		        		onChange={e => setEmail(e.target.value)}
		        		required
		        	/>
		      	</Form.Group>
		      	<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
		      	  	<Form.Label>Subject:</Form.Label>
		      	  	<Form.Control 
		      	  		type="text" 
		      	  		name="subject" 
		      	  		placeholder="Your Concern" 
		      	  		value={subject}
		        		onChange={e => setSubject(e.target.value)}
		      	  		required
		      	  	/>
		      	</Form.Group>
		      	<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
		        	<Form.Label>Message:</Form.Label>
		        	<Form.Control 
		        		as="textarea" 
		        		name="message" 
		        		rows={3} 
		        		value={message}
		        		onChange={e => setMessage(e.target.value)}
		        		placeholder="Enter message"
		        	/>
		      	</Form.Group>
		      	<span className="d-flex justify-content-center">
			      	<Button type="submit" className="mx-5 col-4 col-md-4 col-lg-5 bg-dark" style={{border: 'none'}}>Send</Button>
			      	<Button type="submit" className="mx-5 col-4 col-md-4 col-lg-5 bg-dark" style={{border: 'none'}} onClick={clearFields}>Reset</Button>
		      	</span>
		    </Form>
	    </Stack>
	);
}

export default Contact;