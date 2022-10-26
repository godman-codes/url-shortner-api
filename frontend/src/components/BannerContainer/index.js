import React from "react";
import { Wrapper, Content } from "./BannerContainer.styles";

const BannerContainer = () => {
   return (
      <Wrapper>
         <Content>
            <div className="top-message">
               <h2>SHORTEN URLS AND</h2>
               <h1>EARN MONEY</h1>
               <p>
                  Transforming long, ugly links into Shorten URLs and earn big
                  money. Get paid by every person who visits your URLs.
               </p>
            </div>
         </Content>
      </Wrapper>
   );
};

export default BannerContainer;
