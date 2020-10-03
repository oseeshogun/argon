import React from 'react';
import PromotionDetailNavBar from './PromotionDetailNavBar.js';
import { Row, Col, Grid } from 'react-bootstrap';
import studentImage from '../../../assets/img/theme/team-4-800x800.jpg';

function StudentDetail({ match, location }){
	const name = match.params.name;
	const { promotion } = location.state;

	return (
		<div>
			<PromotionDetailNavBar searchDisabled={true} />
			<
			div style={{ display: 'flex', justifyContent: 'center', itemsAlign: 'center', height: '100%', alignItems: 'center', marginTop: '60px' }}>
				<Row style={{ width: '100%' }}>
					<Col>
						<div style={{ margin: 'auto', display: 'flex', justifyContent: 'center', itemsAlign: 'center' }}>
							<img src={studentImage} alt="Student" style={{ width: '18rem' }} />
						</div>
					</Col>
					<Col>
						<h1>{name}</h1>
						<hr />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
						<h4>Promotion { promotion.year }</h4>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default StudentDetail;