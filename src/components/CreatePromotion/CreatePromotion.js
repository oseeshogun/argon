import React, { useRef } from "react";
import { useHistory } from 'react-router-dom';
import "./style.css";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";
import { usePromotions } from "../../contexts/PromotionsContext";

function CreatePromotion(props) {
  const { promotions, addPromotion } = usePromotions();
  const history = useHistory();
  const promotionYear = useRef();
  const promotionStudents = useRef();
  const promotionDesc = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const year = promotionYear.current.value;
    const number = promotionStudents.current.value;
    const description = promotionDesc.current.value;
    addPromotion({ year, number, description });
    history.push(process.env.PUBLIC_URL +  "/promotions/");
  };

  return (
    <div id="main-create-promotion">
      <Container style={{ height: "100%" }}>
        <Row style={{ height: "100%" }}>
          <Col lg="5">
            <Container className="center-content">
              <Form onSubmit={onSubmit}>
                <div className="tabulation">
                  <Container>
                    <h4
                      className="mt-4"
                      style={{
                        lineHeight: "1.42857",
                        textAlign: "center",
                        color: "#3685F7",
                        fontWeight: "bold",
                      }}
                    >
                      Déscription de la promotion
                    </h4>
                    <InputGroup className="input-group-alternative mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-calendar-grid-58" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Année de la promotion"
                        type="text"
                        innerRef={promotionYear}
                        required
                      />
                    </InputGroup>
                    <InputGroup className="input-group-alternative mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Nombre d'étudiant"
                        type="text"
                        innerRef={promotionStudents}
                        required
                      />
                    </InputGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className="form-control-alternative"
                        cols="80"
                        name="name"
                        placeholder="Décrivez cette promotion..."
                        rows="4"
                        type="textarea"
                        innerRef={promotionDesc}
                        required
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round mb-4"
                        color="default"
                        size="lg"
                        type="submit"
                      >
                        Créer la promotion
                      </Button>
                    </div>
                  </Container>
                </div>
              </Form>
            </Container>
          </Col>
          <Col lg="7" >
            <Container className="center-content">
              <p
                style={{
                  display: "block",
                  marginBottom: "30px",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                {promotions.length === 0 ? (
                  <>
                    Aucune promotion n'a été crée
                  </>
                ) : (
                  promotions.length === 1 ? (
                    <>
                      Déjà une promotion
                    </>
                  ) : (
                    <>
                      Déjà{" "}
                      <span style={{ color: "green" }} class="fh5co-site-name">
                        {promotions.length}
                      </span>{" "}
                      promotions
                    </>
                  )
                )

                }
                
              </p>
              <h2
                style={{
                  color: "#fff",
                  fontSize: "60px",
                  marginBottom: "10px",
                  fontWeight: "400",
                }}
                className="hide-mobile"
              >
                Créer une nouvelle promotion
              </h2>
              <h3 style={{ color: "#fff" }}>
                Chaque promotion a besoin de sauvegarder ses moments incroyables
                !
              </h3>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreatePromotion;
