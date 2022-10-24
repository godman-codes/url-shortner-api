import { createGlobalStyle } from "styled-components";
import JosefinSansBold from "./fonts/JosefinSans/JosefinSans-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
:root {
    --white: #ffffff;
    --purple: #414785;
    --blue: #0073E4;
    --first_font: 'OpenSans', sans-serif;
    --second_font: 'JosefinSansRegular'; 
}

* {
    box-sizing: border-box;
    @font-face {
        font-family: 'Josefin Sans';
        src: local('Josefin Sans'), 
        url(${JosefinSansBold})
        /* format('opentype') */
    }
}
body {
    margin: 0px;

}
`;
