import { actionEvent } from "../model/actions";
import { initialStateEventsProps } from "../model/stateUI";
import { TypesEvent } from "../model/types";
import { EventsProps } from "../pages/Calendar/model/Events";

const initialState: initialStateEventsProps = {
  events: [],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action: actionEvent<EventsProps & EventsProps[]>): initialStateEventsProps => {
  switch (action.type) {
    case TypesEvent.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };
    case TypesEvent.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case TypesEvent.eventClearActiveEvent:
      return {
        ...state,
        activeEvent: null,
      };
    case TypesEvent.eventUpdated:
      return {
        ...state,
        events: state.events.map((event) => (event.id === action.payload.id ? action.payload : event)),
      };
    case TypesEvent.eventDeleted:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== state.activeEvent?.id),
        activeEvent: null,
      };
    case TypesEvent.eventLoaded:
      return {
        ...state,
        events: [...action.payload],
      };
    case TypesEvent.eventLogout:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
