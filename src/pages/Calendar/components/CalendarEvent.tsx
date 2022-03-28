import { EventsProps } from "../model/Events";

export const CalendarEvent = ({ event }: { event: EventsProps }) => {
  const { title, user } = event;
  return (
    <div>
      <strong>{title}</strong>
      <span> - {user.name}</span>
    </div>
  );
};
