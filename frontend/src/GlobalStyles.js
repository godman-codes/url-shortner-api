import { createGlobalStyle } from "styled-components";
import JosefinSansBold from "./fonts/JosefinSans/JosefinSans-Bold.ttf";
import JosefinSansRegular from "./fonts/JosefinSans/JosefinSans-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
:root {
    --white: #ffffff;
    --purple: #414785;
    --dark_purple: #120a36;
    --blue: #0073E4;
    --nav_blue: #2c18b4
    --first_font: 'OpenSans', sans-serif;
    --second_font: 'JosefinSansRegular';
    --lightest_purple: #565EB0;
    --button_color: rgb(236,76,119);
    --button_gradient: linear-gradient(180deg, rgba(236,76,119,1) 0%, rgba(254,122,106,1) 100%);
    --rotator_animation: rotate2 20s alternate infinite;
}

* {
    box-sizing: border-box;
    @font-face {
        font-family: 'Josefin Sans';
        src: local('Josefin Sans'), 
        url(${JosefinSansBold})
        /* format('opentype') */
    }
    @font-face {
        font-family: 'Josefin Sans Regular';
        src: local('Josefin Sans Regular'), 
        url(${JosefinSansRegular})
        /* format('opentype') */
    }
}
body {
    margin: 0px;

}
`;
