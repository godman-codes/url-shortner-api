import styled from "styled-components";

export const Wrapper = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   border: 2px solid red;
`;
export const Content = styled.div`
   width: 60%;
   border: 2px solid yellow;
   .top-message {
      h2 {
         font-family: "Josefin Sans Regular";
         line-height: 46px;
         display: flex;
         justify-content: center;
         color: var(--sky_blue);
         font-size: 36px;
      }
      h1 {
         font-family: "Josefin Sans Regular";
         line-height: 46px;
         display: flex;
         justify-content: center;
         font-size: 110px;
         color: var(--white);
      }
      p {
         font-family: "Josefin Sans Regular";
         display: flex;
         text-align: center;
         justify-content: center;
         align-items: center;
         color: var(--white);
         font-weight: normal;
         font-size: 21px;
         padding: 0 235px;
         line-height: 30px;
      }
   }
`;
