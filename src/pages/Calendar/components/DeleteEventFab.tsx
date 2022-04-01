import { useDispatch } from "react-redux";
import { startEventDeleted } from "../../../actions/events";

export const DeleteEventFab = () => {
  const dispatch = useDispatch();

  const handleDeleteEvent = () => {
    dispatch(startEventDeleted());
  };
  return (
    <button onClick={handleDeleteEvent} className="btn btn-outline-danger fab-danger">
      <i className="fas fa-trash"></i>
    </button>
  );
};
