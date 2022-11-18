import React from "react";
import Navbar from "../components/Navbar/Navbar";
import BannerOne from "../components/BannerOne";
import DashboardTable from "../components/DashboardTable";

const Dashboard = () => {
   return (
      <>
         <Navbar />
         <BannerOne />
         <DashboardTable />
      </>
   );
};

export default Dashboard;
