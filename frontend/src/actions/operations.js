import {
   URL_SHORTENING_SUCCESS,
   URL_SHORTENING_FAIL,
   GET_ALL_URLS_SUCCESS,
   GET_ALL_URLS_FAIL,
} from "./types";
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

export const get_user_url = () => async (dispatch) => {
   if (localStorage.getItem("access")) {
      const config = {
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access")}`,
         },
      };
      try {
         console.log(config);
         const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/`,
            config
         );
         console.log(res);
         dispatch({
            type: GET_ALL_URLS_SUCCESS,
            payload: res.data,
         });
      } catch (error) {
         console.log(error);
         dispatch({
            type: GET_ALL_URLS_FAIL,
         });
      }
   } else {
      dispatch({ type: GET_ALL_URLS_FAIL });
   }
};
