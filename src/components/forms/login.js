const LoginForm = () => {
  return (
    <div className="mb-3">
      <label htmlFor="user" className="form-label">
        Usuario
      </label>
      <input
        type="email"
        className="form-control"
        id="user"
        placeholder="usuario"
      />
    </div>
  );
};
