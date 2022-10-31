import React from "react";
import NavBar from "../components/Navbar/Navbar";
import BannerOne from "../components/BannerOne";
import BannerContainer from "../components/BannerContainer";
import InformationSection from "../components/InformationSection";
import FeaturesContainer from "../components/FeaturesContainer";
import HowContainer from "../components/HowContainer";

const Home = () => {
   return (
      <>
         <NavBar />
         <BannerOne />
         <BannerContainer />
         <InformationSection />
         <FeaturesContainer />
         <HowContainer />
      </>
   );
};

export default Home;
