import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Users from "./Pages/Users";
import Recipes from "./Pages/Recipes";
import UsersCreate from "./Pages/UsersCreate";
import UserProfile from "./Pages/UserProfile";
import UserEdit from "./Pages/UserEdit";

function App() {
  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<Error />} />

        <Route path="/users" element={<Users />} />

        <Route path="/users/create" element={<UsersCreate />} />

        <Route path="/users/user/:idUser" element={<UserProfile />} />

        <Route path="/users/edit/:idUser" element={<UserEdit />} />

        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </>
  );
}

export default App;
