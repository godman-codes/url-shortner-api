import { LOGIN_FAIL, LOGIN_SUCCESS } from "../actions/types";

const initialState = {
   access: localStorage.getItem("access"),
   refresh: localStorage.getItem("refresh"),
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
         };
      case LOGIN_FAIL:
         localStorage.removeItem("access");
         localStorage.removeItem("refresh");
         return {
            ...state,
            access: null,
            payload: null,
         };
      default:
         return state;
   }
}
