import React, { useState } from "react";
import { Wrapper, Content } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import ErrorMessage from "../ErrorMessage";

const MoreDetails = ({ closeDetails, url, update_url, message }) => {
   const [showUpdate, setShowUpdate] = useState(false);
   const [formData, setFormData] = useState({ original_link: "" });
   const [showErr, setShowErr] = useState(false);

   const { original_link } = formData;
   //    console.log(url);

   const onChange = (e) => {
      if (showErr) {
         setShowErr(false);
      }
      setFormData({ ...formData, original_link: e.target.value });
   };

   const onSubmit = (e, id) => {
      e.preventDefault();
      update_url(id, formData);
      setShowErr(true);
   };

   return (
      <Wrapper>
         <Content>
            <div className="close" onClick={closeDetails}>
               <FontAwesomeIcon icon={faClose} />
            </div>
            <h5 className="title">MoreDetails</h5>
            {url ? (
               <div className="details">
                  <p>
                     Original Link:{" "}
                     <a
                        href={url.original_link}
                        target="_blank"
                        rel="noreferrer"
                     >
                        {url.original_link}
                     </a>
                  </p>
                  <p>
                     Short Link:{" "}
                     <a href={url.short_link} target="_blank" rel="noreferrer">
                        {url.short_link}
                     </a>
                  </p>
                  <p>Visit: {url.visited}</p>
                  <p>Date Created: {url.date_created.slice(0, 10)}</p>
                  <p>Time Created: {url.date_created.slice(11, 19)}</p>
                  <div className={showUpdate ? "vanish" : "action"}>
                     <button
                        onClick={() => {
                           setShowUpdate(true);
                        }}
                     >
                        Update
                     </button>
                     <br />
                     <button>Delete</button>
                  </div>
                  <div className={showUpdate ? "update" : "vanish"}>
                     {showErr && (
                        <ErrorMessage
                           message={
                              message === "OK" ? "Url updated successfully" : ""
                           }
                           color="green"
                        />
                     )}
                     <form onSubmit={(e) => onSubmit(e, url.id)}>
                        <label htmlFor="original_link">New long Link</label>
                        <input
                           type="text"
                           placeholder="Enter New Link"
                           onChange={(e) => onChange(e)}
                           required
                           name="original_link"
                           value={original_link}
                        />
                        {showErr && (
                           <ErrorMessage
                              message={
                                 message.original_link
                                    ? message.original_link[0]
                                    : ""
                              }
                           />
                        )}
                        <div>
                           <button>Submit</button>
                           <div
                              className="back"
                              onClick={() => setShowUpdate(false)}
                           >
                              <FontAwesomeIcon icon={faAngleDoubleLeft} />
                              Back
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            ) : (
               <div>Not Found</div>
            )}
         </Content>
      </Wrapper>
   );
};

export default MoreDetails;
