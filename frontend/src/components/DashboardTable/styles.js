import styled from "styled-components";

export const Table = styled.table`
   margin-left: 0%;
   min-width: 100%;
   display: table;
   border: 1px solid var(--light_purple-2);
   border-collapse: collapse;
   margin-bottom: 20px;

   thead {
      background: var(--button_gradient_blue);
      color: var(--white);
      height: 40px;
      th {
         border-right: 1px solid var(--white);
         @media screen and (max-width: 992px) {
            :nth-child(2) {
               max-width: 190px;
            }
         }
         @media screen and (max-width: 768px) {
            :nth-child(2) {
               max-width: 100px;
            }
         }
         @media screen and (max-width: 576px) {
            :nth-child(4) {
               display: none;
            }
         }

         :last-child {
            border-right: inherit;
         }
      }
   }
   tbody {
      tr {
         td {
            border: 1px solid var(--light_purple-2);
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: start;
            white-space: nowrap;
            :last-child {
               button {
                  color: var(--white);
                  background-color: var(--light_purple);
               }
            }
            @media screen and (max-width: 992px) {
               :nth-child(2) {
                  max-width: 190px;
                  overflow: hidden;
                  text-overflow: ellipsis;
               }
            }
            @media screen and (max-width: 768px) {
               :nth-child(2) {
                  max-width: 100px;
                  overflow: hidden;
                  text-overflow: ellipsis;
               }
            }
            @media screen and (max-width: 576px) {
               :nth-child(4) {
                  display: none;
               }
            }
            /* :nth-child(2) { */
            /* @media screen and (max-width: 992px) {
                  width: 150px;
               }
               max-width: 150px;
               @media screen and (max-width: 576px) {
                  width: 150px;
               } */
            /* @media (min-width: 992px) {
                  max-width: 960px;
               }
               @media (min-width: 1200px) {
                  max-width: 1140px;
               } */
            /* } */
         }
         .id {
            text-align: center;
         }

         :nth-child(even) {
            background-color: #f1efff;
         }
         :hover {
            background-color: #bfbdda;
         }
      }
   }
`;
export const Refresh = styled.div`
   margin-bottom: 20px;
   button {
      width: 75px;
      background: var(--light_purple);
      color: white;
      border-radius: 5px;
      :hover {
         width: 100px;
         height: 55px;
      }
   }
`;
