import React from "react";
import { Wrapper, Content } from "./styles";
import { Link } from "react-router-dom";

const CallInAction = () => {
   return (
      <Wrapper>
         <Content className="container">
            <div className="section-header">
               <h5 className="cate">JOIN IS NOW</h5>
               <h2 className="title">Boost Your Earnings</h2>
               <p>
                  Sign up for free and become one of the millions of people
                  around the world who have fallen in love with Cortaly
               </p>
            </div>
            <Link to="#0" className="Custom-button">
               Start earning now
            </Link>
         </Content>
      </Wrapper>
   );
};

export default CallInAction;
