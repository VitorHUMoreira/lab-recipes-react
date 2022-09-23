import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

function UserEdit() {
  const { idUser } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchConfigs() {
      try {
        const response = await axios.get(
          `http://localhost:4000/users/user/${idUser}`
        );
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchConfigs();
  }, [idUser]);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/users/edit/${idUser}`, user);
      toast.success("Usuário editado com sucesso.");
      navigate(`/users/user/${idUser}`);
    } catch (error) {
      console.log(error);
      toast.error("Erro ao editar usuário.");
    }
  }

  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:4000/users/edit/${idUser}`);
      navigate("/users");
      toast.success("Usuário deletado com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao deletar usuário.");
    }
  }

  return (
    <div className="container-xl main-container bg-secondary border border-dark rounded p-3">
      <h2>{user.name}</h2>

      {!loading && (
        <>
          <form onSubmit={handleSubmit}>
            <div class="mb-2">
              <label className="form-label" htmlFor="name">
                Nome
              </label>
              <input
                className="form-control"
                id="name"
                type="text"
                value={user.name}
                name="name"
                required
                onChange={handleChange}
              />
            </div>
            <div class="mb-4">
              <label className="form-label" htmlFor="email">
                E-mail
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                value={user.email}
                name="email"
                required
                onChange={handleChange}
              />
            </div>
            <Link to="/users">
              <button type="button" class="btn btn-success">
                SALVAR
              </button>
            </Link>
          </form>
        </>
      )}

      <Link
        to={`/users/edit/${user._id}`}
        className="mt-3 btn btn-danger"
        onClick={handleDelete}
      >
        DELETAR
      </Link>
    </div>
  );
}

export default UserEdit;
