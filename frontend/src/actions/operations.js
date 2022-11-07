// import { URL_SHORTENING_SUCCESS, URL_SHORTENING_FAIL } from "./types"
import axios from "axios";

export const shortenUrl = (original_url) => async (dispatch) => {
   let config;
   if (localStorage.getItem("access")) {
      config = {
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            Accept: "application/json",
         },
      };
   } else {
      config = {
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },
      };
   }
   const body = JSON.stringify({ original_url });
   try {
      const res = await axios.post(
         `${process.env.REACT_APP_URL}/api/create/`,
         body,
         config
      );
      console.log(res);
      // dispatch({
      //     type: URL_SHORTENING_SUCCESS,
      //     payload: res.data,
      // })
   } catch (error) {}
};
