import styled from "styled-components";

export const Wrapper = styled.div`
   padding: 15px 0;
   height: 91px;
   position: fixed;
   right: 0;
   left: 0;
   overflow: hidden;
   display: block;
   z-index: 100;
   color: var(--white);
   font-family: "Josefin Sans";
`;
export const InnerWrapper = styled.div`
   display: flex;
   justify-content: center;
   height: 100%;
`;
export const Content = styled.div`
   display: flex;
   justify-content: space-between;
   width: 60%;
   font-weight: 600;
   font-size: 18px;
   #logo {
      width: 140px;
      margin: 0;
      display: flex;
      align-items: center;
      p {
         margin: 0;
      }
   }
   #menu {
      margin-right: 35px !important;
      margin-left: auto !important;
      width: 35%;
      list-style: none;
      display: flex;
      padding: 0;
      margin: 0;
      justify-content: space-between;
      align-items: center;
      li {
         display: list-item;
         /* position: relative; */
         padding: 5px;
         margin: 0 12px;
         width: auto;
         p {
            margin: 0;
         }
      }
   }
   #auth {
      width: 25%;
      display: flex;
      /* justify-content: center; */
      p {
         display: flex;
         justify-content: center;
         align-items: center;
         width: 50%;
      }
   }
   @media screen and (max-width: 1400px) {
      width: 85%;
   }
   @media screen and (max-width: 991px) and (max-width: 1199px) {
      width: 95%;
      font-weight: 500;
      font-size: 14px;
   }
`;
