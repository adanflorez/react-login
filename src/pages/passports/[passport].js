import { useRouter } from "next/router";
import Header from "../../components/header";
import ModesList from "../../components/modes/list";
import passportData from "../../data/passportData";

const Passport = () => {
  const router = useRouter();
  const { passport: id } = router.query;
  const passport = passportData.find((passport) => passport.id === id);

  return (
    <>
      <Header />
      {passport ? (
        <>
          <h1 className="text-center mt-4"> {passport.title} </h1>
          <ModesList modes={passport.modes} />
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default Passport;
