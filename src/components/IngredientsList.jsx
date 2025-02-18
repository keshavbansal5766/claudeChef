import React from "react";

function IngredientsList({
  ingredients,
  setIngredients,
  toggleRecipeShown,
  recipeShown,
  setValue,
  value,
}) {
  const ingredientsListItems = ingredients.map((ingredient, index) => (
    <li key={index}>
      {`${index + 1}. ${ingredient}`}
      <div>
        <button className="remove" onClick={() => removeIngredient(index)}>
          Remove
        </button>
        <button
          className="edit"
          onClick={() => editIngredient(ingredient, index)}
        >
          Edit
        </button>
      </div>
    </li>
  ));

  function removeIngredient(index) {
    console.log(index);
    setIngredients((prevIngredients) =>
      prevIngredients.filter((_, i) => i !== index)
    );
  }

  function editIngredient(ingredient, index) {
    setValue(ingredient);
    setIngredients((prevIngredients) =>
      prevIngredients.filter((_, i) => i !== index)
    );
  }

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list">{ingredientsListItems}</ul>
      {ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={toggleRecipeShown}>
            {!recipeShown ? "Get a recipe" : "Remove recipe"}
          </button>
        </div>
      )}
    </section>
  );
}

export default IngredientsList;
