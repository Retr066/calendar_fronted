import moment from "moment";
import { ValuesFormModalProps } from "../model/Events";

const now = moment().minutes(0).second(0).add(1, "hours");
const nowPlus1 = now.clone().add(1, "hours");
export const initialStateForm: ValuesFormModalProps = {
  title: "",
  notes: "",
  start: now.toDate(),
  end: nowPlus1.toDate(),
  bgcolor: "#800080",
};
