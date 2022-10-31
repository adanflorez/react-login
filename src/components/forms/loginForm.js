import { useRouter } from "next/router";
import React, { useState } from "react";
import api from "../../http/axios";
import services from "../../http/services";
import AlertError from "../alerts/error";

const LoginForm = () => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    if ([user, password].includes("")) {
      setError(true);
    } else {
      try {
        await services.login(user, password);
        router.push("/home");
      } catch (error) {
        alert("Usuario y/o contraseña invalida")
      }
    }
  };

  return (
    <div className="card p-3 mx-auto mt-5" style={{ width: "28rem" }}>
      <div className="card-body">
        <h5 className="card-title">Inicio de sesión</h5>
        {error ? (
          <AlertError
            message={"Debes ingresar usuario y contraseña"}
            setError={setError}
          />
        ) : null}
        <div className="mb-3">
          <label htmlFor="user" className="form-label">
            Usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="user"
            placeholder="usuario"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="d-grid gap-2">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSubmit}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
