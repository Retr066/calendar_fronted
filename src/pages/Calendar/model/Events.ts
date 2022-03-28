import { stringOrDate } from "react-big-calendar";

export interface EventsProps {
  id: string;
  title: string;
  start: stringOrDate;
  end: stringOrDate;
  bgcolor: string;
  notes: string;
  user: {
    _id: string;
    name: string;
  };
}
export interface ValuesFormModalProps {
  title: string;
  notes: string;
  start: Date;
  end: Date;
  bgcolor: string;
}
