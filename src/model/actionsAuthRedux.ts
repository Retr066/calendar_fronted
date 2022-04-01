import { Dispatch } from "redux";
import { actionAuth } from "./actions";
import { TypesAuth } from "./types";

export interface UserLoginProps {
  uid: string;
  fullName: string;
}

export interface UserRegisterProps {
  fullName: string;
  email: string;
  password: string;
  verifyPassword: string;
}

export type startLoginProps = (email: string, password: string) => (dispatch: Dispatch) => void;

export type startRegisterProps = (user: UserRegisterProps) => (dispatch: Dispatch) => void;
export type startCheckingProps = () => (dispatch: Dispatch) => void;
export type startLogoutProps = () => (dispatch: Dispatch) => void;
export type LoginProps = (user: UserLoginProps) => actionAuth<UserLoginProps>;

export type checkingFinishProps = () => { type: TypesAuth.authCheckingFinish };
export type LogoutProps = () => { type: TypesAuth.authLogout };
