import React from "react";
import NavBar from "../components/Navbar/Navbar";
import BannerOne from "../components/BannerOne";
import BannerContainer from "../components/BannerContainer";
const Home = () => {
   return (
      <>
         <NavBar />
         <BannerOne />
         <div style={{ paddingTop: "175px", color: "white" }}>home</div>
         <BannerContainer />
      </>
   );
};

export default Home;
