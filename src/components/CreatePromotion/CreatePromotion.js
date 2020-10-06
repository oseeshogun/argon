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
import graduation from '../../assets/img/theme/tai-s-captures-0oa1jhDLevQ-unsplash2.jpg';

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
      <div id="create-promotion-content">
        <div id="left-section">
          <img src={graduation} alt="graduation"/>
        </div>
        <div id="right-section">
          <div class="card-body">
                    <h2 class="title text-center">Créer une promotion</h2>
                    <form onSubmit={onSubmit}>
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
                        <div class="p-t-30">
                            <button class="btn btn--radius btn--green" type="submit">Créer</button>
                        </div>
                    </form>
                </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePromotion;
