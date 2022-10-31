import styled from "styled-components";

export const Wrapper = styled.div`
   padding-bottom: 80px;
   padding-top: 80px;
   background: var(--ash-white);
   text-align: center !important;
   @media (min-width: 768px) {
      padding-bottom: 100px;
      padding-top: 100px;
   }
   @media (min-width: 992px) {
      padding-bottom: 120px;
      padding-top: 120px;
   }
`;
export const Content = styled.div`
   .section-header {
      max-width: 635px px;
      margin: 0 auto 40px;
      text-align: center;
      @media (min-width: 768px) {
         margin-bottom: 65px;
      }
      .cate {
         display: block;
         color: var(--light_purple);
         margin-bottom: 15px;
         @media (min-width: 768px) {
            margin-bottom: 24px;
            font-size: 24px;
            font-weight: 600;
         }
      }
      .title {
         margin-bottom: 20px;
         @media (min-width: 768px) {
            margin-bottom: 18px;
         }
      }
   }
   a {
      color: #ffffff;
      border: 1px solid #ee4730;
      -webkit-border-radius: 30px;
      -moz-border-radius: 30px;
      border-radius: 30px;
      font-weight: 600;
      text-transform: uppercase;
      padding: 18px 35px 13px;
      text-decoration: none;
      font-size: 18px;
      background: var(--button_gradient);
      box-shadow: 0px 19px 56px 0px rgb(0 0 0 / 20%);
      font-family: "Josefin Sans Regular";
   }
`;
