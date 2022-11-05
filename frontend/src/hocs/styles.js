import styled from "styled-components";

export const Wrapper = styled.div`
   width: 100%;
   height: 100%;
   position: fixed;
   z-index: 999999;
   background: #2c18b4;
   /* display: -webkit-box;
   display: -ms-flexbox; */
   display: flex;
   -webkit-box-align: center;
   -ms-flex-align: center;
   align-items: center;
   -webkit-box-pack: center;
   -ms-flex-pack: center;
   justify-content: center;

   .loader {
      display: inline-block;
      width: 45px;
      height: 45px;
      position: absolute;
      z-index: 3;
      border: 4px solid white;
      top: 50%;
      -webkit-animation: loader 2.5s infinite ease;
      animation: loader 2.5s infinite ease;
      @keyframes loader {
         0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
         }

         25% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
         }

         50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
         }

         75% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
         }

         100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
         }
      }

      .loader-inner {
         vertical-align: top;
         display: inline-block;
         width: 100%;
         background-color: white;
         -webkit-animation: loader-inner 2.5s infinite ease-in;
         animation: loader-inner 2.5s infinite ease-in;
         @keyframes loader-inner {
            0% {
               height: 0%;
            }

            25% {
               height: 0%;
            }

            50% {
               height: 100%;
            }

            75% {
               height: 100%;
            }

            100% {
               height: 0%;
            }
         }
      }
   }
`;
