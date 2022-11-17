import {
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   AUTHENTICATED_SUCCESS,
   AUTHENTICATED_FAIL,
   LOGOUT,
   SIGNUP_SUCCESS,
   SIGNUP_FAIL,
   USER_LOADED_SUCCESS,
   USER_LOADED_FAIL,
} from "./types";
import axios from "axios";
// import { Navigate } from "react-router-dom";

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
         message: res.statusText,
      });
      dispatch(loadUser());
   } catch (err) {
      console.log(err);
      dispatch({
         type: LOGIN_FAIL,
         message: err.response.statusText,
      });
   }
};

export const Signup =
   (first_name, last_name, email, password, re_password) =>
   async (dispatch) => {
      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      const body = JSON.stringify({
         first_name,
         last_name,
         email,
         password,
         re_password,
      });

      try {
         const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/users/register/`,
            body,
            config
         );
         console.log(res);
         dispatch({
            type: SIGNUP_SUCCESS,
            message: res.statusText,
         });
      } catch (err) {
         dispatch({ type: SIGNUP_FAIL, message: err.response.data });
         console.log(err);
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
         console.log(res);
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
         console.log(err);
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

export const loadUser = () => async (dispatch) => {
   if (localStorage.getItem("access")) {
      const config = {
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            Accept: "application/json",
         },
      };
      try {
         const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/users/me/`,
            config
         );
         console.log(res);
         dispatch({
            type: USER_LOADED_SUCCESS,
            payload: res.data,
         });
      } catch (err) {
         console.log(err);
         dispatch({
            type: USER_LOADED_FAIL,
         });
      }
   } else {
      dispatch({
         type: USER_LOADED_FAIL,
      });
   }
};

export const logout = () => (dispatch) => {
   dispatch({
      type: LOGOUT,
   });
};
