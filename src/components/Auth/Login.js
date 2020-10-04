import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './style.css';
import { usePromotions } from '../../contexts/PromotionsContext.js';

function Login(){
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
			<Form onSubmit={onSubmit} style={{ marginRight: "10px", marginLeft: "10px" }}>
			  <Form.Group controlId="formBasicEmail">
			    <Form.Label>Pseudo</Form.Label>
			    <Form.Control ref={pseudoRef} required type="text" placeholder="Entrez votre pseudo" style={{ minWidth: "150px" }} />
			  </Form.Group>

			  <Form.Group controlId="formBasicPassword">
			    <Form.Label>Mot de passe</Form.Label>
			    <Form.Control type="password" placeholder="Mot de passe" required />
			  </Form.Group>
			  <Button variant="primary" type="submit">
			    Se coonnecter
			  </Button>
			</Form>
		</div>
	);
}

export default Login;