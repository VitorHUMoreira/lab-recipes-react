import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function RecipeDetail() {
  const { idRecipe } = useParams();
  const [recipe, setRecipe] = useState({});
  const [reload] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchRecipe() {
      try {
        const response = await axios.get(
          `http://localhost:4000/recipes/recipe/${idRecipe}`
        );
        setRecipe(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    fetchRecipe();
  }, [idRecipe, reload]);

  return (
    <div className="container-xl main-container bg-secondary border border-dark rounded p-3">
      <h2>{recipe.title}</h2>
      <img width={300} src={recipe.image} alt="Recipe" />

      {!loading && (
        <>
          <div className="mt-3 d-flex flex-column gap-3">
            <div className="mb-2">
              <label className="form-label" htmlFor="title">
                Título
              </label>
              <input
                className="form-control"
                id="title"
                type="text"
                value={recipe.title}
                name="title"
                disabled
              />
            </div>
            <div className="mb-2">
              <label className="form-label" htmlFor="cuisine">
                Cozinha
              </label>
              <input
                className="form-control"
                type="text"
                id="cuisine"
                value={recipe.cuisine}
                name="cuisine"
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="image">
                Link da Foto
              </label>
              <input
                className="form-control"
                type="text"
                id="image"
                value={recipe.image}
                name="image"
                disabled
              />
            </div>
          </div>
        </>
      )}
      <div className="d-flex gap-2">
        <Link to={`/recipes/edit/${recipe._id}`} className="btn btn-warning">
          EDITAR
        </Link>
        <Link to="/recipes">
          <button type="button" className="btn btn-primary">
            VOLTAR
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;
