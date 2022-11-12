import React, { useState } from "react";
import { Wrapper, Content } from "./styles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/logo_transparent.png";
import Google from "../../images/google.png";

const RegisterPageComponent = ({ handler }) => {
   const [formData, setFormData] = useState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      re_password: "",
   });

   const { first_name, last_name, email, password, re_password } = formData;

   const onChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const onSubmit = (e) => {
      e.preventDefault();
      handler(first_name, last_name, email, password, re_password);
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
                  <img src={Logo} alt="Logo" />
                  <span>Godman</span>
               </Link>
            </div>
            <div className="account-wrapper">
               <div className="account-header">
                  <h4 className="title">Let's get started</h4>
                  <Link className="sign-in-with" to="#0">
                     <img src={Google} alt="Google-icon" />
                     <span>Sign Up with Google</span>
                  </Link>
               </div>
               <div className="or">
                  <span>or</span>
               </div>
               <div className="account-body">
                  <span className="work-email">
                     Sign up with your work email
                  </span>
                  <form onSubmit={(e) => onSubmit(e)} className="account-form">
                     <div className="form-group">
                        <label htmlFor="email">Email*</label>
                        <input
                           type="email"
                           placeholder="Email"
                           name="email"
                           required
                           onChange={(e) => onChange(e)}
                           value={email}
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="email">First Name*</label>
                        <input
                           type="text"
                           placeholder="First Name"
                           name="first_name"
                           required
                           onChange={(e) => onChange(e)}
                           value={first_name}
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="email">Last Name*</label>
                        <input
                           type="text"
                           placeholder="Last Name"
                           name="last_name"
                           required
                           onChange={(e) => onChange(e)}
                           first_name={last_name}
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="password">Password*</label>
                        <input
                           type="password"
                           placeholder="Password"
                           name="password"
                           required
                           onChange={(e) => onChange(e)}
                           value={password}
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="password">Confirm Password*</label>
                        <input
                           type="password"
                           placeholder="Confirm Password"
                           name="re_password"
                           value={re_password}
                           required
                           onChange={(e) => onChange(e)}
                        />
                     </div>
                     <div className="form-group text-center">
                        <button type="submit">Sign Up</button>
                        <span>
                           Already have an account?
                           <Link to="/login">Sign In</Link>
                        </span>
                     </div>
                  </form>
               </div>
            </div>
         </Content>
      </Wrapper>
   );
};

export default RegisterPageComponent;
