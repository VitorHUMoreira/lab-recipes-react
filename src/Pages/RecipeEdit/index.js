import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

function RecipeEdit() {
  const { idRecipe } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const [recipeTitleCopy, setRecipeTitleCopy] = useState("");
  const [recipeImageCopy, setRecipeImageCopy] = useState("");

  useEffect(() => {
    setLoading(true);
    async function fetchRecipe() {
      try {
        const response = await axios.get(
          `http://localhost:4000/recipes/recipe/${idRecipe}`
        );
        setRecipe(response.data);
        setRecipeTitleCopy(response.data.title);
        setRecipeImageCopy(response.data.image);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchRecipe();
  }, [idRecipe]);

  function handleChange(e) {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/recipes/edit/${idRecipe}`, recipe);
      toast.success(`Receita editada com sucesso.`);
      navigate(`/recipes/recipe/${idRecipe}`);
    } catch (error) {
      console.log(error);
      toast.error("Erro ao editar receita.");
    }
  }

  async function handleDelete() {
    try {
      toast.success((t) => (
        <span>
          <b>{recipe.title}</b> deletada com sucesso.
        </span>
      ));
      await axios.delete(`http://localhost:4000/recipes/delete/${idRecipe}`);
      navigate("/recipes");
    } catch (error) {
      console.log(error);
      toast.error((t) => (
        <span>
          Erro ao deletar <b>{recipe.title}</b>.
        </span>
      ));
    }
  }

  return (
    <div className="container-xl main-container bg-secondary border border-dark rounded p-3">
      <h2>{recipeTitleCopy}</h2>
      <img width={300} src={recipeImageCopy} alt="Recipe" />

      {!loading && (
        <>
          <form onSubmit={handleSubmit}>
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
                required
                onChange={handleChange}
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
                required
                onChange={handleChange}
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

      <Link to={`/recipes/recipe/${recipe._id}`}>
        <button type="button" className="mt-3 btn btn-primary">
          VOLTAR
        </button>
      </Link>
    </div>
  );
}

export default RecipeEdit;
