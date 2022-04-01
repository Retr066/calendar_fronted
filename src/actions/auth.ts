import { LoginFetchProps } from "./../model/reponseApi";
import {
  checkingFinishProps,
  LoginProps,
  LogoutProps,
  startCheckingProps,
  startLoginProps,
  startLogoutProps,
  startRegisterProps,
} from "../model/actionsAuthRedux";
import { fetchWithToken, tokenLessFetch } from "../utils/fetch";
import { TypesAuth } from "../model/types";
import { Toast } from "../utils/configSwal";
import { eventLogout } from "./events";

export const startLogin: startLoginProps = (email, password) => {
  return async (dispatch) => {
    const res = await tokenLessFetch("auth", { email, password }, "POST");
    const body: LoginFetchProps = await res.json();
    console.log(body);
    if (body.ok && "token" in body) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime().toString());
      dispatch(Login({ uid: body.uid, fullName: body.fullName }));
    } else {
      Toast.fire({
        icon: "error",
        title: "<b>Error</b>: " + body.msg,
      });
    }
  };
};

export const startRegister: startRegisterProps = (user) => {
  return async (dispatch) => {
    const res = await tokenLessFetch("auth/new", user, "POST");
    const body: LoginFetchProps = await res.json();
    if (body.ok && "token" in body) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime().toString());
      dispatch(Login({ uid: body.uid, fullName: body.fullName }));

      Toast.fire({
        icon: "success",
        title: "<b>Bien</b>: " + body.msg,
      });
    } else {
      Toast.fire({
        icon: "error",
        title: "<b>Error</b>: " + body.msg,
      });
    }
  };
};

export const startChecking: startCheckingProps = () => {
  return async (dispatch) => {
    const res = await fetchWithToken("auth/renew");
    const body: LoginFetchProps = await res.json();

    if (body.ok && "token" in body) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime().toString());
      dispatch(Login({ uid: body.uid, fullName: body.fullName }));
    } else {
      dispatch(checkingFinish());
    }
  };
};
export const startLogout: startLogoutProps = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(eventLogout());
    dispatch(Logout());
  };
};
const checkingFinish: checkingFinishProps = () => ({
  type: TypesAuth.authCheckingFinish,
});
const Login: LoginProps = (user) => ({
  type: TypesAuth.authLogin,
  payload: user,
});
const Logout: LogoutProps = () => ({
  type: TypesAuth.authLogout,
});
