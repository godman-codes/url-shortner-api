import { URL_SHORTENING_SUCCESS, URL_SHORTENING_FAIL } from "./types";
import axios from "axios";

export const shortenUrl = (original_link) => async (dispatch) => {
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
   console.log(original_link);
   const body = JSON.stringify({ original_link });
   try {
      const res = await axios.post(
         `${process.env.REACT_APP_API_URL}/api/create/`,
         body,
         config
      );
      console.log(res.data);
      dispatch({
         type: URL_SHORTENING_SUCCESS,
         payload: res.data,
      });
   } catch (error) {
      console.log(error);
      dispatch({
         type: URL_SHORTENING_FAIL,
      });
   }
};
