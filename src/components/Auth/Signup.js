import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './style.css';
import { usePromotions } from '../../contexts/PromotionsContext.js';


function Signup(){
	const histoty = useHistory();
	const { setUser } = usePromotions();

	const pseudoRef = useRef();

	const onSubmit = event => {
		event.preventDefault();
		setUser(pseudoRef.current.value);
		histoty.push(process.env.PUBLIC_URL +  "/");
	}

	return (
		<div id="auth">
			<Form style={{ marginRight: "10px", marginLeft: "10px" }} onSubmit={onSubmit}>
			  <Form.Group controlId="formBasicEmail">
			    <Form.Label>Pseudo</Form.Label> 
			    <Form.Control ref={pseudoRef} type="text" placeholder="Entrez votre pseudo" required />
			    <Form.Text className="text-muted">
			      Ce nom sera vu par tout le monde comme votre pseudo !
			    </Form.Text>
			  </Form.Group>
			  <Form.Group controlId="formBasicEmail">
			    <Form.Label>Adresse mail</Form.Label>
			    <Form.Control type="email" placeholder="Entrez votre email" required />
			  </Form.Group>

			  <Form.Group controlId="formBasicPassword">
			    <Form.Label>Mot de passe</Form.Label>
			    <Form.Control type="password" placeholder="Mot de passe" required />
			  </Form.Group>
			  <Button variant="primary" type="submit">
			    S'enregistrer
			  </Button>
			</Form>
		</div>
	);
}

export default Signup;