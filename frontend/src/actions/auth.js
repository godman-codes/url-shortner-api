import { LOGIN_SUCCESS, LOGIN_FAIL } from "./types";
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
