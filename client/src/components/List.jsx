import {ListItem} from "../styled/Results.js";

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
        <ListItem
          key={index}
          id={cocktail._id}
          onClick={(e) => handleSelect(e)}
        >
          {cocktail ? cocktail.name : "nothing found"}
        </ListItem>
      )) :
      null;
   

  return (
     <>{ list }</>
);
};

export default List