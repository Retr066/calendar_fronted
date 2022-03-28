import { TypesEvent } from "../model/types";
import { EventsProps } from "../pages/Calendar/model/Events";

export const eventAddNew = (event: EventsProps) => ({
  type: TypesEvent.eventAddNew,
  payload: event,
});
export const eventSetActive = (event: EventsProps) => ({
  type: TypesEvent.eventSetActive,
  payload: event,
});
export const eventClearActiveEvent = () => ({
  type: TypesEvent.eventClearActiveEvent,
});
export const eventUpdated = (event: EventsProps) => ({
  type: TypesEvent.eventUpdated,
  payload: event,
});
export const eventDeleted = () => ({
  type: TypesEvent.eventDeleted,
});
