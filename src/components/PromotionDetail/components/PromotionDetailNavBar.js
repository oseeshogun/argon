import React from 'react';
import { Link } from 'react-router-dom';
import GlobalNavBar from '../../Landing/components/GlobalNavBar.js';
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import argonReact from '../../../assets/img/brand/argon-react-white.png';
import './de.css';

function PromotionDetailNavBar({ promotion, onChange, searchDisabled }) {

	return (
		<>
			<GlobalNavBar />
			{!!promotion && <>
				<Navbar className='mt-5'>
			    <Navbar.Brand href="#">Promotion {promotion.year} : { promotion.number } étudiants promus</Navbar.Brand>
			    <Nav className="mr-auto"></Nav>
			    <Nav className="hide-mobile">
			    	<Form inline onSubmit={e => e.preventDefault()}>
				      <FormControl type="text" placeholder="Rechercher" className="mr-sm-2" onChange={(e) => onChange(e.target.value)} />
				    </Form>
			    </Nav>
			  </Navbar>
			  <Form className="hide-pc" inline onSubmit={e => e.preventDefault()}>
		      <Container><FormControl type="text" placeholder="Rechercher" className="mr-sm-2" onChange={(e) => onChange(e.target.value)} /></Container>
		    </Form>
			  <h4 style={{ textAlign: 'center' }} >{promotion.description} </h4>
			  <hr style={{ width: '50%' }} />
			</>}
		</>
	);
}

export default PromotionDetailNavBar;