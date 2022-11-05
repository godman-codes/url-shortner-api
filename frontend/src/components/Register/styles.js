import styled from "styled-components";
import AccountBg from "../../images/account-bg.jpg";

export const Wrapper = styled.div`
   background-image: url(${AccountBg});
   padding: 30px 0;
   min-height: 100vh;
   justify-content: center;
   display: flex;
   flex-wrap: wrap;
   background-size: cover;
   background-position: center center;
   background-repeat: no-repeat;
`;
export const Content = styled.div`
   .account-title {
      margin-bottom: 30px;
      position: relative;
      text-align: center !important;
      @media (max-width: 767px) {
         display: flex;
         align-items: center;
         justify-content: space-between;
      }
      @media (min-width: 768px) {
         margin-bottom: 80px;
      }
      .back-home {
         font-size: 18px;
         font-weight: 600;
         color: var(--white);
         text-align: left;
         display: inline-flex;
         align-items: center;
         @media (min-width: 768px) {
            position: absolute;
            left: 0;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
         }
      }
      .logo {
         @media (max-width: 767px) {
            display: block;
         }
         img {
            width: 50px;
            height: 50px;
            /* background-color: var(--white); */
            @media (max-width: 767px) {
               max-width: 100%;
            }
         }
         span {
            color: var(--white);
            font-size: 20px;
            font-weight: bold;
         }
      }
   }
   .account-title > * {
      @media (max-width: 767px) {
         max-width: 50%;
      }
   }
`;
