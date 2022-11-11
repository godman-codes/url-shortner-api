import {
   LOGIN_FAIL,
   LOGIN_SUCCESS,
   AUTHENTICATED_SUCCESS,
   AUTHENTICATED_FAIL,
   LOGOUT,
} from "../actions/types";

const initialState = {
   access: localStorage.getItem("access"),
   refresh: localStorage.getItem("refresh"),
   isAuthenticated: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
   const { type, payload } = action;
   switch (type) {
      case LOGIN_SUCCESS:
         localStorage.setItem("access", payload.access);
         localStorage.setItem("refresh", payload.refresh);
         return {
            ...state,
            access: payload.access,
            refresh: payload.refresh,
            isAuthenticated: true,
         };
      case AUTHENTICATED_SUCCESS:
         return {
            ...state,
            isAuthenticated: true,
         };
      case LOGIN_FAIL:
         localStorage.removeItem("access");
         localStorage.removeItem("refresh");
         return {
            ...state,
            access: null,
            payload: null,
            isAuthenticated: false,
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
      case AUTHENTICATED_FAIL:
         return {
            ...state,
            isAuthenticated: false,
         };
      default:
         return state;
   }
}
