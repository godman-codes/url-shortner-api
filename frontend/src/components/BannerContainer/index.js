import React from "react";
import { Wrapper, Content } from "./BannerContainer.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const BannerContainer = () => {
   return (
      <Wrapper>
         <Content>
            <div className="top-message">
               <h3 className="cate">SHORTEN URLS AND</h3>
               <h1 className="title">EARN MONEY</h1>
               <p>
                  Transforming long, ugly links into Shorten URLs and earn big
                  money. Get paid by every person who visits your URLs.
               </p>
            </div>
            <div className="form-container">
               <h3 className="subtitle">Shorten URL Is Just Simple</h3>
               <form className="form-container-form">
                  <input type="text" placeholder="Your URL here" />
                  <button type="submit">
                     Shorten <FontAwesomeIcon icon={faRocket} />
                  </button>
               </form>
               <div className="banner-counter">
                  <div className="counter-item">
                     <h2 className="counter-title">
                        <span className="counter">1,200,000</span>+
                     </h2>
                     <p>Links clicked per day</p>
                  </div>
                  <div className="counter-item">
                     <h2 className="counter-title">
                        <span className="counter">348,000,000</span>+
                     </h2>
                     <p>Shortened links in total</p>
                  </div>
                  <div className="counter-item">
                     <h2 className="counter-title">
                        <span className="counter">1,180,000</span>+
                     </h2>
                     <p>Happy users registered</p>
                  </div>
               </div>
            </div>
         </Content>
      </Wrapper>
   );
};

export default BannerContainer;
