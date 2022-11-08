import React, { useEffect, useState, useRef, useReducer } from "react";
import { Wrapper, Content, InnerWrapper } from "./Navbar.styles";
import { Link } from "react-router-dom";
import Logo from "../../images/logo_transparent.png";

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
      if (window.scrollY >= 80) {
         setNavbar(true);
      } else {
         setNavbar(false);
      }
   };
   window.addEventListener("scroll", changeBackground);
   // window.addEventListener("resize", (e) => {
   // this will fix the bug of over lay showing when you
   // resixe window away from the max-width of the drop down meneu
   //    dispatch({ type: "closeMenu" });
   // });

   return (
      <Wrapper>
         <InnerWrapper
            id={navbar ? "colored" : ""}
            className={state.navbarToggle}
         >
            <Content>
               <div id="logo">
                  <Link to="/">
                     <img src={Logo} alt="Logo" />
                  </Link>
               </div>
               <ul className={state.expandMenu}>
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/">Faq</Link>
                  </li>
                  <li>
                     <Link to="/">Contact</Link>
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
