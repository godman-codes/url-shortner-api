import React from "react";
import { Wrapper, Content } from "./styles";
import TopShape from "../../images/top-shape.png";
import BottomShape from "../../images/bottom-shape.png";
import featureIcon1 from "../../images/01f.png";
import featureIcon2 from "../../images/02f.png";
import featureIcon3 from "../../images/03f.png";
import featureIcon4 from "../../images/04f.png";
import featureIcon5 from "../../images/05f.png";

const FeaturesContainer = () => {
   return (
      <Wrapper>
         <div className="top-shape">
            <img src={TopShape} alt="css" />
         </div>
         <div className="bottom-shape">
            <img src={BottomShape} alt="css" />
         </div>
         <Content>
            <div className="section-header">
               <h2 className="title">All Features</h2>
               <p>
                  Mosto has plans, from free to paid, that scale with your
                  needs. Subscribe to a plan that fits the size of your
                  business.
               </p>
            </div>
            <div className="tab">
               <ul className="tab-menu">
                  <li>
                     <div className="thumb">
                        <img src={featureIcon1} alt="" />
                     </div>
                     <div className="content">%99 Uptime</div>
                  </li>
                  <li>
                     <div className="thumb">
                        <img src={featureIcon2} alt="" />
                     </div>
                     <div className="content">Easy Dashboard</div>
                  </li>
                  <li>
                     <div className="thumb">
                        <img src={featureIcon3} alt="" />
                     </div>
                     <div className="content">Referral Program</div>
                  </li>
                  <li>
                     <div className="thumb">
                        <img src={featureIcon4} alt="" />
                     </div>
                     <div className="content">1CLICK Script Installs</div>
                  </li>
                  <li>
                     <div className="thumb">
                        <img src={featureIcon5} alt="" />
                     </div>
                     <div className="content">Support</div>
                  </li>
               </ul>
            </div>
         </Content>
      </Wrapper>
   );
};

export default FeaturesContainer;
