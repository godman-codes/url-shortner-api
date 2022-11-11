import React, { useState, useReducer, useEffect, useRef } from "react";
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
               navbarToggle: "darkColored-nav",
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
   const menuRef = useRef();

   const [state, dispatch] = useReducer(reducer, {
      icon: "menu-icon",
      navbarToggle: "",
      expandMenu: "menu active-menu",
      overlay: false,
   });

   useEffect(() => {
      const closeDropdown = (e) => {
         if (e.path[0] !== menuRef.current) {
            dispatch({ type: "closeMenu" });
         }
      };
      document.body.addEventListener("click", closeDropdown);
      return () => document.body.removeEventListener("click", closeDropdown);
   }, []);

   const changeBackground = () => {
      if (window.scrollY >= 80) {
         setNavbar(true);
      } else {
         setNavbar(false);
      }
   };
   window.addEventListener("scroll", changeBackground);
   return (
      <Wrapper className={navbar ? "colored-nav" : state.navbarToggle}>
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
                  ref={menuRef}
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
