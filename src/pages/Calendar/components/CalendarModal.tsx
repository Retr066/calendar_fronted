import { FC, useEffect, useState } from "react";
import Modal from "react-modal";

import { customStyles } from "../utils/custom-styles-modal";

import { useDispatch, useSelector } from "react-redux";
import { uiCloseModal } from "../../../actions/ui";
import { initialStateModalProps } from "../../../model/stateUI";
import { FormEvent } from "./FormEvent";
import { initialStateForm } from "../utils/initialStateForm";
import { EventsProps, ValuesFormModalProps } from "../model/Events";
import { RootState } from "../../../model/rootReducer";
import { isValidDate } from "../utils/isValidateDate";
import { eventClearActiveEvent } from "../../../actions/events";

Modal.setAppElement("#root");

interface calendarProps extends initialStateModalProps {
  setFormValues: React.Dispatch<React.SetStateAction<ValuesFormModalProps>>;
  formValues: ValuesFormModalProps;
}

export const CalendarModal: FC<calendarProps> = ({ modalIsOpen, setFormValues, formValues }) => {
  const { activeEvent }: { activeEvent: EventsProps | null } = useSelector((state: RootState) => state.calendar);
  const initialStateTitle = "Nuevo Evento";
  const [title, setTitle] = useState<string>(initialStateTitle);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(uiCloseModal());
    dispatch(eventClearActiveEvent());
    setFormValues(initialStateForm);
  };

  useEffect(() => {
    if (activeEvent) {
      setFormValues({
        title: activeEvent.title,
        notes: activeEvent.notes,
        start: isValidDate(activeEvent.start),
        end: isValidDate(activeEvent.end),
        bgcolor: activeEvent.bgcolor,
      });
      setTitle("Editando Evento");
    } else setTitle(initialStateTitle);
  }, [activeEvent, setFormValues]);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        className="modal"
        overlayClassName="modal-fondo"
        contentLabel="Example Modal"
      >
        <FormEvent title={title} values={formValues} activeEvent={activeEvent} closeModal={closeModal} />
      </Modal>
    </div>
  );
};
