import {useState,useEffect } from "react";

import '../assets/style/SearchResults.css';


function SearchResults({searchTerm,title,cocktails}) {
const [] = useState();
useEffect(() => {

},[]);

  const filteredCocktails = cocktails.map((cocktail) => {
    cocktail.name.includes(searchTerm)  
}) 
  
const list = cocktails.map((cocktail, index) =>
  <div className='list-item' key={index}>
    {cocktail.name}
    </div>
)
  
  return (
    <div className='results-container'>
      <div className='title'>{`${title}`}</div>
      <div className='results-list'>
        {list}
      </div>
    </div>
  );
};

export default SearchResults