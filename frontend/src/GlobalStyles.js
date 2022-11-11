import { createGlobalStyle } from "styled-components";
import JosefinSansBold from "./fonts/JosefinSans/JosefinSans-Bold.ttf";
import JosefinSansRegular from "./fonts/JosefinSans/JosefinSans-Regular.ttf";
import OpenSansRegular from "./fonts/open-sans/OpenSans-Regular.ttf";
import OpenSansBold from "./fonts/open-sans/OpenSans-Bold.ttf";

export const GlobalStyle = createGlobalStyle`
:root {
    --white: #ffffff;
    --purple: #414785;
    --ash-white: #f2f5ff;
    --dark_purple: #120a36;
    --light_purple: #7859da;
    --light_blue:  #0073e4;
    --blue: #0073E4;
    --sky_blue: #00F7FF;
    --nav_blue: #2c18b4;
    --first_font: 'OpenSans', sans-serif;
    --second_font: 'JosefinSansRegular';
    --lightest_purple: #565EB0;
    --button_color: rgb(236,76,119);
    --button_gradient_blue: -webkit-linear-gradient(
               -100deg,
               #2d38e1 0%,
               #03c6fc 84%
            );
    --button_gradient: linear-gradient(180deg, rgba(236,76,119,1) 0%, rgba(254,122,106,1) 100%);
    --rotator_animation: rotate2 20s alternate infinite;
}
html {
    font-size: 20px;
    scroll-behavior: smooth;
}

* {
    box-sizing: border-box;
    @font-face {
        font-family: 'Josefin Sans Bold';
        src: local('Josefin Sans Bold'), 
        url(${JosefinSansBold})
        /* format('opentype') */
    }
    @font-face {
        font-family: 'Josefin Sans Regular';
        src: local('Josefin Sans Regular'), 
        url(${JosefinSansRegular})
        /* format('opentype') */
    }
    @font-face {
        font-family: 'Open Sans two';
        src: url(${OpenSansRegular})

    }
    @font-face {
        font-family: 'Open Sans one';
        src: url(${OpenSansBold});
    }
}

body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    color: #504c89;
    line-height: 26px;
    overflow-x: hidden;
    font-family: "Open Sans two";
    background: #ffffff;
}
p {
    margin-top: -10px;
}
a {
    text-decoration: none;
    display: inline-block;
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    transition: all ease 0.3s;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 600;
    margin: 0;
    line-height: 1.3;
    color: var(--purple);
    font-family: "Josefin Sans Regular";
}

h1 a,
  h2 a,
  h3 a,
  h4 a,
  h5 a,
  h6 a {
    color: var(--purple);
}
h1 a:hover,
    h2 a:hover,
    h3 a:hover,
    h4 a:hover,
    h5 a:hover,
    h6 a:hover {
    color: #ee4730;
}

h1 {
    font-size: 42px;
}

h2 {
    font-size: 32px;
    line-height: 38px;
    margin-top: -4px;
}

@media (min-width: 576px) {
    h2 {
        font-size: 36px;
        line-height: 46px;
        margin-top: -5px;
    }
}

h3 {
    font-size: 28px;
    line-height: 38px;
    margin-top: -14px;
}

h4 {
    font-size: 24px;
    line-height: 28px;
    margin-top: -9px;
}

h5 {
    font-size: 20px;
    line-height: 26px;
    margin-top: -2px;
}

h6 {
    font-size: 18px;
    margin-top: -7px;
    font-weight: 500;
}

p {
    margin-top: -10px;
}

p:last-child {
    margin-bottom: -7px !important;
}

p a {
    color: #ee4730;
}

p a:hover {
    color: #ee4730;
}
textarea {
    resize: vertical;
}
img {
    border-style: none;
}

@media (max-width: 575px) {
    p {
        font-size: 16px;
    }
}

@media (min-width: 768px) {
    h1 {
        font-size: 80px;
    }

    h2 {
        font-size: 60px;
        line-height: 70px;
        margin-top: -6px;
    }

    h3 {
        font-size: 36px;
        line-height: 46px;
        margin-top: -16px;
    }

    h4 {
        font-size: 28px;
        line-height: 38px;
        margin-top: -14px;
    }

    h5 {
        font-size: 24px;
        line-height: 28px;
        margin-top: -2px;
    }

    h6 {
        font-size: 20px;
        line-height: 26px;
        margin-top: -2px;
    }
}
audio, canvas, iframe, img, svg, video {
    vertical-align: middle;
}
ul li {
    list-style: none;
    padding: 5px 0;
}
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 576px){
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
}
label {
    display: inline-block;
    margin-bottom: 0.5rem;
}
label, button, select {
    cursor: pointer;
}
input {
    background: #f4f4f4;
    border: 1px solid transparent;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    padding-left: 10px;
}
[type="checkbox"], [type="radio"] {
    box-sizing: border-box;
    padding: 0;
}
select, input, textarea, button {
    width: 100%;
    background-color: var(--white);
    border: 1px solid #bccaea;
    outline: none;
}
input, button, select {
    height: 50px;
    color: #504c89;
}
textarea {
    height: 200px;
    resize: none;
    padding: 10px;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}
.text-center {
    text-align: center!important;
}
/* #colored-nav {
      background-color: var(--nav_blue);
      top: 0;
      @media screen and (max-width: 966px) {
            background-color: var(--purple);
         }
} */
.darkColored-nav {
    background-color: var(--dark_purple);
}
.colored-nav {
      background-color: var(--nav_blue);
      top: 0;
      @media screen and (max-width: 966px) {
            background-color: var(--purple)!important;
         }
}
`;
