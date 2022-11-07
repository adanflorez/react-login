import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse ms-auto"
          id="navbarSupportedContent"
        >
          <div className="d-flex ms-auto">
            <form className="d-flex">
              <button className="btn btn-primary me-2" type="submit">
                Buscar
              </button>
              <input
                className="form-control"
                type="search"
                placeholder="Correo electrónico"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Equipo
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/passports">
                  Pasaportes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/home">
                  Inicio
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <a className="navbar-brand text-primary fw-bolder" href="#">
          FONTUR
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
