import { URL_SHORTENING_FAIL, URL_SHORTENING_SUCCESS } from "../actions/types";

const initialState = {
   // access: localStorage.getItem("access"),
   // refresh: localStorage.getItem("refresh"),
   // isAuthenticated: null,
   // user: null,
   all_urls: localStorage.getItem("all_urls"),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
   const { type, payload } = action;
   switch (type) {
      case URL_SHORTENING_SUCCESS:
         localStorage.setItem("all_urls", state.all_urls + payload.url);
         return {
            ...state,
            all_urls: state.all_urls + payload.url,
         };
      case URL_SHORTENING_FAIL:
         return {
            ...state,
         };
      default:
         return state;
   }
}
