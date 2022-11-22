import React, { useState } from "react";
import { Wrapper, Content } from "./styles";
import { Link } from "react-router-dom";
import Logo from "../../images/logo_transparent.png";
import Google from "../../images/google.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import ErrorMessage from "../ErrorMessage";
// import SnackBar from "../Snackbar";

const LoginPageComponent = ({ handler, err }) => {
   const [showErr, setShowErr] = useState(false);
   const [formData, setFormData] = useState({ email: "", password: "" });
   const { email, password } = formData;

   const onChange = (e) => {
      // console.log(e.target.value);
      if (showErr) {
         setShowErr(false);
      }
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };
   const onSubmit = async (e) => {
      e.preventDefault();
      // console.log(e);
      // console.log(email, password, "line");
      await handler(email, password);
      console.log(err);
      setShowErr(true);
   };

   return (
      <Wrapper>
         <Content className="container">
            <div className="account-title">
               <Link className="back-home" to="/">
                  <FontAwesomeIcon icon={faAngleDoubleLeft} />
                  &nbsp; <span>Back</span>
               </Link>
               <Link className="logo" to="/">
                  <img src={Logo} alt="logo" />
                  <span>Godman</span>
               </Link>
            </div>
            <div className="account-wrapper">
               <div className="account-body">
                  <h4 className="title">Welcome to Godman Shorts</h4>
                  <form className="account-form" onSubmit={(e) => onSubmit(e)}>
                     <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                           type="email"
                           placeholder="Enter Your Email"
                           name="email"
                           value={email}
                           onChange={(e) => onChange(e)}
                           required
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                           type="password"
                           placeholder="Enter Your Password"
                           name="password"
                           value={password}
                           onChange={(e) => onChange(e)}
                           required
                        />
                        {showErr && (
                           <ErrorMessage
                              message={
                                 err === "Unauthorized"
                                    ? "Email or password is incorrect. Try again."
                                    : ""
                              }
                           />
                        )}
                        <span className="forget-password">
                           Forgot your password?{" "}
                           <Link to="#0">recover password</Link>
                        </span>
                     </div>
                     <div className="form-group text-center">
                        <button type="submit">Sign In</button>
                     </div>
                  </form>
               </div>
               <div className="or">
                  <span>OR</span>
               </div>
               <div className="account-header">
                  <span className="work-email">
                     Sign up with your work email
                  </span>
                  <Link className="sign-in-with" to="#0">
                     <img src={Google} alt="Google" />
                     <span className="google">Sign Up with Google</span>
                  </Link>
                  <span className="no-account">
                     Don't have an account?{" "}
                     <Link to="/signup">Sign Up Here </Link>
                  </span>
               </div>
            </div>
         </Content>
      </Wrapper>
   );
};

export default LoginPageComponent;
