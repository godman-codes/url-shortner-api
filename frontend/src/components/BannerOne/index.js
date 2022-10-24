import React from "react";
import { Wrapper } from "./BannerOne.styles";
import BannerOneBottom from "../../images/banner-shape.png";
const BannerOne = () => {
   return (
      <Wrapper>
         <div>
            <img src={BannerOneBottom} alt="Banner" />
         </div>
      </Wrapper>
   );
};

export default BannerOne;
