import { Link } from "react-router-dom";

export const FormRegister = () => {
  return (
    <form
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
        <input
          type="email"
          className="form-control"
          id="floatingInputFullName"
          placeholder="name@example.com"
          autoComplete="new-off"
        />
        <label htmlFor="floatingInputFullName">Nombres Completos</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInputEmail"
          placeholder="name@example.com"
          autoComplete="new-off"
        />
        <label htmlFor="floatingInputEmail">Correo electrónico</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Contraseña</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPasswordConfirm"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordConfirm">Repetir contraseña</label>
      </div>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-outline-light">
          Iniciar Sesión
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <span className="text-white align-self-end me-1">
          ¿Ya tienes cuenta?
        </span>
        <Link to="/auth/login" className="link-light mt-3 ">
          Inicia sesión
        </Link>
      </div>
    </form>
  );
};
