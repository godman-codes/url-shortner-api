import React, { useEffect } from "react";
// import NavBar from "../components/Navbar/Navbar";
import { Wrapper } from "./styles";

const Layout = (props) => {
   const loader = document.getElementById("preloader");
   console.log(loader);
   window.addEventListener("load", function () {
      loader.style.display = "none";
   });
   useEffect(() => {
      const loader = document.getElementById("preloader");
      console.log(loader);
      window.addEventListener("load", function () {
         loader.style.display = "none";
      });
      return () =>
         document.body.removeEventListener("load", function () {
            loader.style.display = "none";
         });
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
export default Layout;
