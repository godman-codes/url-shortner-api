import React, { useEffect, useState, useRef } from "react";
import { Wrapper, Content, InnerWrapper } from "./Navbar.styles";
import { Link } from "react-router-dom";

const NavBar = () => {
   const [navbar, setNavbar] = useState(false);
   const [icon, setIcon] = useState("menu-icon");
   const [navbarToggle, setNavbarToggle] = useState("");
   const [expandMenu, setExpandMenu] = useState("menu active-menu");
   const [overlay, setOverlay] = useState(false);
   const menuRef = useRef();

   const navToggle = () => {
      // Icon Toggler
      if (icon === "menu-icon") {
         setIcon("menu-icon toggle");
         setNavbarToggle("darkColored");
      } else {
         setIcon("menu-icon");
         setNavbarToggle("");
      }
      if (expandMenu === "menu active-menu") {
         setExpandMenu("menu");
         setOverlay(true);
      } else {
         setExpandMenu("menu active-menu");
         setOverlay(false);
      }
   };

   useEffect(() => {
      const closeDropdown = (e) => {
         if (e.path[0] !== menuRef.current) {
            setIcon("menu-icon");
            setNavbarToggle("");
            setExpandMenu("menu active-menu");
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
         <InnerWrapper id={navbar ? "colored" : ""} className={navbarToggle}>
            <Content>
               <div id="logo">
                  <p>Logo</p>
               </div>
               <ul className={expandMenu}>
                  <li>
                     <Link to="/login">Home</Link>
                  </li>
                  <li>
                     <Link to="/login">Faq</Link>
                  </li>
                  <li>
                     <Link to="/login">Contact</Link>
                  </li>
               </ul>
               <div ref={menuRef} className={icon} onClick={navToggle}>
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
               <div className={"overlay " + (overlay ? "active" : "")}></div>
            </Content>
         </InnerWrapper>
      </Wrapper>
   );
};

export default NavBar;
