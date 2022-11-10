import React, { useState, useReducer } from "react";
import { Wrapper, Content } from "./styles";
import { Link } from "react-router-dom";
import Logo from "../../images/logo_transparent.png";

const reducer = (state, action) => {
   switch (action.type) {
      case "toggleIcon":
         if (state.icon === "menu-icon") {
            return {
               ...state,
               icon: "menu-icon active",
               navbarToggle: "darkColored",
               expandMenu: "menu active",
               overlay: true,
            };
         } else {
            return {
               ...state,
               icon: "menu-icon",
               navbarToggle: "",
               expandMenu: "menu",
               overlay: false,
            };
         }
      case "closeMenu":
         return {
            ...state,
            icon: "menu-icon",
            navbarToggle: "",
            expandMenu: "menu",
            overlay: false,
         };
      default:
         break;
   }
};

const Navbar = () => {
   const [navbar, setNavbar] = useState(false);

   const [state, dispatch] = useReducer(reducer, {
      icon: "menu-icon",
      navbarToggle: "",
      expandMenu: "menu active-menu",
      overlay: false,
   });

   const changeBackground = () => {
      if (window.scrollY >= 80) {
         setNavbar(true);
      } else {
         setNavbar(false);
      }
   };
   window.addEventListener("scroll", changeBackground);
   return (
      <Wrapper id={navbar ? "colored-nav" : ""} className={state.navbarToggle}>
         <Content className="container">
            <div className="header-wrapper">
               <div className="logo">
                  <Link to="/">
                     <img src={Logo} alt="logo" />
                  </Link>
               </div>
               <ul className={state.expandMenu}>
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/">Contact</Link>
                  </li>
                  <li>
                     <Link to="/">Faq</Link>
                  </li>
                  <li className="second-auth">
                     <Link to="/login">Login</Link>
                  </li>
                  <li className="second-auth">
                     <Link className="two" to="/signup">
                        Register
                     </Link>
                  </li>
               </ul>
               <div
                  className={state.icon}
                  onClick={() => dispatch({ type: "toggleIcon" })}
               >
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
               <div className="header-right">
                  <Link to="/login" className="header-button-1">
                     Login
                  </Link>
                  <Link to="/signup" className="header-button-2">
                     Register
                  </Link>
               </div>
            </div>
            <div className={"overlay " + (state.overlay ? "active" : "")}></div>
         </Content>
      </Wrapper>
   );
};

export default Navbar;
