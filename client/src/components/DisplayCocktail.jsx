import { useState, useEffect } from "react";

import "../assets/style/DisplayCocktail.css";

function DisplayCocktail({ displayType, displayCocktail }) {
  const [] = useState();
  useEffect(() => {}, []);

  return (
    <div className="cocktail-detail">
      <div className="name-detail">
        <div className="name">{displayCocktail.name}</div>
        <div className="creator">
          {displayCocktail.creator ? `(${displayCocktail.creator})` : null}
        </div>
      </div>
      <div className="ingredients">{displayCocktail.ingredients}</div>
      <div className="bottom">
        {displayCocktail.bottom ? `bottom: ${displayCocktail.bottom}` : null}
      </div>
      <div className="rinse">
        {displayCocktail.rinse ? `rinse: ${displayCocktail.rinse}` : null}
      </div>
      <div className="float">
        {displayCocktail.float ? ` ${displayCocktail.float}` : null}
      </div>
      <div className="top">
        {displayCocktail.top ? `top: ${displayCocktail.top}` : null}
      </div>
      <div className="glass">{`glass: ${displayCocktail.glass}`}</div>
      <div className="ice">{`ice: ${displayCocktail.ice}`}</div>
      <div className="garnish">{`garnish: ${displayCocktail.garnish}`}</div>
      <div className="method">{`method: ${displayCocktail.method}`}</div>
      <div className="description">
        {displayCocktail.description ? displayCocktail.description : null}
      </div>
    </div>
  );
}

export default DisplayCocktail;
