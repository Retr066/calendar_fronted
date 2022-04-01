import { TypesAuth, TypesEvent, TypesModal } from "./types";

export interface actionUI<T> {
  type: TypesModal;
  payload: T;
}

export interface actionEvent<T> {
  type: TypesEvent;
  payload: T;
}

export interface actionAuth<T> {
  type: TypesAuth;
  payload: T;
}
