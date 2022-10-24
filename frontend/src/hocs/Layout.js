import React from "react";
import NavBar from "../components/Navbar/Navbar";

const Layout = (props) => {
   return (
      <div>
         <NavBar />
         {props.children}
      </div>
   );
};
export default Layout;
