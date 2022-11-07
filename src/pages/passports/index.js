import Link from "next/link";
import Header from "../../components/header";
import PassportList from "../../components/passport/list";

const Passports = () => {
  return (
    <>
      <Header />
      <div className="passport">
        <PassportList />
      </div>
      <div className="d-flex justify-content-center">
        <Link className="text-center mt-5" href="/manual">
          Manual digital
        </Link>
      </div>
    </>
  );
};

export default Passports;
