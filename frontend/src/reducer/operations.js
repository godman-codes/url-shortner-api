import { URL_SHORTENING_FAIL, URL_SHORTENING_SUCCESS } from "../actions/types";

const initialState = {
   access: localStorage.getItem("access"),
   refresh: localStorage.getItem("refresh"),
   isAuthenticated: null,
   user: null,
   url: localStorage.getItem("lastUrl"),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
   const { type, payload } = action;
   switch (type) {
      case URL_SHORTENING_SUCCESS:
         return {
            ...state,
            url: payload.url,
         };
      case URL_SHORTENING_FAIL:
         return {
            ...state,
            url: payload.url,
         };
      default:
         return state;
   }
}
