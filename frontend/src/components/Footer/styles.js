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
            background: #ffffff;
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
            background: #ffffff;
            box-shadow: inset 0 0 6px #00a2ff, inset 0 0 6px #00a2ff,
               inset 0 0 6px #00a2ff;
            -webkit-box-shadow: inset 0 0 6px #00a2ff, inset 0 0 6px #00a2ff,
               inset 0 0 6px #00a2ff;
            border: none;
            font-size: 16px;
         }
      }
      .check-group {
         display: flex;
         input {
            width: 24px;
            height: 20px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            box-shadow: -5px 5px 15px rgb(51 42 147 / 54%);
            -webkit-box-shadow: -5px 5px 15px rgb(51 42 147 / 54%);
         }
      }
   }
`;
