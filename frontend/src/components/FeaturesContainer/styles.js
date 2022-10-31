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
      display: none !important;
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
      display: none !important;
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
   @media (min-width: 576px) {
      max-width: 540px;
   }
   @media (min-width: 768px) {
      max-width: 720px;
   }
   @media (min-width: 992px) {
      max-width: 960px;
   }
   @media (min-width: 1200px) {
      max-width: 1140px;
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
   .tab .tab-menu {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px 20px;
      justify-content: center;
      @media (min-width: 768px) {
         margin-bottom: 32px;
         justify-content: space-between;
      }
      li {
         padding: 0 10px;
         margin-bottom: 25px;
         width: calc(100% / 5);
         text-align: center;
         flex-grow: 1;
         cursor: pointer;
         @media (max-width: 575px) {
            width: auto;
            max-width: calc(100% / 2);
         }
         @media (max-width: 767px) {
            width: auto;
            max-width: calc(100% / 3);
         }
         .thumb {
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 5px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
            @media (min-width: 992px) {
               width: 100px;
               height: 100px;
            }
            img {
               width: 100%;
               border-radius: 50%;
            }
         }
         .content {
            font-size: 16px;
            line-height: 1.2;
            color: var(--white);
            font-weight: 400;
            @media (min-width: 992px) {
               font-size: 18px;
            }
         }
      }
   }
   .tab .tab-area .tab-item {
      display: none;
      animation-name: fadeInUp;
      -webkit-animation-name: fadeInUp;
      -moz-animation-name: fadeInUp;
      animation-duration: 1s;
      -webkit-animation-duration: 1s;
      -moz-animation-duration: 1s;

      .feature-item {
         background: #ffffff;
         text-align: center;
         padding: 40px 15px 40px;
         border-radius: 20px;
         box-shadow: 0px 8px 21px 0px rgb(112 107 248 / 20%);
         position: relative;
         margin-bottom: 10px;
         ::before {
            left: -10px;
            position: absolute;
            content: "";
            bottom: -10px;
            right: -10px;
            top: 10px;
            border-radius: 20px;
            background-color: white;
            opacity: 0.502;
            box-shadow: 0px 8px 21px 0px rgba(112, 107, 248, 0.2);
            @media (min-width: 576px) {
               left: -20px;
               bottom: -20px;
               right: -20px;
               top: 20px;
            }
         }
         @media (min-width: 768px) {
            padding: 75px 30px 90px;
            max-width: 880px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 20px;
         }
         .title {
            margin-bottom: 15px;
            @media (min-width: 768px) {
               margin-bottom: 21px;
            }
         }
         p {
            font-size: 18px;
            line-height: 1.6;
            max-width: 660px;
            margin-left: auto;
            margin-right: auto;
         }
         * {
            position: relative;
            z-index: 1;
         }
      }
   }
   .active {
      display: block !important;
   }
`;
