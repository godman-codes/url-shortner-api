import React from "react";
// import NavBar from "../components/Navbar/Navbar";
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
// import Navbar from "../components/NewNavbar";
import Navbar from "../components/Navbar/Navbar";
const Home = ({ shortenUrl, all_urls }) => {
   const actions = async (body) => {
      console.log(body);
      shortenUrl(body);
   };
   // console.log(all_urls);
   return (
      <>
         <Navbar />
         <BannerOne />
         <BannerContainer handler={actions} all_urls={all_urls} />
         <InformationSection />
         <FeaturesContainer />
         <HowContainer />
         <Testimonial />
         <CallInAction />
         <Footer />
      </>
   );
};
const mapStateToProps = (state) => ({
   all_urls: state.operations.all_urls,
});
export default connect(mapStateToProps, { shortenUrl })(Home);
