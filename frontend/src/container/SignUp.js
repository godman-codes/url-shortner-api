import React from "react";
import RegisterPageComponent from "../components/Register";
import { connect } from "react-redux";
import { Signup } from "../actions/auth";

const SignUp = ({ Signup, message }) => {
   const handleSignup = async (
      first_name,
      last_name,
      email,
      password,
      re_password
   ) => {
      await Signup(first_name, last_name, email, password, re_password);
   };
   return <RegisterPageComponent handler={handleSignup} err={message} />;
};

const mapStateToProps = (state) => ({
   message: state.auth.signalMessages,
});
export default connect(mapStateToProps, { Signup })(SignUp);
