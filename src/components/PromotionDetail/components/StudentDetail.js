import React, { useState, useCallback  } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import ImageViewer from 'react-simple-image-viewer';
import PromotionDetailNavBar from './PromotionDetailNavBar.js';
import studentImage from '../../../assets/img/theme/team-4-800x800.jpg';
import { usePromotions } from '../../../contexts/PromotionsContext.js';
import im1 from	"../../../assets/img/gallery/element5-digital-jCIMcOpFHig-unsplash.jpg";
import im2 from	"../../../assets/img/gallery/honey-yanibel-minaya-cruz-laORtJZaieU-unsplash.jpg";
import im3 from	"../../../assets/img/gallery/javier-trueba-iQPr1XkF5F0-unsplash.jpg";
import im4 from	"../../../assets/img/gallery/kyle-gregory-devaras-6RTM8EsD1T8-unsplash.jpg";
import im5 from	"../../../assets/img/gallery/naassom-azevedo-Q_Sei-TqSlc-unsplash.jpg";
import im6 from	"../../../assets/img/gallery/neonbrand-zFSo6bnZJTw-unsplash.jpg";
import im7 from	"../../../assets/img/gallery/scott-webb-O0T1SIgHAfM-unsplash.jpg";
import im8 from	"../../../assets/img/gallery/windows-p74ndnYWRY4-unsplash.jpg";

const bgStyle = {
	minHeight: '100vh'
}
const imagesGallery = [
	im1,
	im2,
	im3,
	im4,
	im5,
	im6,
	im7,
	im8,
]

function StudentDetail({ match, location }){
	const name = match.params.name;
	const { promotions } = usePromotions();
	const promotion = promotions.find(p => p.year === match.params.year);

	const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

	const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

	return (
		<div style={bgStyle}>
			<PromotionDetailNavBar searchDisabled={true} />
			<div style={{ display: 'flex', justifyContent: 'center', itemsAlign: 'center', height: '100%', alignItems: 'center', marginTop: '60px' }}>
				<Row style={{ width: '100%' }}>
					<Col>
						<div style={{ margin: 'auto', display: 'flex', justifyContent: 'center', itemsAlign: 'center' }}>
							<img src={studentImage} alt="Student" style={{ width: '18rem' }} />
						</div>
					</Col>
					<Col>
						<Container>
							<h1>{name}</h1>
							<hr />
							<div>
								<h4>Description</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
							</div>
							<h4>Promotion { promotion.year }</h4>
						</Container>
					</Col>
					<Col lg='12' xs="12">
						<Container>
							<div>
								<h4>Parcours académique</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
							</div>
							<div>
								<h4>Centre d'interêt</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
							</div>
							<div>
								<h4>Gallerie</h4>
								<Row>
									{imagesGallery.map((gallery, index) => (
												<Col xs={6} md={3}>
										      <Image style={{ cursor: 'pointer' }} onClick={ () => openImageViewer(index) } src={gallery} key={index} thumbnail rounded />
										    </Col>
											)
										)
									}
								</Row>
							</div>
						</Container>
					</Col>
				</Row>
			</div>
			{isViewerOpen && (
        <ImageViewer
          src={ imagesGallery }
          currentIndex={ currentImage }
          onClose={ closeImageViewer }
        />
      )}
		</div>
	);
}

export default StudentDetail;