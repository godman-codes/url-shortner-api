import React from "react";
import RegisterPageComponent from "../components/Register";
import { connect } from "react-redux";
import { Signup } from "../actions/auth";

const SignUp = ({ Signup }) => {
   const handleSignup = async (
      first_name,
      last_name,
      email,
      password,
      re_password
   ) => {
      Signup(first_name, last_name, email, password, re_password);
   };
   return <RegisterPageComponent handler={handleSignup} />;
};

export default connect(null, { Signup })(SignUp);
