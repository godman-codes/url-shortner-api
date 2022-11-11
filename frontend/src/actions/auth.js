import {
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   AUTHENTICATED_SUCCESS,
   AUTHENTICATED_FAIL,
   LOGOUT,
} from "./types";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
   const config = {
      headers: {
         "Content-Type": "application/json",
      },
   };
   const body = JSON.stringify({ email, password });
   //    console.log(body);
   try {
      const res = await axios.post(
         `${process.env.REACT_APP_API_URL}/api/token/`,
         body,
         config
      );
      console.log(res);
      dispatch({
         type: LOGIN_SUCCESS,
         payload: res.data,
      });
   } catch (err) {
      console.log(err);
      dispatch({
         type: LOGIN_FAIL,
      });
   }
};

export const checkAuthenticated = () => async (dispatch) => {
   if (localStorage.getItem("access")) {
      const config = {
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },
      };
      const body = JSON.stringify({ token: localStorage.getItem("access") });
      try {
         const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/token/verify/`,
            body,
            config
         );
         console.log(res.data);
         if (res.data.code !== "token_not_valid") {
            dispatch({
               type: AUTHENTICATED_SUCCESS,
            });
         } else {
            dispatch({
               type: AUTHENTICATED_FAIL,
            });
         }
      } catch (err) {
         dispatch({
            type: AUTHENTICATED_FAIL,
         });
      }
   } else {
      dispatch({
         type: AUTHENTICATED_FAIL,
      });
   }
};

export const logout = () => (dispatch) => {
   dispatch({
      type: LOGOUT,
   });
};
