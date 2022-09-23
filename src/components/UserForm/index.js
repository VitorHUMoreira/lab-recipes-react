import { useState, useRef, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function UserForm() {
  const startRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    startRef.current.focus();
  }, []);

  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/users/create", userForm);
      toast.success("Usuário criado com sucesso.");
      navigate("/users");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao criar usuário.");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="mb-2">
          <label className="form-label" htmlFor="name">
            Nome
          </label>
          <input
            ref={startRef}
            className="form-control"
            id="name"
            type="text"
            value={userForm.name}
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
            value={userForm.email}
            name="email"
            required
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          CRIAR USUÁRIO
        </button>
      </form>
    </>
  );
}

export default UserForm;
