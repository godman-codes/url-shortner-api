import styled from "styled-components";

export const Wrapper = styled.div`
   padding-top: 80px;
   padding-bottom: 80px;

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
   .row {
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
      .row-child-1 {
         position: relative;
         width: 100%;
         padding-right: 15px;
         padding-left: 15px;
         @media (min-width: 992px) {
            max-width: 50%;
            flex: 0 0 50%;
            margin-top: 100px;
         }
         .why-join-us {
            margin-left: 0 !important;
            max-width: 635px;
            margin: 0 auto 40px;
            text-align: left;
            position: sticky;
            top: 100px;
            @media (min-width: 768px) {
               margin-bottom: 45px;
            }
            @media (min-width: 992px) {
               margin-bottom: 0 !important;
            }
            .title {
               margin-bottom: 20px;
               @media (min-width: 768px) {
                  margin-bottom: 18px;
               }
            }
            p {
               margin-left: 0;
               margin-bottom: 1rem;
            }
            a {
               background: transparent;
               border: 1px solid #cac7f6;
               color: #414785;
               text-transform: capitalize;
               box-shadow: none;
               border-radius: 30px;
               font-weight: 500;
               padding: 18px 35px 13px;
               font-size: 18px;
               margin-top: 0.5rem !important;
               text-decoration: none;
               font-family: "Josefin Sans Regular";
               :hover {
                  background: var(--button_gradient);
                  color: var(--white);
               }
            }
         }
      }
      .row-child-2 {
         position: relative;
         width: 100%;
         padding-right: 15px;
         padding-left: 15px;
         @media (min-width: 992px) {
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
         }
         .choose-item {
            margin-bottom: 35px;
            @media (min-width: 768px) {
               margin-bottom: 45px;
            }
            :last-child {
               margin-bottom: 0;
            }
            .choose-thumb {
               width: 80px;
               margin-bottom: 25px;
               @media (min-width: 576px) {
                  width: 90px;
                  margin-bottom: 30px;
               }
               @media (min-width: 1200px) {
                  width: 120px;
               }
               img {
                  width: 100%;
               }
            }
            .choose-content {
               .title {
                  margin-bottom: 20px;
               }
            }
         }
      }
   }
`;
