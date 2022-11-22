import React, { useState } from "react";
import { Wrapper, Content } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

const MoreDetails = ({ closeDetails }) => {
   const [showUpdate, setShowUpdate] = useState(false);

   return (
      <Wrapper>
         <Content>
            <div className="close" onClick={closeDetails}>
               <FontAwesomeIcon icon={faClose} />
            </div>
            <h5 className="title">MoreDetails</h5>
            <div className="details">
               <p>Original Link: </p>
               <p>Short Link: </p>
               <p>Visit: </p>
               <p>date-created: </p>
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
                  <form action="submit">
                     <label htmlFor="original_link">New long Link</label>
                     <input type="text" placeholder="Enter New Link" />
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
         </Content>
      </Wrapper>
   );
};

export default MoreDetails;
