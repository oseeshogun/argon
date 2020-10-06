import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import './global.css';
// JavaScript plugin that hides or shows a component based on your scroll
// import Headroom from "headroom.js";

import argonReactWhite from '../../../assets/img/brand/argon-react-white.png';
import argonReact from '../../../assets/img/brand/argon-react.png';
import { usePromotions } from '../../../contexts/PromotionsContext.js';

function NavBar({ hideGetStarted }) {
    // const [collapseOpen, setCollapseOpen] = useState(false);
    const [collapseClasses, setCollapseClasses] = useState("");

    const { currentUser } = usePromotions();

    const onExiting = () => {
        setCollapseClasses("collapsing-out");
      };
    
    const   onExited = () => {
        setCollapseClasses("");

      };

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to={process.env.PUBLIC_URL +  "/"} tag={Link}>
              <img
                alt="..."
                src={argonReactWhite}
              />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to={process.env.PUBLIC_URL +  "/"}>
                      <img
                        alt="..."
                        src={argonReact}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Commencer</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-xl">
                    <div className="dropdown-menu-inner">
                      <Link
                        className="d-flex align-items-center"
                        to={process.env.PUBLIC_URL +  "/createpromotion/"}
                      >
                        <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                          <i className="ni ni-spaceship" />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            Créer une promotion
                          </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            Ajouter une nouvelle promotion dans la collection de l'université.
                          </p>
                        </Media>
                      </Link>
                      <Link
                        className="d-flex align-items-center"
                        to={process.env.PUBLIC_URL +  "/promotions/"}
                      >
                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                          <i className="ni ni-palette" />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            Exploration
                          </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            Explorer une promotion et voir vos amis du temps universitaires.
                          </p>
                        </Media>
                      </Link>
                      <Link
                        className="d-flex align-items-center"
                        to={process.env.PUBLIC_URL +  "/profil/"}
                      >
                        <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                          <i className="ni ni-ui-04" />
                        </div>
                        <Media body className="ml-3">
                          <h5 className="heading text-warning mb-md-1">
                            Profil
                          </h5>
                          <p className="description d-none d-md-inline-block mb-0">
                            Connctez-vous à votre compte pour modifier votre profil.
                          </p>
                        </Media>
                      </Link>
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
               
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.facebook.com/"
                    id="tooltip333589074"
                    target="_blank"
                  >
                    <i className="fa fa-facebook-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Facebook
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip333589074">
                    Aimez-nous sur Facebook
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.instagram.com/"
                    id="tooltip356693867"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Instagram
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip356693867">
                    Suivez-nous sur Instagram
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://twitter.com/"
                    id="tooltip184698705"
                    target="_blank"
                  >
                    <i className="fa fa-twitter-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Twitter
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip184698705">
                    Suivez-nous sur Twitter
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem className="d-none d-lg-block ml-lg-4">
                  <Link to={process.env.PUBLIC_URL +  "/signin/"}>
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                    >
                      <span className="btn-inner--icon">
                        <i className={!currentUser ? 'fa fa-sign-in mr-2'  : 'fa fa-user mr-2'} />
                      </span>
                      <span className="nav-link-inner--text ml-1">{!currentUser ? 'Se connecter' : currentUser.pseudo }</span>
                    </Button>
                  </Link>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default NavBar;
