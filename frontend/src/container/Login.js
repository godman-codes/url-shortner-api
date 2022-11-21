import React from "react";
import LoginPageComponent from "../components/Login";
import { login } from "../actions/auth";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
// import SnackBar from "../components/Snackbar";

const Login = ({ login, isAuthenticated, message }) => {
   const handleLogin = async (email, password) => {
      // console.log(email, password);
      await login(email, password);
   };
   if (isAuthenticated) {
      return <Navigate to="/dashboard" />;
   }
   return (
      <>
         {/* <SnackBar /> */}
         <LoginPageComponent handler={handleLogin} err={message} />
      </>
   );
};
const mapStateToProps = (state) => ({
   isAuthenticated: state.auth.isAuthenticated,
   message: state.auth.signalMessages,
});
export default connect(mapStateToProps, { login })(Login);
