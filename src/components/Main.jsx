import React, { use, useState } from "react";
import Recipe from "./Recipe";
import IngredientsList from "./ingredientsList";

function Main() {
  const [value, setValue] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (value) {
      setIngredients((prevIngredients) => [...prevIngredients, value]);
    }
    setValue("");
  }

  function toggleRecipeShown() {
    setRecipeShown((prev) => !prev);
  }

  return (
    <main>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="add-ingredient-form"
      >
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add">Add ingredient</button>
      </form>
      {ingredients.length > 0 ? (
        <IngredientsList
          setIngredients={setIngredients}
          ingredients={ingredients}
          toggleRecipeShown={toggleRecipeShown}
          recipeShown={recipeShown}
          setValue={setValue}
          value={value}
        />
      ) : (
        <h2>Add Atleast Four Ingredients To Get Recipe :)</h2>
      )}

      {recipeShown && ingredients.length > 3 ? <Recipe /> : null}
    </main>
  );
}

export default Main;
