import { initialStateModalProps } from "./../model/stateUI";
import { actionUI } from "../model/actions";
import { TypesModal } from "../model/types";

type payloadProps = {
  modalIsOpen: boolean;
};
const initialState: initialStateModalProps = {
  modalIsOpen: false,
};

export const uiReducer = (state = initialState, action: actionUI<payloadProps>): initialStateModalProps => {
  switch (action.type) {
    case TypesModal.uiOpenModal:
      return {
        ...state,
        modalIsOpen: true,
      };
    case TypesModal.uiCloseModal:
      return {
        ...state,
        modalIsOpen: false,
      };
    default:
      return state;
  }
};
