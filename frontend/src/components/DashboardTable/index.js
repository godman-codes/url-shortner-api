import React, { useState } from "react";
import { Wrapper, Content } from "../BannerContainer/BannerContainer.styles";
import { Table } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const DashboardTable = ({ handler }) => {
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

   return (
      <Wrapper>
         <Content>
            <div className="top-message">
               <h1 class="title">Your Urls</h1>
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
                        <th>Original Link</th>
                        <th>short Link</th>
                        <th>Visited</th>
                        <th>Details</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>1</td>
                        <td>man</td>
                        <td>man</td>
                        <td>man</td>
                        <td>man</td>
                     </tr>
                     <tr>
                        <td>2</td>
                        <td>man</td>
                        <td>man</td>
                        <td>man</td>
                        <td>man</td>
                     </tr>
                  </tbody>
               </Table>
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
            </div>
         </Content>
      </Wrapper>
   );
};

export default DashboardTable;
