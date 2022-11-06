import styled from "styled-components";
import AccountBg from "../../images/account-bg.jpg";

export const Wrapper = styled.div`
   background-image: url(${AccountBg});
   padding: 30px 0;
   min-height: 100vh;
   justify-content: center;
   display: flex;
   flex-wrap: wrap;
   background-size: cover;
   background-position: center center;
   background-repeat: no-repeat;
`;
export const Content = styled.div`
   .account-title {
      margin-bottom: 30px;
      position: relative;
      text-align: center !important;
      @media (max-width: 767px) {
         display: flex;
         align-items: center;
         justify-content: space-between;
      }
      @media (min-width: 768px) {
         margin-bottom: 80px;
      }
      .back-home {
         font-size: 18px;
         font-weight: 600;
         color: var(--white);
         text-align: left;
         display: inline-flex;
         align-items: center;
         @media (min-width: 768px) {
            position: absolute;
            left: 0;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
         }
      }
      .logo {
         @media (max-width: 767px) {
            display: block;
         }
         img {
            width: 50px;
            height: 50px;
            /* background-color: var(--white); */
            @media (max-width: 767px) {
               max-width: 100%;
            }
         }
         span {
            color: var(--white);
            font-size: 20px;
            font-weight: bold;
            padding-left: 5px;
         }
      }
   }
   .account-wrapper {
      max-width: 540px;
      margin: 0 auto;
      border-radius: 30px;
      background: var(--white);
      padding: 60px 0;
      @media (max-width: 575px) {
         font-size: 16px;
      }

      .account-body {
         padding: 10px 40px 0;
         text-align: center;
         @media (max-width: 575px) {
            padding: 0 15px 0;
         }
         .title {
            margin-bottom: 20px;
            font-weight: normal;
         }
         .account-form {
            text-align: left;
            /* padding: 10px 40px 0; */
            .form-group {
               margin-bottom: 13px;
               label {
                  font-size: 18px;
                  font-weight: normal;
                  font-family: "Josefin Sans Regular";
                  color: var(--purple);
                  cursor: pointer;
               }
               input {
                  border: 1px solid rgba(59, 54, 140, 0.1);
                  -webkit-border-radius: 5px;
                  -moz-border-radius: 5px;
                  border-radius: 5px;
                  background-color: #f6f6fa;
                  padding: 0 30px;
                  height: 60px;
               }
               .forget-password {
                  font-size: 16px;
                  margin-top: 10px;
                  display: block;
                  a {
                     color: #0403c4;
                     font-weight: 600;
                     text-transform: capitalize;
                  }
               }
               button {
                  border: none;
                  -webkit-border-radius: 10px;
                  -moz-border-radius: 10px;
                  border-radius: 10px;
                  background: -moz-linear-gradient(
                     0deg,
                     #e2906e 0%,
                     #e83a99 100%
                  );
                  background: -webkit-linear-gradient(
                     0deg,
                     #e2906e 0%,
                     #e83a99 100%
                  );
                  background: -ms-linear-gradient(
                     0deg,
                     #e2906e 0%,
                     #e83a99 100%
                  );
                  box-shadow: 2.419px 3.703px 12.48px 0.52px
                     rgb(232 58 153 / 50%);
                  width: auto;
                  padding: 0 45px;
                  color: #ffffff;
                  margin-top: 20px;
               }
            }
            .text-center {
               text-align: center !important;
            }
         }
      }
      .or {
         position: relative;
         text-align: center;
         ::before {
            position: absolute;
            content: "";
            top: 50%;
            left: 0;
            height: 1px;
            width: 100%;
            background: #dddce7;
         }
         span {
            display: inline-block;
            padding: 0 12px;
            font-weight: 600;
            color: #414785;
            text-transform: uppercase;
            background: var(--white);
            position: relative;
            z-index: 1;
         }
      }
      .account-header {
         padding: 0 40px 40px;
         text-align: center;
         padding-bottom: 0 !important;
         @media (max-width: 575px) {
            padding: 0 15px 30px;
         }
         .work-email {
            margin-bottom: 30px;
            margin-top: 0.5rem !important;
            display: block !important;
         }
         .sign-in-with {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 12px 40px;
            color: #504c89;
            border: 1px solid #aa9dd0;
            -webkit-border-radius: 27px;
            -moz-border-radius: 27px;
            border-radius: 27px;
            @media (max-width: 575px) {
               padding: 12px 30px;
            }
            img {
               width: 24px;
               margin-right: 10px;
               @media (max-width: 575px) {
                  width: 20px;
               }
            }
         }
         .no-account {
            margin-top: 15px;
            display: block !important;
            a {
               color: #0403c4;
               font-weight: 600;
               text-transform: capitalize;
            }
         }
      }
   }
`;
