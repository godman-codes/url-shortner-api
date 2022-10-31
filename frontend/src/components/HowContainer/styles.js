import styled from "styled-components";

export const Wrapper = styled.div`
   padding-bottom: 80px;
   padding-top: 80px;
   @media (max-width: 991px) {
      padding-bottom: 0 !important;
   }
   @media (min-width: 768px) {
      padding-top: 50px;
      padding-bottom: 100px;
   }
   @media (min-width: 992px) {
      padding-top: 60px;
      padding-bottom: 120px;
   }
`;
export const Content = styled.div`
   .section-header {
      max-width: 635px;
      margin: 0 auto 40px;
      text-align: center;
      @media (min-width: 768px) {
         margin-bottom: 45px;
      }
      title {
         margin-bottom: 0 !important;
      }
   }
`;
