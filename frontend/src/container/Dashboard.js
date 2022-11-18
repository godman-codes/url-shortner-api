import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import BannerOne from "../components/BannerOne";
import DashboardTable from "../components/DashboardTable";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const Dashboard = ({ isAuthenticated }) => {
   if (!isAuthenticated) {
      return <Navigate to="/login" />;
   }

   return (
      <>
         <Navbar />
         <BannerOne />
         <DashboardTable />
      </>
   );
};
const mapStateToProps = (state) => ({
   isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, {})(Dashboard);
