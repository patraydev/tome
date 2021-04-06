import "../assets/style/DisplayCocktail.css";

function DisplayCocktail({ displayType, displayCocktail }) {

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
        {displayCocktail.bottom ? `bottom:     ${displayCocktail.bottom}` : null}
      </div>
      <div className="rinse">
        {displayCocktail.rinse ? `rinse:     ${displayCocktail.rinse}` : null}
      </div>
      <div className="float">
        {displayCocktail.float ? `float:     ${displayCocktail.float}` : null}
      </div>
      <div className="top">
        {displayCocktail.top ? `top:     ${displayCocktail.top}` : null}
      </div>
      <div className="glass">{displayCocktail.glass ?`glass:     ${displayCocktail.glass}`: null}</div>
      <div className="ice">{displayCocktail.ice ?`ice:     ${displayCocktail.ice}`: null}</div>
      <div className="garnish">{displayCocktail.garnish ?`garnish:     ${displayCocktail.garnish}`: null}</div>
      <div className="method">{displayCocktail.method ?`method:     ${displayCocktail.method}`: null}</div>
      <div className="description">
        {displayCocktail.description ? displayCocktail.description : null}
      </div>
    </div>
  );
}

export default DisplayCocktail;
