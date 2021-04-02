import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import {
  readAllCocktails,
  createCocktail,
  updateCocktail,
  destroyCocktail,
} from "../helpers/cocktails.js";

import circle from "../assets/images/circle.png";
import "../assets/style/CocktailContainer.css";

function CocktailContainer(props) {
  const [] = useState();
  useEffect(() => {}, []);

  return (
      <div className="cocktail-container">
        <div
          className="weird-circle"
          style={{ backgroundImage: `url(${circle})` }}
        >
        
        </div>
      </div>
  );
}

export default CocktailContainer;
