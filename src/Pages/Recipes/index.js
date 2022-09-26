import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import RecipeCard from "../../components/RecipeCard";

function Recipes() {
  const startRef = useRef();

  useEffect(() => {
    startRef.current.focus();
  }, []);

  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchRecipes() {
      try {
        const response = await axios.get("http://localhost:4000/recipes/all");
        setRecipes(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    fetchRecipes();
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="container-xl main-container bg-secondary border border-dark rounded p-3">
      <h2>RECEITAS</h2>
      <Link to="/recipes/create">
        <button type="button" className="btn btn-primary btn-lg">
          CRIAR RECEITA
        </button>
      </Link>
      <input
        ref={startRef}
        className="form-control p-2 mt-4"
        type="search"
        value={search}
        onChange={handleSearch}
        placeholder="Procure uma receita pelo nome"
      />

      {!loading && (
        <>
          <div className="mt-3 d-flex flex-column gap-3">
            {recipes
              .filter((recipe) => {
                return recipe.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((recipe) => {
                return <RecipeCard key={recipe._id} recipe={recipe} />;
              })}
          </div>
        </>
      )}
    </div>
  );
}

export default Recipes;
