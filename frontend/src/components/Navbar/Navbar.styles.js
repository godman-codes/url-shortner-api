import styled from "styled-components";

export const Wrapper = styled.div`
   height: 91px;
   position: fixed;
   right: 0;
   left: 0;
   overflow: hidden;
   display: block;
   z-index: 8;
   color: var(--white);
   font-family: "Josefin Sans Regular";
   background-color: transparent;
   #colored {
      background-color: var(--nav_blue);
      transition: background-color 200ms linear;
   }
   @media screen and (max-width: 966px) {
      height: 85px;
      #colored {
         background-color: var(--purple);
      }
      .darkColored {
         background-color: var(--dark_purple);
      }
   }
`;
export const InnerWrapper = styled.div`
   padding: 15px 0;
   display: flex;
   justify-content: center;
   height: 100%;
`;
export const Content = styled.div`
   display: flex;
   justify-content: space-between;
   width: 60%;
   font-weight: 600;
   font-size: 18px;

   #logo {
      width: 140px;
      margin: 0;
      display: flex;
      align-items: center;
      p {
         margin: 0;
      }
   }
   .menu {
      margin-right: 35px !important;
      margin-left: auto !important;
      width: 35%;
      list-style: none;
      display: flex;
      padding: 0;
      margin: 0;
      justify-content: space-between;
      align-items: center;
      .second-auth {
         display: none;
      }
      li {
         display: list-item;
         /* position: relative; */
         padding: 5px;
         margin: 0 12px;
         width: auto;
         /* p {
            margin: 0;
         } */
         a {
            color: var(--white);
            text-decoration: none;
            text-transform: uppercase;
         }
      }
   }
   #auth {
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
         padding: 9px 25px 7px 25px;
         display: flex;
         justify-content: center;
         align-items: center;
         text-align: center;
         width: 50%;
         color: var(--white);
         height: 65%;
         text-decoration: none;
         /* background: rgb(236, 76, 119); */
         border-radius: 25px;
      }
      #login {
         margin-right: 2px;
         :hover {
            background: var(--button_gradient);
         }
      }
      #signup {
         margin-left: 2px;
         background: var(--button_gradient);
      }
   }
   @media screen and (max-width: 1400px) {
      width: 90%;
      font-weight: bold;
      font-size: 16px;
   }
   @media screen and (max-width: 966px) {
      width: 78%;
      font-weight: 600;
      font-size: 15px;
      #auth {
         width: 40%;
      }
      .active-menu {
         visibility: hidden;
         height: 0 !important;
         overflow: hidden;
         li {
            height: 0 !important;
            border-bottom: 0 !important;
            a {
               height: 0 !important;
            }
         }
      }
      .menu {
         visibility: visible;
         transition: 0.1s all ease-in-out;
         transform: scaleY(1);
         transform-origin: top;
         position: fixed;
         display: flex;
         flex-direction: column;
         margin: 0 !important;
         /* justify-content: flex-start; */
         top: 85px;
         left: 0;
         width: 100%;
         height: 120px;
         z-index: 9;
         background-color: white;
         overflow-y: visible;
         color: var(--lightest_purple);
         font-weight: 500;
         font-size: 15px;

         li {
            width: 100%;
            height: 40px;
            border-bottom: 1px solid #ececf3;
            display: flex;
            align-items: center;
            transition: background-color 300ms;
            :hover {
               background-color: #555dad;
               a {
                  color: var(--white);
               }
            }
            a {
               width: 100%;
               display: flex;
               align-items: center;
               height: 100%;
               color: var(--lightest_purple);
               font-size: larger;
               text-decoration: none;
               text-transform: capitalize;
            }
         }
      }
   }
   .menu-icon {
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      justify-content: center;
      /* margin-right: 20px; */
      margin-left: 35%;
      height: 100%;
      div {
         width: 1.7rem;
         height: 0.17rem;
         margin: 0.2rem;
         background: var(--white);
         transition: 0.3s ease-in;
         pointer-events: none;
      }
      @media screen and (min-width: 966px) {
         display: none;
      }
   }
   .toggle .line1 {
      transform: rotate(-45deg) translate(-2px, 11px);
   }
   .toggle .line2 {
      opacity: 0;
   }
   .toggle .line3 {
      transform: rotate(45deg) translate(-2px, -11px);
   }
   .overlay {
      position: fixed;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -7;
      background: rgba(0, 0, 0, 0.7);
      transition: all ease 0.3s;
      visibility: hidden;
      opacity: 0;
   }
   .overlay.active {
      visibility: visible;
      opacity: 1;
   }
   @media screen and (max-width: 648px) {
      width: 95%;
      #auth {
         display: none;
      }
      .menu-icon {
         margin-right: 0;
      }
      .menu {
         height: 250px;
         .second-auth {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30%;
            border-bottom: 0;
            :hover {
               background-color: var(--white);
            }
            a {
               font-weight: 500;
               font-size: 14px;
               color: var(--white);
               padding: 9px 45px 7px 45px;
               height: 45px;
               width: auto;
               background: var(--button_gradient);
               border-radius: 25px;
            }
         }
      }
   }
`;
