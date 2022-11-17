import {
   LOGIN_FAIL,
   LOGIN_SUCCESS,
   AUTHENTICATED_SUCCESS,
   AUTHENTICATED_FAIL,
   LOGOUT,
   SIGNUP_SUCCESS,
   SIGNUP_FAIL,
   USER_LOADED_SUCCESS,
   USER_LOADED_FAIL,
} from "../actions/types";

const initialState = {
   access: localStorage.getItem("access"),
   refresh: localStorage.getItem("refresh"),
   isAuthenticated: false,
   user: null,
   signalMessages: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
   const { type, payload, message } = action;
   switch (type) {
      case LOGIN_SUCCESS:
         localStorage.setItem("access", payload.access);
         localStorage.setItem("refresh", payload.refresh);
         return {
            ...state,
            access: payload.access,
            refresh: payload.refresh,
            isAuthenticated: true,
            signalMessages: message,
         };
      case SIGNUP_SUCCESS:
         return { ...state, signalMessages: message };

      case AUTHENTICATED_SUCCESS:
         return {
            ...state,
            isAuthenticated: true,
         };
      case USER_LOADED_SUCCESS:
         return {
            ...state,
            user: payload.user,
         };
      case USER_LOADED_FAIL:
         return {
            ...state,
            user: null,
         };
      case LOGIN_FAIL:
         localStorage.removeItem("access");
         localStorage.removeItem("refresh");
         return {
            ...state,
            access: null,
            refresh: null,
            isAuthenticated: false,
            signalMessages: message,
         };
      case LOGOUT:
         localStorage.removeItem("access");
         localStorage.removeItem("refresh");
         return {
            ...state,
            isAuthenticated: false,
            refresh: null,
            access: null,
         };
      case SIGNUP_FAIL:
         return {
            ...state,
            access: null,
            refresh: null,
            isAuthenticated: false,
            signalMessages: message,
         };
      case AUTHENTICATED_FAIL:
         return {
            ...state,
            isAuthenticated: false,
         };
      default:
         return state;
   }
}
