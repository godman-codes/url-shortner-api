import React from "react";
import { Wrapper, Content } from "./styles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/logo_transparent.png";

const RegisterPageComponent = () => {
   return (
      <Wrapper>
         <Content className="container">
            <div className="account-title">
               <Link className="back-home" to="/">
                  <FontAwesomeIcon icon={faAngleLeft} />
                  <span>Back</span>
               </Link>
               <Link className="logo" to="/">
                  <img src={Logo} alt="Logo" />
                  <span>Godman</span>
               </Link>
            </div>
         </Content>
      </Wrapper>
   );
};

export default RegisterPageComponent;
