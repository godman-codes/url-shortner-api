import styled from "styled-components";
import FeatureBg from "../../images/feature-bg.jpg";

export const Wrapper = styled.div`
   background-image: url(${FeatureBg});
   position: relative;
   overflow: hidden;
   background-size: cover;
   background-position: center center;
   background-repeat: no-repeat;
   padding: 80px 0;
   @media (min-width: 768px) {
      padding-bottom: 100px;
      padding-top: 100px;
   }
   @media (min-width: 992px) {
      padding-bottom: 60px !important;
      padding-top: 120px;
   }
   .top-shape {
      top: -3px;
      position: absolute;
      z-index: 1;
      width: 102%;
      left: 50%;
      transform: translateX(-50%);
      @media (min-width: 768px) {
         display: block !important;
      }
      @media (max-width: 1199px) {
         min-width: 1400px;
      }
      img {
         width: 100%;
      }
   }
   .bottom-shape {
      position: absolute;
      z-index: 1;
      width: 102%;
      left: 50%;
      bottom: -2px;
      transform: translateX(-50%);
      @media (min-width: 768px) {
         display: block !important;
      }
      @media (max-width: 1199px) {
         min-width: 0;
         /* min-width: 1400px; */
      }
      img {
         width: 100%;
      }
   }
`;
export const Content = styled.div`
   position: relative;
   z-index: 1;
   width: 100%;
   padding-right: 15px;
   padding-left: 15px;
   margin-right: auto;
   margin-left: auto;
   @media (min-width: 768px) {
      max-width: 720px;
   }
   @media (min-width: 992px) {
      max-width: 960px;
   }
   @media (min-width: 576px) {
      max-width: 540px;
   }
   .section-header {
      max-width: 635px;
      margin: 0 auto 40px;
      text-align: center;
      color: var(--white);
      @media (min-width: 768px) {
         margin-bottom: 65px;
      }
      .title {
         margin-bottom: 20px;
         color: var(--white);
         @media (min-width: 768px) {
            margin-bottom: 18px;
            margin-top: 0 !important;
         }
      }
   }
`;
