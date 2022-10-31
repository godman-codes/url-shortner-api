import React from "react";
import { Wrapper, Content } from "./styles";
// import Prev from "../../images/right.png";
// import Next from "../../images/left.png";

const Testimonial = () => {
   return (
      <Wrapper>
         <Content className="container">
            {/* <div className="con-row">
               <div className="con-col-1">
                  <div className="test-wrapper">
                     <a href="#0" className="testi-next trigger">
                        <img src={Prev} alt="client" />
                     </a>
                     <a href="#0" className="testi-prev trigger">
                        <img src={Next} alt="client" />
                     </a>
                  </div>
                  <div className="test-area">
                     <div className="owl-stage-outer">
                        <div className="owl-stage"></div>
                     </div>
                  </div>
               </div>
               <div className="con-col-2"></div>
            </div> */}
         </Content>
      </Wrapper>
   );
};

export default Testimonial;
