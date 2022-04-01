import { actionAuth } from "../model/actions";
import { initialStateAuthProps } from "../model/stateUI";
import { TypesAuth } from "../model/types";

const initialState: initialStateAuthProps = {
  checking: true,
};

export const authReducer = (state = initialState, action: actionAuth<any>) => {
  switch (action.type) {
    case TypesAuth.authLogin:
      return {
        ...state,
        ...action.payload,
        checking: false,
      };
    case TypesAuth.authCheckingFinish:
      return {
        ...state,
        checking: false,
      };
    case TypesAuth.authLogout:
      return {
        checking: false,
      };
    default:
      return state;
  }
};
