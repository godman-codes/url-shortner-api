import {
   URL_SHORTENING_SUCCESS,
   URL_SHORTENING_FAIL,
   GET_ALL_URLS_SUCCESS,
   GET_ALL_URLS_FAIL,
   GET_URL_BY_ID_SUCCESS,
   GET_URL_BY_ID_FAIL,
   UPDATE_URL_SUCCESS,
   UPDATE_URL_FAIL,
   DELETE_URL_SUCCESS,
   DELETE_URL_FAIL,
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
      console.log(res);
      dispatch({
         type: URL_SHORTENING_SUCCESS,
         payload: res.data,
         message: res.statusText,
      });
   } catch (error) {
      console.log(error);
      dispatch({
         type: URL_SHORTENING_FAIL,
         message: error.response.data,
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

export const get_current_url = (id) => async (dispatch) => {
   if (localStorage.getItem("access")) {
      const config = {
         headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access")}`,
         },
      };
      try {
         const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/details/${id}/`,
            config
         );
         console.log(res);
         dispatch({
            type: GET_URL_BY_ID_SUCCESS,
            payload: res.data,
         });
      } catch (error) {
         console.log(error);
         dispatch({
            type: GET_URL_BY_ID_FAIL,
         });
      }
   } else {
      dispatch({
         type: GET_URL_BY_ID_FAIL,
      });
   }
};

export const update_url = (id, body) => async (dispatch) => {
   if (localStorage.getItem("access")) {
      const config = {
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access")}`,
         },
      };
      console.log(config, body, id);
      try {
         const res = await axios.put(
            `${process.env.REACT_APP_API_URL}/api/update/${id}/`,
            body,
            config
         );
         console.log(res);
         dispatch({ type: UPDATE_URL_SUCCESS, message: res.statusText });
      } catch (error) {
         console.log(error);
         dispatch({ type: UPDATE_URL_FAIL, message: error.response.data });
      }
   } else {
      dispatch({ type: UPDATE_URL_FAIL });
   }
};

export const delete_url = (id) => async (dispatch) => {
   if (localStorage.getItem("access")) {
      const config = {
         headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access")}`,
         },
      };
      try {
         const res = await axios.delete(
            `${process.env.REACT_APP_API_URL}/api/delete/${id}`,
            config
         );
         console.log(res);
         dispatch({ type: DELETE_URL_SUCCESS, message: res.statusText });
         alert("deleted successfully pls refresh to see changes");
      } catch (error) {
         console.log(error);
         dispatch({ type: DELETE_URL_FAIL });
         alert("unable to delete");
      }
   } else {
      dispatch({ type: DELETE_URL_FAIL });
      alert("unable to delete");
   }
};
