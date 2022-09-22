import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function UserForm() {
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
    } catch (error) {
      console.log(error);
      toast.error("Erro ao criar usuário.");
    }
  }

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          type="text"
          value={userForm.name}
          name="name"
          required
          onChange={handleChange}
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={userForm.email}
          name="email"
          required
          onChange={handleChange}
        />

        <button>CRIAR USUÁRIO</button>
      </form>
    </>
  );
}

export default UserForm;
