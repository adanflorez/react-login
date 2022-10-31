import React, { useState } from "react";
import { useRouter } from "next/router";
import AlertError from "../alerts/error";
import services from "../../http/services";

const SignupForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    setError(false);
    if ([name, lastname, email, phone].includes("")) {
      setError(true);
    } else {
      try {
        await services.signup(name, lastname, phone, email);
        alert("Usuario registrado");
        router.push("/");
      } catch (error) {
        alert("Error al registrar al usuario");
      }
    }
  };
  return (
    <div className="card p-3 mx-auto my-5" style={{ width: "28rem" }}>
      <div className="card-body">
        <h3 className="card-title text-center">REGISTRO</h3>
        <p className="text-center">Por favor ingresa tus datos</p>
        {error ? (
          <AlertError
            message={"Debes ingresar todos los datos"}
            setError={setError}
          />
        ) : null}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="nombre"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            placeholder="Apellido"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
            Correo
          </label>
          <input
            type="email˝"
            className="form-control"
            id="correo"
            placeholder="Correo"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Teléfono
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="3011234567"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="d-grid gap-2 text-center">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSubmit}
          >
            Registrate
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => {
              router.push("/");
            }}
          >
            Inicia sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
