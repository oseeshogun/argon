import React from "react";
import { Link } from 'react-router-dom';
import image from "../../../assets/img/theme/boxblur.jpg";
import "./style.css";

function Promotion({ promotion }) {
  console.log("Promotion ", promotion);
  return (
    <Link to={process.env.PUBLIC_URL +  "/promotion/" + promotion.year}>
      <div className="grid-item p-1">
        <figure className="effect-sadie">
          <img
            src={image}
            style={{ height: "auto", width: "auto" }}
            alt={promotion.year}
            className="img-fluid tm-img"
          />
          <figcaption>
            <h2 className="tm-figure-title">
              <span>
                <strong>{promotion.year}</strong>
              </span>
            </h2>
            <p className="tm-figure-description" style={{ fontSize: "14px",  }} >{promotion.description}</p>
          </figcaption>
        </figure>
      </div>
    </Link>
  );
}

export default Promotion;
