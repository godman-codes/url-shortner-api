import React from "react";
import NavBar from "../components/Navbar/Navbar";
import BannerOne from "../components/BannerOne";

const Home = () => {
   return (
      <>
         <NavBar />
         <BannerOne />
         <div style={{ paddingTop: "91px", color: "white" }}>
            <p>Home</p>
         </div>
      </>
   );
};

export default Home;
