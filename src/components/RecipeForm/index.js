import { useState, useRef, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function RecipeForm() {
  const startRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    startRef.current.focus();
  }, []);

  const [recipeForm, setRecipeForm] = useState({
    title: "",
    cuisine: "",
    image: "",
  });

  function handleChange(e) {
    setRecipeForm({ ...recipeForm, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/recipes/create", recipeForm);
      toast.success("Receita criada com sucesso.");
      navigate("/recipes");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao criar receita.");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label" htmlFor="title">
            Título
          </label>
          <input
            ref={startRef}
            className="form-control"
            id="title"
            type="text"
            value={recipeForm.title}
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
            value={recipeForm.cuisine}
            name="cuisine"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="form-label" htmlFor="image">
            Link da foto
          </label>
          <input
            className="form-control"
            type="text"
            id="image"
            value={recipeForm.image}
            name="image"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          CRIAR RECEITA
        </button>
      </form>
    </>
  );
}

export default RecipeForm;
