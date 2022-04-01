interface LoginApiSuccessProps {
  fullName: string;
  msg: string;
  ok: boolean;
  token: string;
  uid: string;
}
interface LoginApiFailedProps {
  msg: string;
  ok: boolean;
}

export type LoginFetchProps = LoginApiSuccessProps | LoginApiFailedProps;
