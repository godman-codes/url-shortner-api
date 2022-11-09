import React, { useEffect } from "react";
// import NavBar from "../components/Navbar/Navbar";
import { Wrapper } from "./styles";
import { checkAuthenticated } from "../actions/auth";
import { connect } from "react-redux";

const Layout = (props) => {
   useEffect(() => {
      const loader = document.getElementById("preloader");
      window.addEventListener("load", function () {
         const loaded = () => {
            loader.style.display = "none";
         };
         setTimeout(loaded, 1000);
      });
      return () => {
         props.checkAuthenticated();
         document.body.removeEventListener("load", function () {
            loader.style.display = "none";
         });
      };
   }, []);
   return (
      <div>
         <Wrapper id="preloader">
            <div className="loader">
               <div className="loader-inner"></div>
            </div>
         </Wrapper>
         {props.children}
      </div>
   );
};
export default connect(null, { checkAuthenticated })(Layout);
