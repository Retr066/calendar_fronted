import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FormikErrors, FormikHelpers } from "formik";
import { loginFormProps } from "../models/LoginForm";
import { ErrorSpanSmall } from "../../../components/ErrorSpanSmall";
import validator from "validator";
import { useDispatch } from "react-redux";
import { startLogin } from "../../../actions/auth";
import { LoaderSpinner } from "../../../components/LoaderSpinner";

export const FormLogin = () => {
  const dispatch = useDispatch();
  const initialValues: loginFormProps = { email: "", password: "" };

  const handleSubmit = async ({ email, password }: loginFormProps, formikBag: FormikHelpers<loginFormProps>) => {
    formikBag.setSubmitting(true);
    await dispatch(startLogin(email, password));
    formikBag.setSubmitting(false);
    // formikBag.setErrors({ password: "El email o contraseña son incorrectos" });
  };
  const handleValidate = ({ email, password }: loginFormProps) => {
    let errors: FormikErrors<loginFormProps> = {};
    if (!validator.isEmail(email)) {
      errors.email = "Debe ser un email valido";
    } else if (validator.isEmpty(password)) {
      errors.password = "La contraseña es obligatoria";
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
              top: "15px",
              left: "calc(50% - 80px)",
            }}
            src="https://res.cloudinary.com/dsulcam/image/upload/v1624776603/skueresoft_qoczsy.png"
            alt="Skere-soft"
          />

          <h3 className="h3 text-white text-center">Inicia Sesión</h3>
          <hr className="bg-light" />
          <div className="form-floating mb-3">
            <Field
              type="email"
              className="form-control"
              id="floatingInput"
              name="email"
              placeholder="name@example.com"
              autoComplete="new-off"
            />
            <label htmlFor="floatingInput">Escribe tu correo electrónico</label>
            <ErrorMessage name="email" component={ErrorSpanSmall} />
          </div>
          <div className="form-floating mb-3">
            <Field type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" />
            <label htmlFor="floatingPassword">Escribe tu contraseña</label>
            <ErrorMessage name="password" component={ErrorSpanSmall} />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-outline-light" disabled={isSubmitting}>
              {isSubmitting ? <LoaderSpinner /> : "Iniciar Sesión"}
            </button>
          </div>
          <p className="text-white text-center mt-3">Iniciar sesión con redes sociales</p>
          <div className="row gap-3 d-flex justify-content-center">
            <div className="col-6 col-md-5 btn btn-outline-light d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.25em"
                height="1.25em"
                viewBox="0 0 184 184"
                className="me-2"
                fill="currentColor"
              >
                <path
                  d="M40.778,199.771l-6.4,23.91-23.409.5a92.161,92.161,0,0,1-.677-85.909h.005l20.841,3.821,9.13,20.716a54.906,54.906,0,0,0,.516,36.967Z"
                  transform="translate(0 -88.578)"
                  fill="#fbbb00"
                ></path>
                <path
                  d="M350,208.176a91.965,91.965,0,0,1-32.8,88.932l-.005-.005-26.25-1.339-3.715-23.192a54.831,54.831,0,0,0,23.591-28H261.628v-36.4H350Z"
                  transform="translate(-167.605 -133.363)"
                  fill="#518ef8"
                ></path>
                <path
                  d="M169.136,361.955l.005.005A92.03,92.03,0,0,1,30.509,333.814l29.814-24.405a54.716,54.716,0,0,0,78.847,28.014Z"
                  transform="translate(-19.545 -198.215)"
                  fill="#28b446"
                ></path>
                <path
                  d="M169.061,21.18l-29.8,24.4A54.709,54.709,0,0,0,58.6,74.227L28.629,49.69h-.005A92.019,92.019,0,0,1,169.061,21.18Z"
                  transform="translate(-18.337)"
                  fill="#f14336"
                ></path>
              </svg>
              Google
            </div>

            <div className="col-6 col-md-5 btn btn-outline-light d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.25em"
                height="1.25em"
                viewBox="0 0 16 16"
                className="me-2"
                fill="currentColor"
              >
                <path d="M5.35161 12.8832C5.35161 12.9493 5.27742 13.0023 5.18387 13.0023C5.07742 13.0122 5.00323 12.9593 5.00323 12.8832C5.00323 12.817 5.07742 12.7641 5.17097 12.7641C5.26774 12.7541 5.35161 12.8071 5.35161 12.8832ZM4.34839 12.7343C4.32581 12.8005 4.39032 12.8766 4.4871 12.8964C4.57097 12.9295 4.66774 12.8964 4.6871 12.8302C4.70645 12.7641 4.64516 12.688 4.54839 12.6582C4.46452 12.635 4.37097 12.6681 4.34839 12.7343ZM5.77419 12.6781C5.68065 12.7012 5.61613 12.7641 5.62581 12.8402C5.63548 12.9063 5.71935 12.9493 5.81613 12.9262C5.90968 12.903 5.97419 12.8402 5.96452 12.774C5.95484 12.7111 5.86774 12.6681 5.77419 12.6781ZM7.89677 0C3.42258 0 0 3.48382 0 8.07266C0 11.7418 2.25161 14.8815 5.46774 15.9865C5.88065 16.0626 6.02581 15.8012 6.02581 15.5862C6.02581 15.3811 6.01613 14.2496 6.01613 13.5548C6.01613 13.5548 3.75806 14.0511 3.28387 12.5689C3.28387 12.5689 2.91613 11.6061 2.3871 11.358C2.3871 11.358 1.64839 10.8385 2.43871 10.8485C2.43871 10.8485 3.24194 10.9146 3.68387 11.7021C4.39032 12.9791 5.57419 12.6119 6.03548 12.3935C6.10968 11.8642 6.31935 11.4969 6.55161 11.2786C4.74839 11.0734 2.92903 10.8055 2.92903 7.62271C2.92903 6.71288 3.17419 6.25631 3.69032 5.67402C3.60645 5.45897 3.33226 4.5723 3.77419 3.42757C4.44839 3.21252 6 4.32086 6 4.32086C6.64516 4.13559 7.33871 4.03964 8.02581 4.03964C8.7129 4.03964 9.40645 4.13559 10.0516 4.32086C10.0516 4.32086 11.6032 3.20921 12.2774 3.42757C12.7194 4.57561 12.4452 5.45897 12.3613 5.67402C12.8774 6.25962 13.1935 6.71619 13.1935 7.62271C13.1935 10.8154 11.2935 11.0701 9.49032 11.2786C9.7871 11.5399 10.0387 12.0362 10.0387 12.8137C10.0387 13.9287 10.029 15.3083 10.029 15.5796C10.029 15.7946 10.1774 16.056 10.5871 15.9799C13.8129 14.8815 16 11.7418 16 8.07266C16 3.48382 12.371 0 7.89677 0ZM3.13548 11.4109C3.09355 11.444 3.10323 11.5201 3.15806 11.5829C3.20968 11.6359 3.28387 11.659 3.32581 11.616C3.36774 11.5829 3.35806 11.5069 3.30323 11.444C3.25161 11.3911 3.17742 11.3679 3.13548 11.4109ZM2.7871 11.1429C2.76452 11.1859 2.79677 11.2389 2.86129 11.272C2.9129 11.305 2.97742 11.2951 3 11.2488C3.02258 11.2058 2.99032 11.1528 2.92581 11.1198C2.86129 11.0999 2.80968 11.1098 2.7871 11.1429ZM3.83226 12.3207C3.78065 12.3637 3.8 12.463 3.87419 12.5259C3.94839 12.602 4.04194 12.6119 4.08387 12.5589C4.12581 12.5159 4.10645 12.4167 4.04194 12.3538C3.97097 12.2777 3.87419 12.2678 3.83226 12.3207ZM3.46452 11.8344C3.4129 11.8675 3.4129 11.9535 3.46452 12.0296C3.51613 12.1057 3.60323 12.1388 3.64516 12.1057C3.69677 12.0627 3.69677 11.9767 3.64516 11.9006C3.6 11.8245 3.51613 11.7914 3.46452 11.8344Z"></path>
              </svg>
              GitHub
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <span className="text-white align-self-end me-1">¿No tienes una cuenta?</span>
            <Link to="/auth/register" className="link-light mt-3 ">
              Regístrate aquí
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};
