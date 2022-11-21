import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./styles";
import Wave from "../../images/wave.png";
import Neteller from "../../images/neteller.png";
import Paypal from "../../images/paypal.png";
import skrill from "../../images/skrill.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faFacebook,
   faGithub,
   faTwitter,
   faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ footerRef }) => {
   return (
      <Wrapper>
         <div className="footer-bg"></div>
         <div className="footer-btm">
            <img src={Wave} alt="wave" />
         </div>
         <Content className="container">
            <div ref={footerRef} className="section-header">
               <h5 className="cate">Contact Us</h5>
               <h2 className="title">Get in touch</h2>
               <p>
                  We thrive to ensure that you get the most out of your
                  experience
               </p>
            </div>
            <div className="contact-form">
               <div className="form-group">
                  <label htmlFor="name">Your Full Name</label>
                  <input
                     type="text"
                     name="name"
                     id="name"
                     placeholder="Enter Your Full Name"
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                     type="email"
                     name="email"
                     id="email"
                     placeholder="Enter Your Email"
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea
                     name="message"
                     id="message"
                     placeholder="Enter Your Message"
                  ></textarea>
               </div>
               <div className="form-group check-group">
                  <input type="checkbox" id="check" required />
                  <label htmlFor="check">
                     I agree to receive emails, newsletters and promotional
                     messages
                  </label>
               </div>
               <div className="form-group text-center">
                  <button type="submit">Send Message</button>
               </div>
            </div>
            <div className="footer-top">
               <div className="logo">
                  <Link to="/">Godman</Link>
               </div>
               <ul className="links">
                  <li>
                     <Link href="#0">
                        <img src={Neteller} alt="Neteller" />
                     </Link>
                  </li>
                  <li>
                     <Link href="#0">
                        <img src={skrill} alt="skrill" />
                     </Link>
                  </li>
                  <li>
                     <Link href="#0">
                        <img src={Paypal} alt="Paypal" />
                     </Link>
                  </li>
               </ul>
            </div>
            <div className="footer-bottom">
               <div className="footer-bottom-area">
                  <div className="left">
                     <p>
                        © Copyright 2020 |<Link to="#0">Godman</Link> By GODMAN
                     </p>
                  </div>
                  <div className="social-icons">
                     <li>
                        <Link className="active" to="#0">
                           <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                     </li>
                     <li>
                        <Link to="#0">
                           <FontAwesomeIcon icon={faGithub} />
                        </Link>
                     </li>
                     <li>
                        <Link to="#0">
                           <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                     </li>
                     <li>
                        <Link to="#0">
                           <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                     </li>
                  </div>
               </div>
            </div>
         </Content>
      </Wrapper>
   );
};

export default Footer;
