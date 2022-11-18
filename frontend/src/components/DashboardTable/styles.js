import styled from "styled-components";

export const Table = styled.table`
   margin-left: 0%;
   min-width: 100%;
   display: table;
   border: 1px solid var(--light_purple-2);
   border-collapse: collapse;
   margin-bottom: 60px;

   thead {
      background: var(--button_gradient_blue);
      color: var(--white);
      th {
         border-right: 1px solid var(--white);
         :last-child {
            border-right: inherit;
         }
      }
   }
   tbody {
      tr {
         td {
            border: 1px solid var(--light_purple-2);
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
