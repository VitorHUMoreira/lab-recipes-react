import { api } from "../../api/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserProfile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchUser() {
      try {
        const response = await api.get(`/users/profile`);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  return (
    <div className="container-xl main-container bg-secondary border border-dark rounded p-3">
      <h2>{user.name}</h2>

      {!loading && (
        <>
          <div className="mt-3 d-flex flex-column gap-3">
            <div className="mb-2">
              <label className="form-label" htmlFor="name">
                Nome
              </label>
              <input
                className="form-control"
                id="name"
                type="text"
                value={user.name}
                name="name"
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="email">
                E-mail
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                value={user.email}
                name="email"
                disabled
              />
            </div>
          </div>
        </>
      )}
      <div className="d-flex gap-2">
        <Link to={`/users/edit/${user._id}`} className="btn btn-warning">
          EDITAR
        </Link>
        <Link to="/users">
          <button type="button" className="btn btn-primary">
            VOLTAR
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UserProfile;
