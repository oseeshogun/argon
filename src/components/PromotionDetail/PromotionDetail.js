import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { usePromotions } from '../../contexts/PromotionsContext.js';
import PromotionDetailNavBar from './components/PromotionDetailNavBar.js';
import student from '../../assets/img/theme/team-4-800x800.jpg';
import names from './names.js';

function PromotionDetail({ match }) {
	const { promotions } = usePromotions();
	const [search, setSearch] = useState('');

	const promotion = promotions.find(p => p.year === match.params.year);

	const items = useMemo(() => {
		const elements = [];
		for (var i = 0; i < promotion.number; i++){
			const [firstName, lastName] = [names[Math.floor(Math.random() * names.length)], names[Math.floor(Math.random() * names.length)]];
			elements.push({name: firstName + ' ' + lastName})
		}
		return elements;
	}, [promotion]);

	return (
		<>
			<PromotionDetailNavBar promotion={promotion} onChange={setSearch} />
			<Container>
				<Row>
					{items.filter(i => i.name.toLowerCase().includes(search.toLowerCase())).map(item => (
								<Col style={{ marginBottom: "10px" }} >
									<Card style={{ width: '18rem' }}>
							  		<Card.Img variant="top" src={student} />
									  <Card.Body>
									    <Card.Title>{item.name}</Card.Title>
									    <Card.Text>
									      Some quick example text to build on the card title and make up the bulk of
									      the card's content.
									    </Card.Text>
									    <Link
									     to={process.env.PUBLIC_URL + "/student/" + promotion.year + '/' + item.name}>
									    	<Button variant="primary">Voir plus</Button>
									    </Link>
									  </Card.Body>
									</Card>
								</Col>
							)
						)
					}
				</Row>
			</Container>
		</>
	);
}

export default PromotionDetail;