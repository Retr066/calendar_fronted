import { Dispatch } from "redux";
import { EventsPreviewProps, EventsProps } from "../pages/Calendar/model/Events";

export type eventStartAddNewProps = (event: EventsPreviewProps) => (dispatch: Dispatch, getState: Function) => void;
export type eventStartLoadedProps = () => (dispatch: Dispatch) => void;
export type eventStartUpdatedProps = (event: EventsProps) => (dispatch: Dispatch) => void;
export type startEventDeletedProps = () => (dispatch: Dispatch, getState: Function) => void;
