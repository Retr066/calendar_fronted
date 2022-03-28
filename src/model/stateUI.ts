import { EventsProps } from "../pages/Calendar/model/Events";

export type initialStateModalProps = {
  modalIsOpen: boolean;
};

export type initialStateEventsProps = {
  events: EventsProps[];
  activeEvent: null | EventsProps;
};
