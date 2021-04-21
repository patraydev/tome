function List({cocktails,setDisplayCocktail}) {

  const handleSelect = (e) => {
    e.preventDefault();
    setDisplayCocktail(
      cocktails.find((cocktail) => cocktail.name === e.target.innerHTML.toString())
    );
  };

  const list =
    cocktails ?
      cocktails.map((cocktail, index) => (
        <div
          className="list-item"
          key={index}
          id={cocktail._id}
          onClick={(e) => handleSelect(e)}
        >
          {cocktail ? cocktail.name : "nothing found"}
        </div>
      )) :
      null;
   

  return (
     <>{ list }</>
);
};

export default List