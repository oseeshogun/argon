import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { usePromotions } from '../../contexts/PromotionsContext.js';
import PromotionDetailNavBar from './components/PromotionDetailNavBar.js';
import student from '../../assets/img/theme/team-4-800x800.jpg';

function PromotionDetail({ match }) {
	const { promotions } = usePromotions();

	const promotion = promotions.find(p => p.year === match.params.year);

	const items = [];

	for (var i = 0; i < promotion.number; i++){
		items.push(
			<Col style={{ marginBottom: "10px" }} >
				<Card style={{ width: '18rem' }}>
		  		<Card.Img variant="top" src={student} />
				  <Card.Body>
				    <Card.Title>Card Title</Card.Title>
				    <Card.Text>
				      Some quick example text to build on the card title and make up the bulk of
				      the card's content.
				    </Card.Text>
				    <Button variant="primary">Go somewhere</Button>
				  </Card.Body>
				</Card>
			</Col>
		)
	}

	return (
		<>
			<PromotionDetailNavBar promotion={promotion} />
			<Container>
				<Row>
					{items}
				</Row>
			</Container>
		</>
	);
}

export default PromotionDetail;