import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import BannerOne from "../components/BannerOne";
import DashboardTable from "../components/DashboardTable";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import {
   get_user_url,
   shortenUrl,
   get_current_url,
   update_url,
   delete_url,
} from "../actions/operations";
import Footer from "../components/Footer";
import MoreDetails from "../components/MoreDetails";

const Dashboard = ({
   isAuthenticated,
   get_user_url,
   shortenUrl,
   url,
   server_urls,
   get_current_url,
   current_url,
   update_url,
   message,
   delete_url,
}) => {
   const footer = useRef(null);
   const [trigger, setTrigger] = useState(true);
   const [showDetails, setShowDetails] = useState(false);
   useEffect(() => {
      return () => get_user_url();
   }, [trigger]);

   const focusFooter = () => {
      console.log("caller");
      footer.current.scrollIntoView({
         behavior: "smooth",
         block: "start",
      });
   };
   const openDetails = () => {
      setShowDetails(true);
   };
   const closeDetails = () => {
      setShowDetails(false);
   };

   const refresh = () => {
      setTrigger(!trigger);
   };
   // console.log(server_urls);

   const action2 = async (id) => {
      await get_current_url(id);
   };
   const action3 = async (body, id) => {
      await update_url(body, id);
   };
   const action4 = async (id) => {
      await delete_url(id);
      setShowDetails(false);
   };

   if (!isAuthenticated) {
      return <Navigate to="/login" />;
   }
   const action = async (body) => {
      await shortenUrl(body);
   };
   return (
      <>
         <Navbar footerCallBack={focusFooter} />
         <BannerOne />
         <DashboardTable
            server_urls={server_urls}
            url={url}
            handler={action}
            refresh={refresh}
            showDetails={openDetails}
            handler2={action2}
            message={message}
         />
         {showDetails && (
            <MoreDetails
               closeDetails={closeDetails}
               url={current_url}
               update_url={action3}
               message={message}
               delete_url_action={action4}
            />
         )}
         <Footer footerRef={footer} />
      </>
   );
};
const mapStateToProps = (state) => ({
   isAuthenticated: state.auth.isAuthenticated,
   url: state.operations.all_urls[state.operations.all_urls.length - 1],
   server_urls: state.operations.server_urls,
   current_url: state.operations.current_url,
   message: state.operations.signal_message,
});
export default connect(mapStateToProps, {
   get_user_url,
   shortenUrl,
   get_current_url,
   update_url,
   delete_url,
})(Dashboard);
