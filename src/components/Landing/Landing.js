import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import DemoNavBar from "./components/DemoNavBar.js";

function Landing(props) {
  const [emailFocused, setEmailFocused] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const main = useRef();

  return (
    <>
      <DemoNavBar />
      <main ref={main}>
        <div className="position-relative">
          {/* shape Hero */}
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-white">
                      Une histoire inoubliable{" "}
                      <span>partagée par des milliers des personnes.</span>
                    </h1>
                    <p className="lead text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum, inventore? Animi, aliquam debitis omnis fuga rerum
                      saepe eum provident quia iusto necessitatibus nesciunt?
                      Sapiente quam eius et voluptate consequatur maiores.
                    </p>
                    <div className="btn-wrapper">
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="info"
                        href={process.env.PUBLIC_URL +  "/createpromotion/"}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-plus" />
                        </span>
                        <span className="btn-inner--text">
                          Créer une promotion
                        </span>
                      </Button>
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href={process.env.PUBLIC_URL +  "/signup/"}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-user-plus" />
                        </span>
                        <span className="btn-inner--text">S'enegistrer</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          {/* 1st Hero Variation */}
        </div>
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <h6 className="text-primary text-uppercase">
                          Les souvenirs qui marquent
                        </h6>
                        <p className="description mt-3">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Quidem eaque recusandae, minima molestias animi
                          natus mollitia, culpa neque totam molestiae fuga
                          aspernatur voluptatibus quasi alias.
                        </p>
                        <div>
                          <Badge color="primary" pill className="mr-1">
                            amis
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            collègue
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            famille
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="primary"
                          href={process.env.PUBLIC_URL +  "/promotions/"}
                        >
                          Explorer
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                          <i className="ni ni-istanbul" />
                        </div>
                        <h6 className="text-success text-uppercase">
                          Chaque promotion est spéciale
                        </h6>
                        <p className="description mt-3">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Quidem eaque recusandae, minima molestias animi
                          natus mollitia, culpa neque totam molestiae fuga
                          aspernatur voluptatibus quasi alias.
                        </p>
                        <div>
                          <Badge color="success" pill className="mr-1">
                            amour
                          </Badge>
                          <Badge color="success" pill className="mr-1">
                            loyauté
                          </Badge>
                          <Badge color="success" pill className="mr-1">
                            honneur
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="success"
                          href={process.env.PUBLIC_URL +  "/promotions/"}
                        >
                          Explorer
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-planet" />
                        </div>
                        <h6 className="text-warning text-uppercase">
                          des personnes magiques
                        </h6>
                        <p className="description mt-3">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Quidem eaque recusandae, minima molestias animi
                          natus mollitia, culpa neque totam molestiae fuga
                          aspernatur voluptatibus quasi alias.
                        </p>
                        <div>
                          <Badge color="warning" pill className="mr-1">
                            union
                          </Badge>
                          <Badge color="warning" pill className="mr-1">
                            équipe
                          </Badge>
                          <Badge color="warning" pill className="mr-1">
                            progrès
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="warning"
                          href={process.env.PUBLIC_URL +  "/promotions/"}
                        >
                          Explorer
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="6">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("../../assets/img/theme/promo-1.png")}
                />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                    <i className="ni ni-settings-gear-65" />
                  </div>
                  <h3>Des personnes mémorables</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quidem eaque recusandae, minima molestias animi natus
                    mollitia, culpa neque totam molestiae fuga aspernatur
                    voluptatibus quasi alias.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-settings-gear-65" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Lorem ipsum dolor sit.</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="fa fa-heart" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Lorem ipsum dolor sit.</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-satisfied" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Des souvenirs eternels.</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section bg-secondary">
          <Container>
            <Row className="row-grid align-items-center">
              <Col md="6">
                <Card className="bg-default shadow border-0">
                  <CardImg
                    alt="..."
                    src={require("../../assets/img/theme/nqobile-vundla-zOt6a59k2BE-unsplash.jpg")}
                    top
                  />
                  <blockquote className="card-blockquote">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-bg"
                      preserveAspectRatio="none"
                      viewBox="0 0 583 95"
                    >
                      <polygon
                        className="fill-default"
                        points="0,52 583,95 0,95"
                      />
                      <polygon
                        className="fill-default"
                        opacity=".2"
                        points="0,42 583,95 683,0 0,95"
                      />
                    </svg>
                    <h4 className="display-3 font-weight-bold text-white">
                      Des moments inoubliables
                    </h4>
                    <p className="lead text-italic text-white">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem eaque recusandae, minima molestias animi natus
                      mollitia, culpa neque totam molestiae fuga aspernatur
                      voluptatibus quasi alias.
                    </p>
                  </blockquote>
                </Card>
              </Col>
              <Col md="6">
                <div className="pl-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                    <i className="fa fa-gift" />
                  </div>
                  <h3>Un passé unique</h3>
                  <p className="lead">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quidem eaque recusandae, minima molestias animi natus
                    mollitia, culpa neque totam molestiae fuga aspernatur
                    voluptatibus quasi alias.
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quidem eaque recusandae, minima molestias animi natus
                    mollitia, culpa neque totam molestiae fuga aspernatur
                    voluptatibus quasi alias.
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quidem eaque recusandae, minima molestias animi natus
                    mollitia, culpa neque totam molestiae fuga aspernatur
                    voluptatibus quasi alias.
                  </p>
                  <a
                    className="font-weight-bold text-warning mt-5"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Lorem ipsum dolor sit amet.
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section pb-0 bg-gradient-warning">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-lg-2 ml-lg-auto" md="6">
                <div className="position-relative pl-md-5">
                  <img
                    alt="..."
                    className="img-center img-fluid"
                    src={require("../../assets/img/ill/undraw_people_tax5.svg")}
                  />
                </div>
              </Col>
              <Col className="order-lg-1" lg="6">
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-building text-primary" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h4 className="display-3 text-white">
                      Construire le futur
                    </h4>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius animi assumenda nihil quas minus!
                    </p>
                  </div>
                </div>
                <Card className="shadow shadow-lg--hover mt-5">
                  <CardBody>
                    <div className="d-flex px-3">
                      <div>
                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                          <i className="ni ni-satisfied" />
                        </div>
                      </div>
                      <div className="pl-4">
                        <h5 className="title text-success">
                          Des amis merveilleux
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eius animi assumenda nihil quas minus!
                        </p>
                        <Link
                          className="text-success"
                          href={process.env.PUBLIC_URL +  "/promotions/"}
                          onClick={(e) => e.preventDefault()}
                        >
                          Explorer
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="shadow shadow-lg--hover mt-5">
                  <CardBody>
                    <div className="d-flex px-3">
                      <div>
                        <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                          <i className="ni ni-active-40" />
                        </div>
                      </div>
                      <div className="pl-4">
                        <h5 className="title text-warning">
                          Un passé historique
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eius animi assumenda nihil quas minus!
                        </p>
                        <Link
                          className="text-warning"
                          to={process.env.PUBLIC_URL +  "/createpromotion/"}
                        >
                          Créer une promotion
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        <section className="section section-lg">
          <Container></Container>
        </section>
        <section className="section section-lg pt-0">
          <Container>
            <Card className="bg-gradient-warning shadow-lg border-0">
              <div className="p-5">
                <Row className="align-items-center">
                  <Col lg="8">
                    <h3 className="text-white">Garder votre profil à jour</h3>
                    <p className="lead text-white mt-3">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Omnis sequi quas provident rerum facilis pariatur
                      consequatur ea, dolorem nam ratione!
                    </p>
                  </Col>
                  <Col className="ml-lg-auto" lg="3">
                    <Button
                      block
                      className="btn-white"
                      color="default"
                      href="/#"
                      size="lg"
                    >
                      Se connecter
                    </Button>
                  </Col>
                </Row>
              </div>
            </Card>
          </Container>
        </section>
        <section className="section section-lg bg-gradient-default">
          <Container className="pt-lg pb-300"></Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        <section className="section section-lg pt-lg-0 section-contact-us">
          <Container>
            <Row className="justify-content-center mt--300">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Voulez-vous nous contactez ?</h4>
                    <p className="mt-0">Laissez-nous un message.</p>
                    <FormGroup
                      className={classnames("mt-5", {
                        focused: nameFocused,
                      })}
                    >
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Votre nom"
                          type="text"
                          onFocus={(e) => setNameFocused(true)}
                          onBlur={(e) => setNameFocused(false)}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup
                      className={classnames({
                        focused: emailFocused,
                      })}
                    >
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Votre email"
                          type="email"
                          onFocus={(e) => setEmailFocused(true)}
                          onBlur={(e) => setEmailFocused(false)}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className="form-control-alternative"
                        cols="80"
                        name="name"
                        placeholder="Ecrivez votre message..."
                        rows="4"
                        type="textarea"
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="button"
                      >
                        Envoyez le message
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Landing;
