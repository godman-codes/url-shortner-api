import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
:root {
    --white: #ffffff;
    --purple: #414785;
    --blue: #0073E4;
    --first_font: 'Open Sans', sans-serif;
    --second_font: 'Josefin Sans', sans-serif; 
}

* {
    box-sizing: border-box;
    font-family: var(--second_font);
}
body {
    margin: 0px;

}
`;
