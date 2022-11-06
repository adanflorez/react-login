import Image from "next/image";
import Link from "next/link";

const PassportCard = ({ passport }) => {
  return (
    <div className="passport">
      <div className="card bg-dark text-white passport__card">
        <Image
          className="card-img passport__bg"
          src={passport.image}
          alt={passport.id}
          fill={true}
        />
        <div className="card-img-overlay">
          <div className="d-flex flex-column justify-content-between h-100 p-4">
            <div>
              <h2 className="card-title text-center">{passport.title}</h2>
              <p className="card-text">{passport.description}</p>
            </div>
            <Link href={"passports/" + passport.id} class="btn btn-primary">
              Modos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassportCard;
