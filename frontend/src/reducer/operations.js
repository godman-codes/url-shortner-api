import { URL_SHORTENING_FAIL, URL_SHORTENING_SUCCESS } from "../actions/types";

const initialState = {
   // access: localStorage.getItem("access"),
   // refresh: localStorage.getItem("refresh"),
   // isAuthenticated: null,
   // user: null,
   all_urls: JSON.parse(localStorage.getItem("all_urls")),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
   const { type, payload } = action;
   switch (type) {
      case URL_SHORTENING_SUCCESS:
         if (state.all_urls == null) {
            localStorage.setItem("all_urls", JSON.stringify([payload]));
            return {
               ...state,
               all_urls: [payload],
            };
         } else {
            let man = JSON.parse(localStorage.getItem("all_urls"));
            man.push(payload);
            localStorage.setItem("all_urls", JSON.stringify(man));
            return {
               ...state,
               all_urls: man,
            };
         }
      case URL_SHORTENING_FAIL:
         return {
            ...state,
         };
      default:
         return state;
   }
}
