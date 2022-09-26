import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Users from "./Pages/Users";
import Recipes from "./Pages/Recipes";
import UsersCreate from "./Pages/UserCreate";
import UserProfile from "./Pages/UserProfile";
import UserEdit from "./Pages/UserEdit";
import RecipeCreate from "./Pages/RecipeCreate";
import RecipeDetail from "./Pages/RecipeDetail";
import RecipeEdit from "./Pages/RecipeEdit";

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
        <Route path="/recipes/create" element={<RecipeCreate />} />
        <Route path="/recipes/recipe/:idRecipe" element={<RecipeDetail />} />
        <Route path="/recipes/edit/:idRecipe" element={<RecipeEdit />} />
      </Routes>
    </>
  );
}

export default App;
