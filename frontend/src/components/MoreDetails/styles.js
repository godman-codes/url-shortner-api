import styled from "styled-components";

export const Wrapper = styled.div`
   position: fixed;
   background: rgba(0, 0, 0, 0.7);
   top: 85px;
   width: 100%;
   height: 100%;
   z-index: 2;
   display: flex;
   justify-content: center;
   align-items: center;

   .vanish {
      display: none !important;
   }
`;
export const Content = styled.div`
   background-color: var(--white);
   width: 400px;
   min-height: 150px;
   border-radius: 5px;
   padding: 0 5px 5px 5px;
   .close {
      /* background-color: red; */
      color: red;
      width: 20px;
      position: relative;
      top: -15px;
      left: 388px;
      margin-right: 0;
      cursor: pointer;
      svg {
         font-size: 25px;
         :hover {
            font-size: 30px;
         }
      }
   }
   .details {
      p {
         border-bottom: 1px solid var(--light_purple-2);
      }
      .action {
         text-align: center;
         button {
            width: 100px;
            margin-bottom: 10px;
            border-radius: 10px;
            :hover {
               width: 110px;
            }
            :first-child {
               background-color: green;
               color: var(--white);
               font-weight: bold;
            }
            :last-child {
               background-color: #bd0414;
               color: var(--white);
               font-weight: bold;
            }
         }
      }
      .update {
         label {
            font-size: 15px;
            font-weight: bold;
         }
         input {
            margin-bottom: 10px;
         }
         div {
            text-align: center;
         }
         button {
            width: 100px;
            margin-bottom: 10px;
            border-radius: 10px;
            background-color: green;
            color: var(--white);
            font-weight: bold;
            margin-right: 10px;
            :hover {
               width: 110px;
            }
         }
         .back {
            /* background-color: #bd0414; */
            cursor: pointer;
            margin-left: 10px;
            width: 200px;
            margin-bottom: 10px;
            height: 100px;
            display: inline;
         }
      }
   }
   .title {
      margin-top: -20px;
      margin-bottom: 5px;
      text-align: center;
   }
`;
