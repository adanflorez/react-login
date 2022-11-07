import ModeCard from "./card";

const ModesList = ({ modes }) => {
  return (
    <div className="container">
      <div className="row">
        {modes.map((mode) => (
          <>
            <div className="col-12 col-md-3">
              <ModeCard mode={mode} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ModesList;
