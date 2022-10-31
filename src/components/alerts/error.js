const AlertError = ({ message, setError }) => {
  return (
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      {message}
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        onClick={() => {
          setError(false);
        }}
      ></button>
    </div>
  );
};

export default AlertError;
