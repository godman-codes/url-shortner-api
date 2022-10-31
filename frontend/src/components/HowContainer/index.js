import React from "react";
import { Wrapper, Content } from "./styles";

const HowContainer = () => {
   return (
      <Wrapper>
         <Content className="container">
            <div className="section-header">
               <h2 className="title">How to start</h2>
            </div>
            <div className="section-row">
               <div className="section-row-item">
                  <div className="how-item">
                     <div className="how-thumb">
                        <img src="" alt="" />
                     </div>
                     <div className="how-content">
                        <h6 className="title">CREATE AN ACCOUNT</h6>
                     </div>
                  </div>
               </div>
               <div className="section-row-item">
                  <div className="how-item">
                     <div className="how-thumb">
                        <img src="" alt="" />
                     </div>
                     <div className="how-content">
                        <h6 className="title">SHORTEN YOUR LINK</h6>
                     </div>
                  </div>
               </div>
               <div className="section-row-item">
                  <div className="how-item">
                     <div className="how-thumb">
                        <img src="" alt="" />
                     </div>
                     <div className="how-content">
                        <h6 className="title">EARN MONEY</h6>
                     </div>
                  </div>
               </div>
            </div>
         </Content>
      </Wrapper>
   );
};

export default HowContainer;
