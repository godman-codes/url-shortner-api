import styled from "styled-components";
import BannerImg from "../../images/banner_1.jpg";

export const Wrapper = styled.div`
   background: url(${BannerImg});
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center center;
   overflow: hidden;
   z-index: -1;
   bottom: 175px;
   div {
      position: absolute;
      left: 0;
      right: 0;
      z-index: -2;
      bottom: -8px;
      img {
         width: 100%;
      }
   }
`;
