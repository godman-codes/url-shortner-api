import styled from "styled-components";

export const Wrapper = styled.div`
   width: 100%;
   position: fixed;
   z-index: 999;
   top: 0;
   -webkit-transition: all ease 0.3s;
   -moz-transition: all ease 0.3s;
   transition: all ease 0.3s;
   padding: 15px 0;
   color: var(--white);
   /* height: 91px; */
`;
export const Content = styled.div`
   .header-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .logo {
         width: 140px;
         a {
            display: block;
            color: var(--white);
            img {
               width: 50px;
               height: auto;
            }
         }
      }
      .menu {
         @media (min-width: 992px) and (max-width: 1199px) {
            margin-right: 30px;
         }
         @media (min-width: 992px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            margin-left: auto;
            margin-right: 45px;
            li {
               padding: 5px;
               position: relative;
               a {
                  font-weight: 600;
                  text-transform: uppercase;
                  color: var(--white);
                  padding: 7px 25px;
                  font-size: 18px;
               }
            }
         }
         @media (max-width: 991px) {
            position: absolute;
            top: 83%;
            left: 0;
            width: 100%;
            max-height: calc(100vh - 130px);
            z-index: 9;
            background-color: var(--white);
            overflow-y: auto;
            box-shadow: 0 0 20px rgb(0 0 0 / 8%);
            -webkit-transition: all ease 0.3s;
            -moz-transition: all ease 0.3s;
            transition: all ease 0.3s;
            -webkit-transform: scaleY(0);
            -ms-transform: scaleY(0);
            transform: scaleY(0);
            transform-origin: top;
            li {
               width: 100%;
               padding: 0;
               :hover {
                  background-color: var(--purple);
                  a {
                     color: var(--white);
                  }
               }
               a {
                  padding: 5px 10px;
                  display: flex;
                  align-items: center;
                  border-top: 1px solid rgba(65, 71, 133, 0.1);
                  font-weight: 500;
                  text-transform: capitalize;
                  justify-content: space-between;
                  color: var(--purple);
               }
            }
         }
         .second-auth {
            text-align: center !important;
            @media (min-width: 576px) {
               display: none !important;
            }
            :hover {
               background-color: inherit;
            }
            a {
               font-size: 16px;
               font-weight: 600;
               text-transform: uppercase;
               padding: 11px 34px;
               color: var(--white);
               background: var(--button_gradient);
               box-shadow: 0px 19px 56px 0px rgb(0 0 0 / 20%);
               -webkit-border-radius: 25px;
               -moz-border-radius: 25px;
               border-radius: 25px;
               margin-left: 22px;
               @media (max-width: 1199px) {
                  padding: 7px 25px;
                  font-size: 14px;
                  margin-left: 12px;
               }
               @media (max-width: 991px) {
                  display: inline-flex;
                  padding: 10px 50px;
                  align-items: center;
                  font-weight: 500;
                  text-transform: capitalize;
                  justify-content: space-between;
                  background: -moz-linear-gradient(
                     -94deg,
                     #e74179 0%,
                     #fe7a6a 84%
                  );
                  background: -webkit-linear-gradient(
                     -94deg,
                     #e74179 0%,
                     #fe7a6a 84%
                  );
                  background: -ms-linear-gradient(
                     -94deg,
                     #e74179 0%,
                     #fe7a6a 84%
                  );
                  box-shadow: 0px 19px 56px 0px rgb(0 0 0 / 20%);
                  border: none;
                  color: var(--white);
                  margin: 5px;
               }
            }
            .two {
               margin-bottom: 1.5rem !important;
            }
         }
      }
      .menu.active {
         @media (max-width: 991px) {
            padding: 0;
            -webkit-transform: scaleY(1);
            -ms-transform: scaleY(1);
            transform: scaleY(1);
         }
      }
      .menu-icon {
         position: relative;
         cursor: pointer;
         width: 25px;
         height: 20px;
         margin-left: auto;
         @media (min-width: 576px) {
            margin-right: 1rem !important;
         }
         @media (min-width: 992px) {
            display: none !important;
         }
         span {
            position: absolute;
            display: inline-block;
            height: 3px;
            width: 100%;
            -webkit-transition: all ease 0.3s;
            -moz-transition: all ease 0.3s;
            transition: all ease 0.3s;
            background-color: var(--white);
            left: 0;

            :first-child {
               top: 0;
            }
            :nth-child(2) {
               top: 52%;
               transform: translateY(-65%);
            }
            :last-child {
               bottom: 0;
            }
         }
      }
      .menu-icon.active {
         span {
            :first-child {
               -webkit-transform: rotate(45deg) translate(3px, 9px);
               -ms-transform: rotate(45deg) translate(3px, 9px);
               transform: rotate(45deg) translate(3px, 9px);
            }
            :nth-child(2) {
               opacity: 0;
            }
            :last-child {
               -webkit-transform: rotate(-45deg) translate(3px, -9px);
               -ms-transform: rotate(-45deg) translate(3px, -9px);
               transform: rotate(-45deg) translate(3px, -9px);
            }
         }
      }
      .header-right {
         align-items: center;
         a {
            font-size: 16px;
            font-weight: 600;
            text-transform: uppercase;
            padding: 11px 34px;
            color: var(--white);
            background: -moz-linear-gradient(-94deg, #e74179 0%, #fe7a6a 84%);
            background: -webkit-linear-gradient(
               -94deg,
               #e74179 0%,
               #fe7a6a 84%
            );
            background: var(--button_gradient);
            box-shadow: 0px 19px 56px 0px rgb(0 0 0 / 20%);
            -webkit-border-radius: 25px;
            -moz-border-radius: 25px;
            border-radius: 25px;
            margin-left: 22px;
            @media (min-width: 576px) {
               display: inline-block !important;
            }
            @media (max-width: 576px) {
               display: none !important;
            }
         }
         .header-button-1 {
            background: transparent;
            box-shadow: none;
            :hover {
               background: var(--button_gradient);
            }
         }
      }
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
`;
