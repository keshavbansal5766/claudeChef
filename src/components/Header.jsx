import React from "react";

function Header() {
  console.log(import.meta.env.VITE_RECIPE_KEY);
  return (
    <header>
      <img src="src\assets\chef-claude-icon.png" />
      <h1>Chef Claude</h1>
    </header>
  );
}

export default Header;
