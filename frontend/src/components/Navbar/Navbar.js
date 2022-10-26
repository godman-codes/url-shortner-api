import React, { useEffect, useState, useRef, useReducer } from "react";
import { Wrapper, Content, InnerWrapper } from "./Navbar.styles";
import { Link } from "react-router-dom";

const reducer = (state, action) => {
   switch (action.type) {
      case "toggleIcon":
         if (state.icon === "menu-icon") {
            return {
               ...state,
               icon: "menu-icon toggle",
               navbarToggle: "darkColored",
               expandMenu: "menu",
               overlay: true,
            };
         } else {
            return {
               ...state,
               icon: "menu-icon",
               navbarToggle: "",
               expandMenu: "menu active-menu",
               overlay: false,
            };
         }
      case "closeMenu":
         return {
            ...state,
            icon: "menu-icon",
            navbarToggle: "",
            expandMenu: "menu active-menu",
            overlay: false,
         };
      default:
         break;
   }
};

const NavBar = () => {
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
      if (window.scrollY >= 91) {
         setNavbar(true);
      } else {
         setNavbar(false);
      }
   };
   window.addEventListener("scroll", changeBackground);

   return (
      <Wrapper>
         <InnerWrapper
            id={navbar ? "colored" : ""}
            className={state.navbarToggle}
         >
            <Content>
               <div id="logo">
                  <p>Logo</p>
               </div>
               <ul className={state.expandMenu}>
                  <li>
                     <Link to="/login">Home</Link>
                  </li>
                  <li>
                     <Link to="/login">Faq</Link>
                  </li>
                  <li>
                     <Link to="/login">Contact</Link>
                  </li>
                  <li className="second-auth">
                     <Link to="/login">Login</Link>
                  </li>
                  <li className="second-auth">
                     <Link to="/signup">Register</Link>
                  </li>
               </ul>
               <div
                  ref={menuRef}
                  className={state.icon}
                  onClick={() => {
                     dispatch({ type: "toggleIcon" });
                  }}
               >
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
               </div>
               <div id="auth">
                  <Link id="login" to="/login">
                     LOGIN
                  </Link>
                  <Link id="signup" to="/signup">
                     REGISTER
                  </Link>
               </div>
               <div
                  className={"overlay " + (state.overlay ? "active" : "")}
               ></div>
            </Content>
         </InnerWrapper>
      </Wrapper>
   );
};

export default NavBar;
