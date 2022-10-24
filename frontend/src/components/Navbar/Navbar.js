import React from "react";
import { Wrapper, Content, InnerWrapper } from "./Navbar.styles";

const NavBar = () => {
   return (
      <Wrapper>
         <InnerWrapper>
            <Content>
               <div id="logo">
                  <p>Logo</p>
               </div>
               <ul id="menu">
                  <li>
                     <p>HOME</p>
                  </li>
                  <li>
                     <p>FAQ</p>
                  </li>
                  <li>
                     <p>CONTACT</p>
                  </li>
               </ul>
               <div id="auth">
                  <p>LOGIN</p>
                  <p>REGISTER</p>
               </div>
            </Content>
         </InnerWrapper>
      </Wrapper>
   );
};

export default NavBar;
