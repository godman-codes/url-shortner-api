import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./styles";
import Image1 from "../../images/01in.png";
import Image2 from "../../images/02in.png";
import Image3 from "../../images/03in.png";
import Image4 from "../../images/04in.png";

const InformationSection = () => {
   return (
      <Wrapper>
         <Content>
            <div className="row">
               <div className="row-child-1">
                  <div className="why-join-us">
                     <h2 className="title">Why Join Us?</h2>
                     <p>
                        Godlinks is a completely free tool where you can create
                        short links, which apart from being free, you get paid!
                        So, now you can make money from home, when managing and
                        protecting your links.
                     </p>
                     <Link to="/signup">Create Your Account</Link>
                  </div>
               </div>
               <div className="row-child-2">
                  <div className="choose-item">
                     <div className="choose-thumb">
                        <img src={Image1} alt="why" />
                     </div>
                     <div className="choose-content">
                        <h5 className="title">JOIN OUR NETWORK</h5>
                        <p>
                           Signup for an account in just one minute, shorten
                           URLs and sharing your links to everywhere. And you'll
                           be paid from any views.
                        </p>
                     </div>
                  </div>
                  <div className="choose-item">
                     <div className="choose-thumb">
                        <img src={Image2} alt="why" />
                     </div>
                     <div className="choose-content">
                        <h5 className="title">HIGHEST RATES</h5>
                        <p>
                           Make the most out of your traffic with our always
                           increasing rates. You are required to earn only $5.00
                           before you will be paid.
                        </p>
                     </div>
                  </div>
                  <div className="choose-item">
                     <div className="choose-thumb">
                        <img src={Image3} alt="why" />
                     </div>
                     <div className="choose-content">
                        <h5 className="title">PAYMENTS ON TIME </h5>
                        <p>
                           We provide full mobile supports, you can even shorten
                           the URL, control your account and view the stats on a
                           mobile device.
                        </p>
                     </div>
                  </div>
                  <div className="choose-item">
                     <div className="choose-thumb">
                        <img src={Image4} alt="why" />
                     </div>
                     <div className="choose-content">
                        <h5 className="title">RESPONSIVE UI</h5>
                        <p>
                           Request payments whenever you want and get your
                           payments on 1st day and 15th day of every month.
                           Enjoy you Spendings!!
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </Content>
      </Wrapper>
   );
};

export default InformationSection;
