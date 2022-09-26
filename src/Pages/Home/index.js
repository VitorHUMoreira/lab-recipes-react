import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-xxl main-container">
      <div className="container-sm bg-secondary border border-dark rounded p-3">
        <h2>MENU</h2>
        <hr className="bg-dark" />
        <div className="d-flex align-items-center justify-content-center gap-2">
          <Link to="/users">
            <button type="button" className="btn btn-primary btn-lg">
              USUÁRIOS
            </button>
          </Link>
          <Link to="/recipes">
            <button type="button" className="btn btn-primary btn-lg">
              RECEITAS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
