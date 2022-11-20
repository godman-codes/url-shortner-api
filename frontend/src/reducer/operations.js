import {
   URL_SHORTENING_FAIL,
   URL_SHORTENING_SUCCESS,
   GET_ALL_URLS_SUCCESS,
   GET_ALL_URLS_FAIL,
} from "../actions/types";

const initialState = {
   all_urls: JSON.parse(localStorage.getItem("all_urls")),
   server_urls: {},
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
      case GET_ALL_URLS_SUCCESS:
         return {
            ...state,
            server_urls: payload,
         };
      case GET_ALL_URLS_FAIL:
         return {
            ...state,
         };
      case URL_SHORTENING_FAIL:
         return {
            ...state,
         };
      default:
         return state;
   }
}
