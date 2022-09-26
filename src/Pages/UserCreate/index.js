import UserForm from "../../components/UserForm";

function UserCreate() {
  return (
    <div className="container-xl main-container bg-secondary border border-dark rounded p-3">
      <h2>CRIAR USUÁRIO</h2>
      <UserForm />
    </div>
  );
}

export default UserCreate;
