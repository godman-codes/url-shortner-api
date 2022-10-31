import React from "react";
import { Wrapper, Content } from "./styles";
import How1 from "../../images/how1.png";
import How2 from "../../images/how2.png";
import How3 from "../../images/how3.png";

// import Circle1 from "../../images/circle1.png";
// import Circle2 from "../../images/circle2.png";

const HowContainer = () => {
   return (
      <Wrapper>
         {/* <div className="ball-1">
            <img src={Circle2} alt="circle-2" />
         </div>
         <div className="ball-2">
            <img src={Circle1} alt="circle-1" />
         </div> */}
         <Content className="container">
            <div className="section-header">
               <h2 className="title">How to start</h2>
            </div>
            <div className="section-row">
               <div className="section-col">
                  <div className="how-item">
                     <div className="how-thumb">
                        <img src={How1} alt="how" />
                     </div>
                     <div className="how-content">
                        <h6 className="title">CREATE AN ACCOUNT</h6>
                     </div>
                  </div>
               </div>
               <div className="section-col">
                  <div className="how-item">
                     <div className="how-thumb">
                        <img src={How2} alt="how-2" />
                     </div>
                     <div className="how-content">
                        <h6 className="title">SHORTEN YOUR LINK</h6>
                     </div>
                  </div>
               </div>
               <div className="section-col">
                  <div className="how-item">
                     <div className="how-thumb">
                        <img src={How3} alt="how-3" />
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
