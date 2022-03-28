import { Navbar } from "./components/Navbar";
import { Calendar, EventPropGetter, momentLocalizer, View } from "react-big-calendar";
import moment from "moment";
import { messages } from "./utils/calendarMessage-es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/es";
import { CalendarEvent } from "./components/CalendarEvent";
import { EventsProps } from "./model/Events";
import { useState } from "react";
import { CalendarModal } from "./components/CalendarModal";
import { initialStateEventsProps, initialStateModalProps } from "../../model/stateUI";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../model/rootReducer";
import { uiOpenModal } from "../../actions/ui";
import { eventSetActive } from "../../actions/events";
import { AddNewFab } from "./components/AddNewFab";
import { DeleteEventFab } from "./components/DeleteEventFab";
import { initialStateForm } from "./utils/initialStateForm";
const localizer = momentLocalizer(moment);
moment.locale("es");

type EventCalendarProps = ((event: EventsProps, e: React.SyntheticEvent<HTMLElement>) => void) | undefined;
export const CalendarScreen = () => {
  const { modalIsOpen }: initialStateModalProps = useSelector((state: RootState) => state.ui);
  const { events, activeEvent }: initialStateEventsProps = useSelector((state: RootState) => state.calendar);
  const [formValues, setFormValues] = useState(initialStateForm);
  const dispatch = useDispatch();
  const initialState: View =
    localStorage.getItem("lastView") === "month"
      ? "month"
      : localStorage.getItem("lastView") === "week"
      ? "week"
      : localStorage.getItem("lastView") === "agenda"
      ? "agenda"
      : localStorage.getItem("lastView") === "day"
      ? "day"
      : localStorage.getItem("lastView") === "work_week"
      ? "work_week"
      : "month";

  const [lastView, setLastView] = useState(initialState);
  const evenStyleGetter: EventPropGetter<EventsProps> = (event) => {
    const { bgcolor } = event;
    const style = {
      backgroundColor: bgcolor,
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };
    return { style };
  };
  const onDoubleClick: EventCalendarProps = () => {
    dispatch(uiOpenModal());
  };
  const onSelectEvent: EventCalendarProps = (event, _) => {
    dispatch(eventSetActive(event));
  };
  const onViewChange = (view: View) => {
    setLastView(view);
    localStorage.setItem("lastView", view);
  };
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={evenStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        view={lastView}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
      />
      <AddNewFab setFormValues={setFormValues} />
      {activeEvent && <DeleteEventFab />}

      <CalendarModal modalIsOpen={modalIsOpen} formValues={formValues} setFormValues={setFormValues} />
    </div>
  );
};
