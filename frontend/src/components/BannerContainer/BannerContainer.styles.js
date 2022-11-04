import styled from "styled-components";

export const Wrapper = styled.div`
   font-family: "Josefin Sans Regular";
   /* border: 2px solid red; */
   position: relative;
   padding-top: 200px;
   @media screen and (max-width: 992px) {
      padding-top: 180px;
   }
   @media screen and (max-width: 576px) {
      padding-top: 150px;
   }
`;
export const Content = styled.div`
   /* border: 2px solid yellow; */
   padding-right: 15px;
   padding-left: 15px;
   margin-right: auto;
   margin-left: auto;
   @media (min-width: 576px) {
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
   .top-message {
      /* border: 2px solid green; */
      margin-bottom: 130px;
      text-align: center;
      @media screen and (max-width: 991px) {
         margin-bottom: 115px;
      }
      @media screen and(max-width: 967px) {
         margin-bottom: 110px;
      }
      .cate {
         color: var(--sky_blue);
         font-weight: 600;
         text-transform: uppercase;
         margin-top: 0;
         margin-bottom: 15px;
         @media screen and (max-width: 991px) {
            font-size: 26px;
            margin-bottom: 5px;
         }
         @media screen and (max-width: 575px) {
            font-size: 22px;
         }
      }
      .title {
         text-transform: uppercase;
         font-size: 110px;
         line-height: 120px;
         color: var(--white);
         margin-bottom: 25px;
         @media screen and (max-width: 991px) {
            font-size: 26px;
            line-height: 80px;
            margin-bottom: 5px;
         }
         @media screen and (max-width: 575px) {
            font-size: 50px;
            line-height: 60px;
            margin-bottom: 20px;
         }
      }
   }
   .top-message p {
      max-width: 640px;
      margin-left: auto;
      margin-right: auto;
      font-size: 18px;
      font-family: "Open Sans two";
      color: var(--white);
      @media screen and (min-width: 768px) {
         font-size: 20px;
         line-height: 30px;
      }
   }
   .form-container {
      background-color: var(--white);
      text-align: center;
      border-radius: 20px;
      padding: 90px 60px 85px;
      box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
      @media screen and (max-width: 575px) {
         padding: 50px 15px 45px;
      }
      @media screen and (max-width: 767px) {
         padding: 50px 30px 45px;
      }

      .subtitle {
         color: var(--purple);
         font-weight: 600;
         margin-bottom: 34px;
         @media screen and (max-width: 768px) {
            margin-bottom: 20px;
         }
      }
      .form-container-form {
         display: flex;
         max-width: 730px;
         margin: 0 auto 50px;
         justify-content: space-between;
         flex-wrap: wrap;
         @media screen and (max-width: 767px) {
            justify-content: center;
            margin-bottom: 35px;
         }

         input {
            height: 60px;
            border-radius: 30px;
            padding-left: 30px;
            background: var(--white);
            width: calc(100% - 190px);
            border: none;
            font-size: 16px;
            box-shadow: inset 0 0 6px #00a2ff, inset 0 0 6px #00a2ff,
               inset 0 0 6px #00a2ff;
            margin-bottom: 25px;
            padding-top: 3px;
            color: #504c89;
            outline: none;
            @media screen and (max-width: 767px) {
               width: 100%;
            }
            @media screen and (max-width: 575px) {
               height: 50px;
            }
         }
         button {
            cursor: pointer;
            background: var(--button_gradient_blue);
            box-shadow: -1.045px 9.945px 16px 0px rgb(29 47 112 / 30%);
            font-size: 16px;
            font-weight: 400;
            text-transform: capitalize;
            color: #ffffff;
            padding-top: 3px;
            border: none;
            width: auto;
            height: 60px;
            width: 180px;
            border-radius: 30px;
            margin-bottom: 25px;
            @media screen and (max-width: 575px) {
               height: 50px;
            }
         }
      }
   }
   .banner-counter {
      display: flex;
      justify-content: center;
      margin: 0 -15px -50px;
      flex-wrap: wrap;
      .counter-item {
         flex-grow: 1;
         padding: 0 15px;
         margin-bottom: 50px;
         .counter-title {
            font-size: 50px;
            line-height: 60px;
            margin-top: -20px;
            font-weight: 300;
            color: var(--light_blue);
            margin-bottom: 12px;
            @media screen and (min-width: 768px) {
               font-size: 60px;
               line-height: 70px;
               margin-top: -6px;
            }
            @media screen and (min-width: 576px) {
               font-size: 36px;
               line-height: 46px;
               margin-top: -5px;
            }
         }
         p {
            font-size: 18px;
            margin-top: -10px;
            color: var(--lightest_purple);
         }
      }
   }
`;
