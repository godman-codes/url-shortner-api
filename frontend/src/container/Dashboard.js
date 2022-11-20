import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import BannerOne from "../components/BannerOne";
import DashboardTable from "../components/DashboardTable";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { get_user_url } from "../actions/operations";

const Dashboard = ({ isAuthenticated, get_user_url }) => {
   // useEffect(() => {
   //    return get_user_url();
   // }, []);
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
export default connect(mapStateToProps, { get_user_url })(Dashboard);
