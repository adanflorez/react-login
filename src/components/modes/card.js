const ModeCard = ({ mode }) => {
  return (
    <>
      <div className="card">
        <div className="card-header">{mode.title}</div>
        <div className="card-body">
          <h5 className="card-title">Descripcion</h5>
          <p className="card-text">{mode.description}</p>
        </div>
      </div>
    </>
  );
};

export default ModeCard;
