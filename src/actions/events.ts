import { eventStartAddNewProps, eventStartLoadedProps, eventStartUpdatedProps, startEventDeletedProps } from "../model/actionsEventRedux";
import { TypesEvent } from "../model/types";
import { EventsProps } from "../pages/Calendar/model/Events";
import { Toast } from "../utils/configSwal";
import { fetchWithToken } from "../utils/fetch";
import { prepareEvents } from "../utils/prepareEvents";

export const eventStartAddNew: eventStartAddNewProps = (event) => {
  return async (dispatch, getState) => {
    try {
      const { uid, fullName } = getState().auth;
      const resp = await fetchWithToken("events", event, "POST");
      const body = await resp.json();
      if (body.ok) {
        const newEvent: EventsProps = { ...event, id: body.event.id, user: { _id: uid, fullName: fullName } };
        dispatch(eventAddNew(newEvent));
      }
    } catch (error) {
      throw new Error("Error agregar nuevos eventos" + error);
    }
  };
};

export const eventStartLoaded: eventStartLoadedProps = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithToken("events");
      const body = await resp.json();
      const { allEvents } = body;

      const events = prepareEvents(allEvents);
      dispatch(eventLoaded(events));
    } catch (error) {
      throw new Error("Error al cargar los eventos" + error);
    }
  };
};
const eventLoaded = (events: any) => ({
  type: TypesEvent.eventLoaded,
  payload: events,
});

const eventAddNew = (event: EventsProps) => ({
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

export const eventStartUpdated: eventStartUpdatedProps = (event) => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithToken(`events/${event.id}`, event, "PUT");
      const body = await resp.json();
      if (body.ok) {
        dispatch(eventUpdated(event));
      } else {
        Toast.fire({
          icon: "error",
          title: "<b>Error</b>: " + body.msg,
        });
      }
    } catch (error) {
      throw new Error("Error al eliminar el evento" + error);
    }
  };
};

const eventUpdated = (event: EventsProps) => ({
  type: TypesEvent.eventUpdated,
  payload: event,
});

export const startEventDeleted: startEventDeletedProps = () => {
  return async (dispatch, getState) => {
    try {
      const { id } = getState().calendar.activeEvent;
      const resp = await fetchWithToken(`events/${id}`, {}, "DELETE");
      const body = await resp.json();
      if (body.ok) {
        dispatch(eventDeleted());
      } else {
        Toast.fire({
          icon: "error",
          title: "<b>Error</b>: " + body.msg,
        });
      }
    } catch (error) {
      throw new Error("Error al eliminar el evento" + error);
    }
  };
};

export const eventLogout = () => ({
  type: TypesEvent.eventLogout,
});
const eventDeleted = () => ({
  type: TypesEvent.eventDeleted,
});
