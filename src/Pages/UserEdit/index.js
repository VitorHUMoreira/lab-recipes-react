import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

function UserEdit() {
  const { idUser } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [userNameCopy, setUserNameCopy] = useState("");

  useEffect(() => {
    setLoading(true);
    async function fetchUser() {
      try {
        const response = await axios.get(
          `http://localhost:4000/users/user/${idUser}`
        );
        setUser(response.data);
        setUserNameCopy(response.data.name);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchUser();
  }, [idUser]);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/users/edit/${idUser}`, user);
      toast.success(`Usuário editado com sucesso.`);
      navigate(`/users/user/${idUser}`);
    } catch (error) {
      console.log(error);
      toast.error("Erro ao editar usuário.");
    }
  }

  async function handleDelete() {
    try {
      toast.success((t) => (
        <span>
          <b>{user.name}</b> deletado com sucesso.
        </span>
      ));
      await axios.delete(`http://localhost:4000/users/delete/${idUser}`);
      navigate("/users");
    } catch (error) {
      console.log(error);
      toast.error((t) => (
        <span>
          Erro ao deletar <b>{user.name}</b>.
        </span>
      ));
    }
  }

  return (
    <div className="container-xl main-container bg-secondary border border-dark rounded p-3">
      <h2>{userNameCopy}</h2>

      {!loading && (
        <>
          <form onSubmit={handleSubmit}>
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
                required
                onChange={handleChange}
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
                required
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-success">
              SALVAR
            </button>
          </form>
        </>
      )}

      <button
        type="button"
        className="mt-3 btn btn-danger"
        onClick={handleDelete}
      >
        DELETAR
      </button>

      <Link to={`/users/user/${user._id}`}>
        <button type="button" className="mt-3 btn btn-primary">
          VOLTAR
        </button>
      </Link>
    </div>
  );
}

export default UserEdit;
