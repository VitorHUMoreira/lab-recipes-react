import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Users from "./Pages/Users";
import Recipes from "./Pages/Recipes";
import UserProfile from "./Pages/UserProfile";
import UserEdit from "./Pages/UserEdit";
import RecipeCreate from "./Pages/RecipeCreate";
import RecipeDetail from "./Pages/RecipeDetail";
import RecipeEdit from "./Pages/RecipeEdit";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import { AuthContextComponent } from "./contexts/authContext";
import { OnlyLogged } from "./components/ProtectRoute";
import { OnlyAdmin } from "./components/ProtectRoute";
import ActivateAccount from "./Pages/ActivateAccount";
import ConfirmEmail from "./Pages/ConfirmEmail";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/confirm-email" element={<ConfirmEmail />} />
          <Route
            path="/activate-account/:idUser"
            element={<ActivateAccount />}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={<OnlyLogged Component={UserProfile} />}
          />
          <Route path="/profile-edit" element={<UserEdit />} />

          <Route path="/users" element={<Users />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route
            path="/create-recipes"
            element={<OnlyAdmin Component={RecipeCreate} />}
          />
          <Route path="/recipes/:idRecipe" element={<RecipeDetail />} />

          <Route path="*" element={<Error />} />

          <Route path="/users/user/:idUser" element={<UserProfile />} />
          <Route path="/recipes/edit/:idRecipe" element={<RecipeEdit />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
