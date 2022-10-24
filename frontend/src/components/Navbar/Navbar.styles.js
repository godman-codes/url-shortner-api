import styled from "styled-components";

export const Wrapper = styled.div`
   padding: 15px 0;
   height: 91px;
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
      margin-right: 30px !important;
      margin-left: auto !important;
      width: 35%;
      list-style: none;
      display: flex;
      padding: 0;
      margin: 0;
      justify-content: space-between;
      align-items: center;
      font-weight: bolder;
      li {
         display: list-item;
         /* position: relative; */
         padding: 5px;
         margin: 0 12px;
         width: auto;
         p {
            margin: 0;
            font-size: larger;
         }
      }
   }
   #auth {
      width: 25%;
      display: flex;
      font-size: larger;
      font-weight: bolder;
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
   @media screen and (max-width: 1400px) {
      width: 95%;
   }
`;
