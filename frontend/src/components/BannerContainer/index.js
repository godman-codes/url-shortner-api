import React from "react";
import { Wrapper, Content } from "./BannerContainer.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const BannerContainer = ({ handler, all_urls }) => {
   const [formData, setFormData] = useState({
      original_link: "",
   });

   console.log(all_urls);

   const { original_link } = formData;

   const onChange = (e) => {
      console.log(e.target.value);
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };
   const onSubmit = (e) => {
      e.preventDefault();
      console.log(e);
      console.log(original_link);
      handler(original_link);
   };

   return (
      <Wrapper>
         <Content>
            <div className="top-message">
               <h3 className="cate">SHORTEN URLS AND</h3>
               <h1 className="title">EARN MONEY</h1>
               <p>
                  Transforming long, ugly links into Shorten URLs and earn big
                  money. Get paid by every person who visits your URLs.
               </p>
            </div>
            <div className="form-container">
               <h3 className="subtitle">Shorten URL Is Just Simple</h3>
               <form
                  className="form-container-form"
                  onSubmit={(e) => onSubmit(e)}
               >
                  <input
                     type="text"
                     placeholder="Your URL here"
                     onChange={(e) => onChange(e)}
                     value={original_link}
                     required
                     name="original_link"
                  />
                  <button type="submit">
                     Shorten <FontAwesomeIcon icon={faRocket} />
                  </button>
               </form>
               <ul className="most-recent-links">
                  {all_urls.map((url, i) => (
                     <li className="urls" key={i}>
                        <span className="long-link">{url.original_link}</span>
                        <span className="other">
                           <span className="short-link">
                              <a
                                 href={url.short_link}
                                 rel="noreferrer"
                                 target="_blank"
                                 title={`Shortened URL for ${url.original_link}`}
                              >
                                 {url.short_link}
                              </a>
                           </span>
                           <span className="copy">
                              <button>Copy</button>
                           </span>
                        </span>
                     </li>
                  ))}
               </ul>
               <div className="banner-counter">
                  <div className="counter-item">
                     <h2 className="counter-title">
                        <span className="counter">1,200,000</span>+
                     </h2>
                     <p>Links clicked per day</p>
                  </div>
                  <div className="counter-item">
                     <h2 className="counter-title">
                        <span className="counter">348,000,000</span>+
                     </h2>
                     <p>Shortened links in total</p>
                  </div>
                  <div className="counter-item">
                     <h2 className="counter-title">
                        <span className="counter">1,180,000</span>+
                     </h2>
                     <p>Happy users registered</p>
                  </div>
               </div>
            </div>
         </Content>
      </Wrapper>
   );
};

export default BannerContainer;
