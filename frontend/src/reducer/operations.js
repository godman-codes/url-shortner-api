import {
   URL_SHORTENING_FAIL,
   URL_SHORTENING_SUCCESS,
   GET_ALL_URLS_SUCCESS,
   GET_ALL_URLS_FAIL,
   GET_URL_BY_ID_SUCCESS,
   GET_URL_BY_ID_FAIL,
   UPDATE_URL_SUCCESS,
   UPDATE_URL_FAIL,
} from "../actions/types";

const initialState = {
   all_urls: JSON.parse(localStorage.getItem("all_urls")),
   server_urls: [],
   current_url: null,
   signal_message: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
   const { type, payload, message } = action;
   switch (type) {
      case URL_SHORTENING_SUCCESS:
         if (state.all_urls == null) {
            localStorage.setItem("all_urls", JSON.stringify([payload]));
            return {
               ...state,
               all_urls: [payload],
               signal_message: message,
            };
         } else {
            let man = JSON.parse(localStorage.getItem("all_urls"));
            man.push(payload);
            localStorage.setItem("all_urls", JSON.stringify(man));
            return {
               ...state,
               all_urls: man,
               signal_message: message,
            };
         }
      case GET_ALL_URLS_SUCCESS:
         return {
            ...state,
            server_urls: payload,
         };
      case GET_URL_BY_ID_SUCCESS:
         return {
            ...state,
            current_url: payload,
         };
      case UPDATE_URL_SUCCESS:
         return {
            ...state,
            signal_message: message,
         };
      case UPDATE_URL_FAIL:
         return {
            ...state,
            signal_message: message,
         };
      case GET_URL_BY_ID_FAIL:
         return {
            ...state,
            current_url: null,
         };

      case GET_ALL_URLS_FAIL:
         return {
            ...state,
         };
      case URL_SHORTENING_FAIL:
         return {
            ...state,
            signal_message: message,
         };
      default:
         return state;
   }
}
