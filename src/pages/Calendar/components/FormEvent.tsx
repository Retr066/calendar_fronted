import { ErrorMessage, FastField, Field, Form, FormikErrors, FormikProps, withFormik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import { eventStartAddNew, eventStartUpdated } from "../../../actions/events";

import { EventsProps, ValuesFormModalProps } from "../model/Events";

import { DatePicker } from "./DatePicker";
import { ErrorAlert } from "./ErrorAlert";
interface MyFormProps {
  title: string;
  values: ValuesFormModalProps;
  activeEvent: null | EventsProps;
  closeModal: Function;
}
export const FormEvent = ({ title, values, activeEvent, closeModal }: MyFormProps) => {
  const dispatch = useDispatch();
  const InnerForm = (props: MyFormProps & FormikProps<ValuesFormModalProps>) => {
    const { values, errors, isSubmitting, title } = props;
    return (
      <>
        <h1> {title} </h1>
        <hr />
        <Form className="container">
          <div className="form-group mb-2 ">
            <label htmlFor="start">Fecha y hora inicio</label>
            <DatePicker className="form-control" name="start" />

            <ErrorMessage name="start" component={ErrorAlert} />
          </div>

          <div className="form-group">
            <label htmlFor="end">Fecha y hora fin</label>
            <DatePicker className={`form-control mb-2 ${errors.end && "is-invalid"}`} name="end" minDate={values.start} />

            <ErrorMessage name="end" component={ErrorAlert} />
          </div>

          <hr />

          <div className="form-floating">
            <Field
              type="text"
              className={`form-control ${errors.title && "is-invalid"}`}
              placeholder="Título del evento"
              name="title"
              id="title"
              autoComplete="off"
            />
            <label htmlFor="title">Titulo</label>
            <small id="emailHelp" className="form-text text-muted">
              Una descripción corta
            </small>
            <ErrorMessage name="title" component={ErrorAlert} />
          </div>

          <div className="form-floating">
            <Field
              id="notes"
              as="textarea"
              className={`form-control ${errors.notes && "is-invalid"}`}
              placeholder="Notas"
              style={{ height: "100px" }}
              name="notes"
            ></Field>
            <label htmlFor="notes">Notas</label>
            <small id="emailHelp" className="form-text text-muted">
              Información adicional
            </small>
            <ErrorMessage component={ErrorAlert} name="notes" />
          </div>

          <div className="form-group mb-2">
            <label htmlFor="bgcolor">Seleccione el color</label>

            <FastField type="color" className="form-control form-control-color" value={values.bgcolor} name="bgcolor" id="bgcolor" />
            <ErrorMessage name="bgcolor" component={ErrorAlert} />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-outline-primary" disabled={isSubmitting}>
              <i className="far fa-save"></i>
              <span> Guardar</span>
            </button>
          </div>
        </Form>
      </>
    );
  };

  const MyForm = withFormik<MyFormProps, ValuesFormModalProps>({
    // Transform outer props into form values
    mapPropsToValues: () => values,

    // Add a custom validation function (this can be async too!)
    validate: ({ title, notes, start, end, bgcolor }: ValuesFormModalProps) => {
      const momentStart = moment(start);
      const momentEnd = moment(end);
      let errors: FormikErrors<ValuesFormModalProps> = {};
      if (momentStart.isSameOrAfter(momentEnd)) {
        errors.end = "La fecha Inicial debe ser mayor ala fecha final";
      } else if (start == null) {
        errors.start = "La fecha inicial debe ser obligatorio";
      } else if (end == null) {
        errors.end = "La fecha final debe ser obligatorio";
      } else if (title.trim().length < 3) {
        errors.title = "El titulo debe ser mayor a 3 caracteres";
      } else if (notes.trim().length < 3) {
        errors.notes = "Las notas debe ser mayor a 3 caracteres";
      } else if (bgcolor.trim().length < 1 && bgcolor !== null) {
        errors.bgcolor = "El bgcolor Picker debe tener un bgcolor obligatorio";
      }
      return errors;
    },

    handleSubmit: (values: ValuesFormModalProps) => {
      if (activeEvent) {
        dispatch(
          eventStartUpdated({
            ...values,
            id: activeEvent.id,
            user: activeEvent.user,
          })
        );
      } else {
        dispatch(
          eventStartAddNew({
            ...values,
          })
        );
      }

      closeModal();
    },
    validateOnBlur: true,
    validateOnChange: false,
  })(InnerForm);
  return <MyForm title={title} values={values} activeEvent={activeEvent} closeModal={closeModal} />;
};
