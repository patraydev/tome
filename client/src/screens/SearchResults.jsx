import { useState, useEffect } from "react";

import "../assets/style/SearchResults.css";

function SearchResults({ searchTerm, title, cocktails }) {
  const [filteredCocktails, setFilteredCocktails] = useState([]);
  const [displayCocktail, setDisplayCocktail] = useState({});

  useEffect(() => {
    const filtered = cocktails.filter((cocktail) =>
      cocktail.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredCocktails(filtered);
  }, [cocktails, searchTerm]);

  const handleSelect = (e) => {
    e.preventDefault();
    console.log(typeof e.target.id);
    setDisplayCocktail(cocktails.find(cocktail => cocktail.id === parseInt(e.target.id)));
}

  const list =
    filteredCocktails &&
    filteredCocktails.map((cocktail, index) => (
      <div className="list-item" key={index} id={cocktail.id} onClick={(e)=>handleSelect(e)}>
        {cocktail ? cocktail.name : "nothing found"}
      </div>
    ));

  return (
    <div className="results-container">
      <div className="title">{`${title}`}</div>
      <div className="results-list">{list}</div>
    </div>
  );
}

export default SearchResults;
