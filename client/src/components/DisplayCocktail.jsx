import "../assets/style/DisplayCocktail.css";

function DisplayCocktail({ displayCocktail }) {
  return (
    <div className="cocktail-detail">
      <div className="detail name-detail">
        <div className="name">{displayCocktail.name}</div>
        <div className="creator">
          {displayCocktail.creator ? `(${displayCocktail.creator})` : null}
        </div>
      </div>
      <div className="detail ingredients" >
        {displayCocktail.ingredients.map((ingredient,index) => 
          (<p className='ingredient' key={index}>{ingredient}</p>)
        )}
      </div>
      <div className="detail bottom">
        {displayCocktail.bottom
          ? `bottom:     ${displayCocktail.bottom}`
          : null}
      </div>
      <div className="detail rinse">
        {displayCocktail.rinse ? `rinse:     ${displayCocktail.rinse}` : null}
      </div>
      <div className="detail float">
        {displayCocktail.float ? `float:     ${displayCocktail.float}` : null}
      </div>
      <div className="detail top">
        {displayCocktail.top ? `top:     ${displayCocktail.top}` : null}
      </div>
      <div className="detail glass">
        {displayCocktail.glass ? `glass:     ${displayCocktail.glass}` : null}
      </div>
      <div className="detail ice">
        {displayCocktail.ice ? `ice:     ${displayCocktail.ice}` : null}
      </div>
      <div className="detail garnish">
        {displayCocktail.garnish
          ? `garnish:     ${displayCocktail.garnish}`
          : null}
      </div>
      <div className="detail method">
        {displayCocktail.method
          ? `method:     ${displayCocktail.method}`
          : null}
      </div>
      <div className="detail description">
        {displayCocktail.description ? displayCocktail.description : null}
      </div>
    </div>
  );
}

export default DisplayCocktail;
