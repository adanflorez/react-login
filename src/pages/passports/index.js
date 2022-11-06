import Header from "../../components/header";
import PassportList from "../../components/passport/list";

const Passports = () => {
  return (
    <>
      <Header />
      <div className="passport">
        <PassportList />
      </div>
    </>
  );
};

export default Passports;
