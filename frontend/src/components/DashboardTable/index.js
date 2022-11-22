import React, { useState } from "react";
import { Wrapper, Content } from "../BannerContainer/BannerContainer.styles";
import { Table, Refresh } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const DashboardTable = ({
   handler,
   url,
   refresh,
   server_urls,
   showDetails,
}) => {
   const [formData, setFormData] = useState({
      original_link: "",
   });

   // console.table(all_urls);

   const { original_link } = formData;
   const onChange = (e) => {
      console.log(e.target.value);
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };
   const onSubmit = (e) => {
      e.preventDefault();
      console.log(original_link);
      handler(original_link);
   };
   const copyAction = () => {
      // get the element
      let copy = document.getElementById("short-link");
      console.log(copy.textContent);
      // copy.selected();
      // copy.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copy.textContent);
      alert(`copied the link: ${copy.textContent}`);
   };

   return (
      <Wrapper>
         <Content>
            <div className="top-message">
               <h1 className="title">Your Urls</h1>
               <p>
                  A table containing your urls. table contains original urls
                  shortened url and number of time visited
               </p>
            </div>
            <div className="form-container">
               <h3 className="subtitle">Manage Your Links</h3>
               <Table>
                  <thead>
                     <tr>
                        <th>ID</th>
                        <th className="original_link">Original Link</th>
                        <th>short Link</th>
                        <th>Visit</th>
                        <th>Info</th>
                     </tr>
                  </thead>
                  <tbody>
                     {server_urls === [] ? (
                        <tr>
                           <td colSpan="7">No Urls</td>
                        </tr>
                     ) : (
                        server_urls.map((url, i) => (
                           <tr key={i}>
                              <td className="id">{i + 1}</td>
                              <td className="original_link">
                                 {url.original_link}
                              </td>
                              <td>{url.short_link}</td>
                              <td className="id">{url.visited}</td>
                              <td>
                                 <button onClick={showDetails}>more</button>
                              </td>
                           </tr>
                        ))
                     )}
                  </tbody>
               </Table>
               <Refresh>
                  <button onClick={refresh}>Refresh</button>
               </Refresh>
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
               <h5>Last Url Created</h5>
               <ul className="most-recent-links">
                  <li className="urls">
                     <span className="long-link">{url.original_link}</span>
                     <span className="other">
                        <span className="short-link">
                           <a
                              id="short-link"
                              href={url.short_link}
                              rel="noreferrer"
                              target="_blank"
                              title={`Shortened URL for ${url.original_link}`}
                           >
                              {url.short_link}
                           </a>
                        </span>
                        <span className="copy">
                           <button onClick={() => copyAction()}>Copy</button>
                        </span>
                     </span>
                  </li>
               </ul>
            </div>
         </Content>
      </Wrapper>
   );
};

export default DashboardTable;
