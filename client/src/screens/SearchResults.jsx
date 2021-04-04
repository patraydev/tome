import { useState, useEffect } from "react";

import "../assets/style/SearchResults.css";

function SearchResults({ searchTerm, title, cocktails }) {
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  useEffect(() => {
    const filtered = cocktails.filter((cocktail) =>
      cocktail.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredCocktails(filtered);
  }, [cocktails, searchTerm]);

  const list =
    filteredCocktails &&
    filteredCocktails.map((cocktail, index) => (
      <div className="list-item" key={index}>
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
