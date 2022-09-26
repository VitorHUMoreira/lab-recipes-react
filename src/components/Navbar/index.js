import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary mb-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-decoration-none brand">
          Lab Recipes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-decooration-none"
                aria-current="page"
              >
                MENU
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/users"
                className="nav-item nav-link text-decooration-none"
              >
                USUÁRIOS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/recipes"
                className="nav-item nav-link text-decooration-none"
              >
                RECEITAS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
