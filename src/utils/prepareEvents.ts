import { EventsProps } from "../pages/Calendar/model/Events";
import moment from "moment";
export const prepareEvents = (events: EventsProps[]) => {
  return events.map((event) => ({
    ...event,
    end: moment(event.end).toDate(),
    start: moment(event.start).toDate(),
  }));
};
