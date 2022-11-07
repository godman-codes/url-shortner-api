import React from "react";
import NavBar from "../components/Navbar/Navbar";
import BannerOne from "../components/BannerOne";
import BannerContainer from "../components/BannerContainer";
import InformationSection from "../components/InformationSection";
import FeaturesContainer from "../components/FeaturesContainer";
import HowContainer from "../components/HowContainer";
import Testimonial from "../components/Testimonial";
import CallInAction from "../components/CallInAction";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { shortenUrl } from "../actions/operations";

const Home = ({ shortenUrl }) => {
   const actions = async (body) => {
      console.log(body);
      shortenUrl(body);
   };
   return (
      <>
         <NavBar />
         <BannerOne />
         <BannerContainer handler={actions} />
         <InformationSection />
         <FeaturesContainer />
         <HowContainer />
         <Testimonial />
         <CallInAction />
         <Footer />
      </>
   );
};

export default connect(null, { shortenUrl })(Home);
