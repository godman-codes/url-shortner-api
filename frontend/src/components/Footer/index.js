import React from "react";
import { Wrapper, Content } from "./styles";
import Wave from "../../images/wave.png";

const Footer = () => {
   return (
      <Wrapper>
         <div className="footer-bg"></div>
         <div className="footer-btm">
            <img src={Wave} alt="wave" />
         </div>
         <Content className="container">
            <div className="section-header">
               <h5 className="cate">Contact Us</h5>
               <h2 className="title">Get in touch</h2>
               <p>
                  We thrive to ensure that you get the most out of your
                  experience
               </p>
            </div>
            <div className="contact-form">
               <div className="form-group">
                  <label for="name">Your Full Name</label>
                  <input
                     type="text"
                     name="name"
                     id="name"
                     placeholder="Enter Your Full Name"
                  />
               </div>
               <div className="form-group">
                  <label for="email">Your Email</label>
                  <input
                     type="email"
                     name="email"
                     id="email"
                     placeholder="Enter Your Email"
                  />
               </div>
               <div className="form-group">
                  <label for="name">Message</label>
                  <textarea
                     name="message"
                     id="message"
                     placeholder="Enter Your Message"
                  ></textarea>
               </div>
               <div className="form-group check-group">
                  <input type="checkbox" id="check" required />
                  <label for="check">
                     I agree to receive emails, newsletters and promotional
                     messages
                  </label>
               </div>
               <div className="form-group">
                  <button type="submit">Send Message</button>
               </div>
            </div>
         </Content>
      </Wrapper>
   );
};

export default Footer;
