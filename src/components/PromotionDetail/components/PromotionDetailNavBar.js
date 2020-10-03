import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import argonReact from '../../../assets/img/brand/argon-react-white.png';

function PromotionDetailNavBar({ promotion, onChange, searchDisabled }) {

	return (
		<>
			<Navbar expand="lg" bg="primary" variant="dark">
			  <Navbar.Brand href="#home">
			  	<Link to={process.env.PUBLIC_URL +  "/"}>
	          <img
	            alt="..."
	            src={argonReact}
	          />
	        </Link>
			  </Navbar.Brand>
			  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
			  <Navbar.Collapse id="responsive-navbar-nav">
			    <Nav className="mr-auto">
			      <Nav.Link href={process.env.PUBLIC_URL +  "/createpromotion/"}>Créer une promotion</Nav.Link>
			      <Nav.Link href={process.env.PUBLIC_URL +  "/promotions/"}>Explorer</Nav.Link>
			    </Nav>
			    {!searchDisabled && <Nav>
			      <Form inline onSubmit={e => e.preventDefault()}>
				      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => onChange(e.target.value)} />
				      {/* <Button variant="outline-light">Search</Button> */}
				    </Form>
			    </Nav> }
			  </Navbar.Collapse>
			</Navbar>
			{!!promotion && <>
				<Navbar>
			    <Navbar.Brand href="#">Promotion {promotion.year}</Navbar.Brand>
			    <Nav className="mr-auto"></Nav>
			    <Nav>
			    	<h5>{ promotion.number } étudiants promus</h5>
			    </Nav>
			  </Navbar>
			  <h4 style={{ textAlign: 'center' }} >{promotion.description} </h4>
			</>}
		</>
	);
}

export default PromotionDetailNavBar;