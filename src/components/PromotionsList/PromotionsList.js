import React, { useRef } from "react";
import DemoNavBar from "../Landing/components/DemoNavBar";
import "./style.css";
import Promotion from "./components/Promotion";
import { usePromotions } from "../../contexts/PromotionsContext";

function PromotionsList(props) {
  const main = useRef();
  const { promotions } = usePromotions();

  return (
    <div id="promotions-list">
      <DemoNavBar hideGetStarted={true} />
      <main ref={main}>
        <section className="section section-lg section-shaped pb-250 ml-4 mr-4">
          <div
            class="container-fluid js-tm-page-content"
            data-page-no="1"
            data-page-type="gallery"
          >
            <div className="tm-img-gallery-container">
              <div className="tm-img-gallery gallery-one">
                {promotions.map((promotion) => (
                  <Promotion promotion={promotion} key={promotion.year} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PromotionsList;
