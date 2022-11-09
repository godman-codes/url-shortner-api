import React from "react";
import LoginPageComponent from "../components/Login";
import { login } from "../actions/auth";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const Login = ({ login, isAuthenticated }) => {
   const handleLogin = async (email, password) => {
      // console.log(email, password);
      login(email, password);
   };
   if (isAuthenticated) {
      return <Navigate to="/" />;
   }
   return <LoginPageComponent handler={handleLogin} />;
};
const mapStateToProps = (state) => ({
   isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
