import { Link } from "react-router-dom";
import { Formik, Form, Field, FormikErrors, ErrorMessage, FormikHelpers } from "formik";
import { registerFormProps } from "../models/registerForm";
import validator from "validator";
import { ErrorSpanSmall } from "../../../components/ErrorSpanSmall";
import { useDispatch } from "react-redux";
import { startRegister } from "../../../actions/auth";
import { LoaderSpinner } from "../../../components/LoaderSpinner";

export const FormRegister = () => {
  const dispatch = useDispatch();
  const initialValues: registerFormProps = { fullName: "", email: "", password: "", verifyPassword: "" };

  const handleSubmit = async (values: registerFormProps, formikBag: FormikHelpers<registerFormProps>) => {
    formikBag.setSubmitting(true);
    await dispatch(startRegister(values));
    formikBag.setSubmitting(false);
  };
  const handleValidate = ({ fullName, email, password, verifyPassword }: registerFormProps) => {
    let errors: FormikErrors<registerFormProps> = {};
    if (fullName.trim().length < 3) {
      errors.fullName = "Tu nombre completo debe ser mayor a 3 caracteres";
    } else if (!validator.isEmail(email)) {
      errors.email = "Debe ser un email valido";
    } else if (password.trim().length < 6) {
      errors.password = "La contraseña es muy corta";
    } else if (password !== verifyPassword) {
      errors.verifyPassword = "Las contraseñas no coinciden";
    }
    return errors;
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={handleValidate}>
      {({ isSubmitting }) => (
        <Form
          style={{
            width: "400px",
            backgroundColor: "rgb(27 30 32)",
          }}
          className="rounded p-5"
        >
          <img
            style={{
              width: "180px",
              height: "180px",
              objectFit: "contain",
              position: "absolute",
              top: "0px",
              left: "calc(50% - 80px)",
            }}
            src="https://res.cloudinary.com/dsulcam/image/upload/v1624776603/skueresoft_qoczsy.png"
            alt="Skere-soft"
          />

          <h3 className="h3 text-white text-center">Crea tu cuenta</h3>
          <hr className="bg-light" />
          <div className="form-floating mb-3">
            <Field
              type="text"
              className="form-control"
              name="fullName"
              id="floatingInputFullName"
              placeholder="name@example.com"
              autoComplete="new-off"
            />
            <label htmlFor="floatingInputFullName">Nombres Completos</label>
            <ErrorMessage name="fullName" component={ErrorSpanSmall} />
          </div>
          <div className="form-floating mb-3">
            <Field
              type="email"
              className="form-control"
              name="email"
              id="floatingInputEmail"
              placeholder="name@example.com"
              autoComplete="new-off"
            />
            <label htmlFor="floatingInputEmail">Correo electrónico</label>
            <ErrorMessage name="email" component={ErrorSpanSmall} />
          </div>
          <div className="form-floating mb-3">
            <Field type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" />
            <label htmlFor="floatingPassword">Contraseña</label>
            <ErrorMessage name="password" component={ErrorSpanSmall} />
          </div>
          <div className="form-floating mb-3">
            <Field type="password" className="form-control" id="floatingPasswordConfirm" name="verifyPassword" placeholder="Password" />
            <label htmlFor="floatingPasswordConfirm">Repetir contraseña</label>
            <ErrorMessage name="verifyPassword" component={ErrorSpanSmall} />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-outline-light" disabled={isSubmitting}>
              {isSubmitting ? <LoaderSpinner /> : " Regístrate ahora"}
            </button>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <span className="text-white align-self-end me-1">¿Ya tienes cuenta?</span>
            <Link to="/auth/login" className="link-light mt-3 ">
              Inicia sesión
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};
