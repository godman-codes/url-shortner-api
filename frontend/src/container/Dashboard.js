import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import BannerOne from "../components/BannerOne";
import DashboardTable from "../components/DashboardTable";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { get_user_url, shortenUrl } from "../actions/operations";

const Dashboard = ({
   isAuthenticated,
   get_user_url,
   shortenUrl,
   url,
   server_urls,
}) => {
   const [trigger, setTrigger] = useState(true);
   useEffect(() => {
      return () => get_user_url();
   }, [trigger]);

   const refresh = () => {
      setTrigger(!trigger);
   };
   console.log(server_urls);

   // if (!isAuthenticated) {
   //    return <Navigate to="/login" />;
   // }
   const action = async (body) => {
      await shortenUrl(body);
   };
   return (
      <>
         <Navbar />
         <BannerOne />
         <DashboardTable
            server_urls={server_urls}
            url={url}
            handler={action}
            refresh={refresh}
         />
      </>
   );
};
const mapStateToProps = (state) => ({
   isAuthenticated: state.auth.isAuthenticated,
   url: state.operations.all_urls[state.operations.all_urls.length - 1],
   server_urls: state.operations.server_urls,
});
export default connect(mapStateToProps, { get_user_url, shortenUrl })(
   Dashboard
);
