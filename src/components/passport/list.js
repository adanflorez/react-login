import passportData from "../../data/passportData";
import PassportCard from "./card";

const PassportList = () => {
  const passports = passportData;
  return (
    <div className="container">
      <div className="row">
        {passports.map((passport) => (
          <>
            <div className="col-12 col-md-4">
              <PassportCard passport={passport} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PassportList;
