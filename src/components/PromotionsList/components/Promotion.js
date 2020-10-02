import React from "react";
import image from "../../../assets/img/theme/img-1-1200x1000.jpg";
import "./style.css";

function Promotion({ promotion }) {
  console.log("Promotion ", promotion);
  return (
    <div className="grid-item">
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
          <p className="tm-figure-description">{promotion.description}</p>
          <a href={image}>View more</a>
        </figcaption>
      </figure>
    </div>
  );
}

export default Promotion;
