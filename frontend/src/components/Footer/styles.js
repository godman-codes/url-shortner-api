import styled from "styled-components";
import FooterBg from "../../images/footer-bg.jpg";

export const Wrapper = styled.div`
   position: relative;
   padding-top: 80px;
   @media (min-width: 768px) {
      padding-top: 100px;
   }
   @media (min-width: 992px) {
      padding-top: 120px;
   }
   .footer-bg {
      background-image: url(${FooterBg});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      z-index: -1;
      overflow: hidden;

      @media screen and (min-width: 500px) {
         top: 630px;
      }
   }
   .footer-btm {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      z-index: -1;
      overflow: hidden;
      @media screen and (min-width: 500px) {
         top: 630px;
      }
      img {
         width: 100%;
         min-width: 992px;
      }
   }
`;
export const Content = styled.div`
   .section-header {
      max-width: 635px;
      margin: 0 auto 40px;
      text-align: center;
      @media (min-width: 768px) {
         margin-bottom: 65px;
      }
      .cate {
         display: block;
         color: #7859da;
         margin-bottom: 15px;
         @media (min-width: 768px) {
            margin-bottom: 24px;
            font-size: 24px;
            font-weight: 600;
         }
      }
      .title {
         margin-bottom: 20px;
         @media (min-width: 768px) {
            margin-bottom: 18px;
         }
      }
   }
   .contact-form {
      max-width: 540px;
      margin: 0 auto;
      border-radius: 20px;
      box-shadow: 0px 5px 49px 0px rgb(51 42 147 / 54%);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 40px 35px 45px;
      background: var(--white);
      margin-bottom: 80px;
      @media (min-width: 992px) {
         margin-bottom: 120px;
      }
      .form-group {
         margin-bottom: 25px;
         :last-child {
            margin-bottom: 0;
         }
         label {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 6px;
         }
         input {
            height: 60px;
            -webkit-border-radius: 30px;
            -moz-border-radius: 30px;
            border-radius: 30px;
            padding-left: 30px;
            background: var(--white);
            box-shadow: inset 0 0 6px #00a2ff, inset 0 0 6px #00a2ff,
               inset 0 0 6px #00a2ff;
            -webkit-box-shadow: inset 0 0 6px #00a2ff, inset 0 0 6px #00a2ff,
               inset 0 0 6px #00a2ff;
            border: none;
            font-size: 16px;
         }
         textarea {
            height: 140px;
            padding-top: 25px;
            padding-left: 30px;
            -webkit-border-radius: 30px;
            -moz-border-radius: 30px;
            border-radius: 30px;
            background: var(--white);
            box-shadow: inset 0 0 6px #00a2ff, inset 0 0 6px #00a2ff,
               inset 0 0 6px #00a2ff;
            -webkit-box-shadow: inset 0 0 6px #00a2ff, inset 0 0 6px #00a2ff,
               inset 0 0 6px #00a2ff;
            border: none;
            font-size: 16px;
         }
         button {
            background: var(--button_gradient_blue);
            /* background: -ms-linear-gradient(-100deg, #2d38e1 0%, #03c6fc 84%); */
            box-shadow: -1.045px 9.945px 16px 0px rgb(29 47 112 / 30%);
            font-size: 16px;
            font-weight: 400;
            text-transform: uppercase;
            color: var(--white);
            padding: 3px 60px 0;
            border: none;
            -webkit-border-radius: 30px;
            -moz-border-radius: 30px;
            border-radius: 30px;
            width: auto;
            height: 60px;
         }
      }
      .check-group {
         display: flex;
         input {
            padding-left: 30px;
            background: var(--white);
            cursor: pointer;
            width: 24px;
            height: 24px;
            border: none;
            font-size: 16px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            box-shadow: -5px 5px 15px rgb(51 42 147 / 54%);
            -webkit-box-shadow: -5px 5px 15px rgb(51 42 147 / 54%);
         }
         label {
            width: calc(100% - 24px);
            padding-left: 10px;
            font-size: 16px;
            line-height: 24px;
            /* color: #686da1; */
            font-weight: 600;
            margin-bottom: 6px;
         }
      }
      .text-center {
         text-align: center !important;
      }
   }
   .footer-top {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      align-items: center;
      padding-bottom: 15px;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      z-index: 1;
      justify-content: space-between;
      .logo {
         max-width: 160px;
         margin-right: 15px;
         a {
            color: var(--white);
            display: block;
            font-size: 25px;
            font-weight: bold;
         }
      }
      .links {
         margin: 0 -15px -5px;
         display: flex;
         flex-wrap: wrap;
         li {
            padding: 0 15px 5px;
            max-width: calc(100% / 3);
            a {
               font-size: 16px;
               font-weight: 700;
               text-transform: uppercase;
               color: #504c89;
               display: block;
               img {
                  max-width: 100%;
               }
            }
         }
      }
   }
   .footer-top > * {
      padding-bottom: 20px;
      margin-bottom: 0;
   }
   .footer-bottom {
      padding: 30px 0;
      .footer-bottom-area {
         margin-bottom: -25px;
         display: flex;
         flex-wrap: wrap-reverse;
         position: relative;
         z-index: 1;
         justify-content: space-between;
         .left {
            margin-bottom: 20px;
            color: var(--white);
            p {
               margin: 0 !important;
               a {
                  color: #ee4730;
               }
            }
         }
         .social-icons {
            margin-bottom: 12.5px;
            margin: -7.5px;
            display: flex;
            flex-wrap: wrap;
            list-style: none;
            li {
               padding: 7.5px;
               .active {
                  background: -webkit-linear-gradient(
                     -103deg,
                     #ef774c 0%,
                     #ed684f 35%,
                     #e84351 76%,
                     #e73351 100%
                  );
                  border-color: #ee4730;
                  box-shadow: 0px 10px 10px 0px rgb(132 141 156 / 30%);
               }
               a {
                  width: 36px;
                  height: 36px;
                  line-height: 36px;
                  text-align: center;
                  -webkit-border-radius: 50%;
                  -moz-border-radius: 50%;
                  border-radius: 50%;
                  border: 1px solid rgba(255, 255, 255, 0.1);
                  color: #ffffff;
                  font-size: 14px;
                  .active,
                  :hover {
                     background: -webkit-linear-gradient(
                        -103deg,
                        #ef774c 0%,
                        #ed684f 35%,
                        #e84351 76%,
                        #e73351 100%
                     );
                     border-color: #ee4730;
                     box-shadow: 0px 10px 10px 0px rgb(132 141 156 / 30%);
                  }
               }
            }
         }
      }
   }
`;
