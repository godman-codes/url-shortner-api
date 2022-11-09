import React from "react";
import LoginPageComponent from "../components/Login";
import { login } from "../actions/auth";
import { connect } from "react-redux";

const Login = ({ login }) => {
   const handleLogin = async (email, password) => {
      // console.log(email, password);
      login(email, password);
   };
   return <LoginPageComponent handler={handleLogin} />;
};

export default connect(null, { login })(Login);
