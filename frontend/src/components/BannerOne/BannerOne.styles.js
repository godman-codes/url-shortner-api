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
   bottom: 140px;
   height: 800px;
   .banner-bottom {
      position: absolute;
      left: 0;
      right: 0;
      z-index: -2;
      bottom: -11px;
      img {
         width: 100%;
      }
   }
   .rotate-1 {
      position: absolute;
      top: 32%;
      right: calc(50% + 620px);
      /* img {
         animation: rotate2 15s alternate infinite;
      }
      @keyframes rotate2 {
         100% {
            transform: rotate(360deg);
         }
      } */
   }
   .rotate-2 {
      position: absolute;
      top: 32%;
      left: calc(50% + 620px);
      /* img {
         animation: rotate2 15s alternate infinite;
      }
      @keyframes rotate2 {
         100% {
            transform: rotate(360deg);
         }
      } */
   }
`;
