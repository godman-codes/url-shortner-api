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
   /* .ball-1 {
      transform: unset;
      transition: transform 0.1s ease 0s;
      will-change: transform;
      top: 0;
      right: 40%;
      opacity: 1;
      position: absolute;
      @media (min-width: 992px) {
         display: block !important;
      }
   } */
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
   .section-row {
      margin-bottom: -40px;
      justify-content: center !important;
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
      .section-col {
         position: relative;
         width: 100%;
         padding-right: 15px;
         padding-left: 15px;
         @media (min-width: 576px) {
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
         }
         @media (min-width: 768px) {
            flex: 0 0 50%;
            max-width: 50%;
         }
         @media (min-width: 992px) {
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
         }
         .how-item {
            text-align: center;
            margin-bottom: 32px;
            .how-thumb {
               margin: 0 auto 25px;
               @media (min-width: 576px) {
                  margin-bottom: 40px;
               }
               img {
                  max-width: 100%;
               }
            }
            .how-content {
               text-transform: uppercase;
               @media (min-width: 576px) {
                  font-size: 22px;
               }
            }
         }
      }
   }
`;
