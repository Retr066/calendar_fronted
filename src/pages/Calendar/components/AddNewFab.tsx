import { FC } from "react";
import { useDispatch } from "react-redux";
import { eventClearActiveEvent } from "../../../actions/events";
import { uiOpenModal } from "../../../actions/ui";
import { ValuesFormModalProps } from "../model/Events";
import { initialStateForm } from "../utils/initialStateForm";

interface AddNewFabProps {
  setFormValues: React.Dispatch<React.SetStateAction<ValuesFormModalProps>>;
}
export const AddNewFab: FC<AddNewFabProps> = ({ setFormValues }) => {
  const dispatch = useDispatch();

  const handleEventNew = () => {
    dispatch(uiOpenModal());
    dispatch(eventClearActiveEvent());
    setFormValues(initialStateForm);
  };
  return (
    <button onClick={handleEventNew} className="btn btn-outline-primary fab">
      <i className="fa fa-plus"></i>
    </button>
  );
};
