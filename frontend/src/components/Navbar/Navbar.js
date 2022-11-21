import React, { useEffect, useState, useRef, useReducer } from "react";
import { Wrapper, Content, InnerWrapper } from "./Navbar.styles";
import { Link, Navigate } from "react-router-dom";
import Logo from "../../images/logo_transparent.png";
import { connect } from "react-redux";
import ProfileIcon from "../../images/profile.png";
import { logout } from "../../actions/auth";

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

const NavBar = ({ logout, isAuthenticated, footerCallBack }) => {
   const [navbar, setNavbar] = useState(false);
   const menuRef = useRef();
   const [state, dispatch] = useReducer(reducer, {
      icon: "menu-icon",
      navbarToggle: "",
      expandMenu: "menu active-menu",
      overlay: false,
   });
   const logout_user = () => {
      logout();
      return <Navigate to="/" />;
   };

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
                     {isAuthenticated ? (
                        <Link to="/dashboard">Dashboard</Link>
                     ) : (
                        <Link to="/">Home</Link>
                     )}
                  </li>
                  <li onClick={footerCallBack}>
                     <Link to="/">Contact</Link>
                  </li>
                  <li>
                     <Link to="/">Faq</Link>
                  </li>
                  {isAuthenticated ? (
                     <>
                        <li className="auth-extra">
                           <Link to="#!">Account</Link>
                           <img src={ProfileIcon} alt="Profile" />
                        </li>
                        <li className="second-auth">
                           <a onClick={logout_user} href="#!">
                              Logout
                           </a>
                        </li>
                     </>
                  ) : (
                     <>
                        <li className="second-auth">
                           <Link to="/login">Login</Link>
                        </li>
                        <li className="second-auth">
                           <Link to="/signup">Register</Link>
                        </li>
                     </>
                  )}
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
                  {isAuthenticated ? (
                     <>
                        <div id="profile">
                           <img src={ProfileIcon} alt="profile" />
                        </div>
                        <a onClick={logout_user} href="#!" id="signup">
                           LOGOUT
                        </a>
                     </>
                  ) : (
                     <>
                        <Link id="login" to="/login">
                           LOGIN
                        </Link>
                        <Link id="signup" to="/signup">
                           REGISTER
                        </Link>
                     </>
                  )}
               </div>
               <div
                  className={"overlay " + (state.overlay ? "active" : "")}
               ></div>
            </Content>
         </InnerWrapper>
      </Wrapper>
   );
};
const mapStateToProps = (state) => ({
   isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(NavBar);
