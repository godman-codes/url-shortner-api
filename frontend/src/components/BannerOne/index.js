import React from "react";
import { Wrapper } from "./BannerOne.styles";
import BannerOneBottom from "../../images/banner-shape.png";
import rotateOne from "../../images/01.png";
import rotateTwo from "../../images/02.png";
const BannerOne = () => {
   return (
      <Wrapper>
         <div className="banner-bottom">
            <img src={BannerOneBottom} alt="Banner" />
         </div>
         <div className="rotate-1">
            <img src={rotateOne} alt="rotate" />
         </div>
         <div className="rotate-2">
            <img src={rotateTwo} alt="rotate-two" />
         </div>
      </Wrapper>
   );
};

export default BannerOne;
