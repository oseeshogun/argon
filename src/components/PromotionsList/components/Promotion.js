import React from "react";
import { Link } from 'react-router-dom';
import image from "../../../assets/img/theme/boxblur.jpg";
import image0 from "../../../assets/img/theme/promotions/image_0.jpg";
import image1 from "../../../assets/img/theme/promotions/image_1.jpg";
import image2 from "../../../assets/img/theme/promotions/image_2.jpg";
import image3 from "../../../assets/img/theme/promotions/image_3.jpg";
import image4 from "../../../assets/img/theme/promotions/image_4.jpg";
import image5 from "../../../assets/img/theme/promotions/image_5.jpg";
import "./style.css";


function Promotion({ promotion, index }) {
  console.log("Promotion ", promotion);

  const images = [image, image0, image1, image2, image3, image4, image5];

  return (
    <Link to={process.env.PUBLIC_URL +  "/promotion/" + promotion.year}>
      <div className="grid-item p-1">
        <figure className="effect-sadie">
          <img
            src={images[index % images.length]}
            style={{ height: "auto", width: "300px" }}
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
