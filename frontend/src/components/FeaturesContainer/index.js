import React, { useReducer } from "react";
import { Wrapper, Content } from "./styles";
import TopShape from "../../images/top-shape.png";
import BottomShape from "../../images/bottom-shape.png";
import featureIcon1 from "../../images/01f.png";
import featureIcon2 from "../../images/02f.png";
import featureIcon3 from "../../images/03f.png";
import featureIcon4 from "../../images/04f.png";
import featureIcon5 from "../../images/05f.png";

const reducer = (state, action) => {
   switch (action.type) {
      case "first-icon":
         return {
            ...state,
            firstIcon: "tab-item active",
            secondIcon: "tab-item",
            thirdIcon: "tab-item",
            fourthIcon: "tab-item",
            fifthIcon: "tab-item",
         };
      case "second-icon":
         return {
            ...state,
            firstIcon: "tab-item",
            secondIcon: "tab-item active",
            thirdIcon: "tab-item",
            fourthIcon: "tab-item",
            fifthIcon: "tab-item",
         };
      case "third-icon":
         return {
            ...state,
            firstIcon: "tab-item",
            secondIcon: "tab-item",
            thirdIcon: "tab-item active",
            fourthIcon: "tab-item",
            fifthIcon: "tab-item",
         };
      case "fourth-icon":
         return {
            ...state,
            firstIcon: "tab-item",
            secondIcon: "tab-item",
            thirdIcon: "tab-item",
            fourthIcon: "tab-item active",
            fifthIcon: "tab-item",
         };
      case "fifth-icon":
         return {
            ...state,
            firstIcon: "tab-item",
            secondIcon: "tab-item",
            thirdIcon: "tab-item",
            fourthIcon: "tab-item",
            fifthIcon: "tab-item active",
         };

      default:
         break;
   }
};

const FeaturesContainer = () => {
   const [state, dispatch] = useReducer(reducer, {
      firstIcon: "tab-item active",
      secondIcon: "tab-item",
      thirdIcon: "tab-item",
      fourthIcon: "tab-item",
      fifthIcon: "tab-item",
   });

   return (
      <Wrapper>
         <div className="top-shape">
            <img src={TopShape} alt="css" />
         </div>
         <div className="bottom-shape">
            <img src={BottomShape} alt="css" />
         </div>
         <Content>
            <div className="section-header">
               <h2 className="title">All Features</h2>
               <p>
                  Mosto has plans, from free to paid, that scale with your
                  needs. Subscribe to a plan that fits the size of your
                  business.
               </p>
            </div>
            <div className="tab">
               <ul className="tab-menu">
                  <li>
                     <div
                        className="thumb"
                        onClick={() => {
                           dispatch({ type: "first-icon" });
                        }}
                     >
                        <img src={featureIcon1} alt="" />
                     </div>
                     <div className="content">%99 Uptime</div>
                  </li>
                  <li>
                     <div
                        className="thumb"
                        onClick={() => {
                           dispatch({ type: "second-icon" });
                        }}
                     >
                        <img src={featureIcon2} alt="" />
                     </div>
                     <div className="content">Easy Dashboard</div>
                  </li>
                  <li>
                     <div
                        className="thumb"
                        onClick={() => {
                           dispatch({ type: "third-icon" });
                        }}
                     >
                        <img src={featureIcon3} alt="" />
                     </div>
                     <div className="content">Referral Program</div>
                  </li>
                  <li>
                     <div
                        className="thumb"
                        onClick={() => {
                           dispatch({ type: "fourth-icon" });
                        }}
                     >
                        <img src={featureIcon4} alt="" />
                     </div>
                     <div className="content">1CLICK Script Installs</div>
                  </li>
                  <li>
                     <div
                        className="thumb"
                        onClick={() => {
                           dispatch({ type: "fifth-icon" });
                        }}
                     >
                        <img src={featureIcon5} alt="" />
                     </div>
                     <div className="content">Support</div>
                  </li>
               </ul>
               <div className="tab-area">
                  <div className={state.firstIcon}>
                     <div className="feature-item">
                        <h3 className="title"> %99 Uptime</h3>
                        <p>
                           We guarantee that our network will be up and
                           functioning 99.9% of the time per month. We feel a
                           safety net of .1% each month allows us time for
                           repairs and unforeseen events that may arise.
                           Furthermore, you can view our network status 24 hours
                           a day 365 days a year.
                        </p>
                     </div>
                  </div>
                  <div className={state.secondIcon}>
                     <div className="feature-item">
                        <h3 className="title">Easy Dashboard</h3>
                        <p>
                           We guarantee that our network will be up and
                           functioning 99.9% of the time per month. We feel a
                           safety net of .1% each month allows us time for
                           repairs and unforeseen events that may arise.
                           Furthermore, you can view our network status 24 hours
                           a day 365 days a year.
                        </p>
                     </div>
                  </div>
                  <div className={state.thirdIcon}>
                     <div className="feature-item">
                        <h3 className="title">Referral Program</h3>
                        <p>
                           We guarantee that our network will be up and
                           functioning 99.9% of the time per month. We feel a
                           safety net of .1% each month allows us time for
                           repairs and unforeseen events that may arise.
                           Furthermore, you can view our network status 24 hours
                           a day 365 days a year.
                        </p>
                     </div>
                  </div>
                  <div className={state.fourthIcon}>
                     <div className="feature-item">
                        <h3 className="title">1CLICK Script Installs</h3>
                        <p>
                           We guarantee that our network will be up and
                           functioning 99.9% of the time per month. We feel a
                           safety net of .1% each month allows us time for
                           repairs and unforeseen events that may arise.
                           Furthermore, you can view our network status 24 hours
                           a day 365 days a year.
                        </p>
                     </div>
                  </div>
                  <div className={state.fifthIcon}>
                     <div className="feature-item">
                        <h3 className="title">Support</h3>
                        <p>
                           We guarantee that our network will be up and
                           functioning 99.9% of the time per month. We feel a
                           safety net of .1% each month allows us time for
                           repairs and unforeseen events that may arise.
                           Furthermore, you can view our network status 24 hours
                           a day 365 days a year.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </Content>
      </Wrapper>
   );
};

export default FeaturesContainer;
