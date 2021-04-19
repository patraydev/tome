import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import "../assets/style/SearchResults.css";
import DisplayCocktail from "../components/DisplayCocktail";

import { destroyCocktail } from "../helpers/cocktails.js";

function SearchResults({
  searchTerm,
  title,
  cocktails,
  currentUser,
  hideModal,
  setCocktails,
}) {
  const [filteredCocktails, setFilteredCocktails] = useState([]);
  const [displayCocktail, setDisplayCocktail] = useState({});
  const history = useHistory();

  // const isAdmin = currentUser && currentUser.is_admin;

  useEffect(() => {
    const filtered = cocktails.filter((cocktail) =>
      cocktail.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCocktails(filtered);
  }, [cocktails, searchTerm]);

  // useEffect(() => {
  //   if (displayCocktail) {
  //     setDisplayCocktail(
  //       cocktails.find((cocktail) => cocktail.id === displayCocktail.id)
  //     );
  //   }
  // }, [cocktails,displayCocktail]);

  const handleSelect = (e) => {
    e.preventDefault();
    setDisplayCocktail(
      cocktails.find((cocktail) => cocktail.name === e.target.innerHTML.toString())
    );
  };

  const handleDelete = async () => {
    const id = displayCocktail._id;
    await destroyCocktail(id);
    setCocktails((prevState) =>
      prevState.filter((cocktail) => {
        return cocktail.id !== id;
      })
    );
    history.push("/cocktails");
    hideModal();
  };

  // const handleAdd = (e) => {
  //   e.preventDefault();
  // for assoc at a later date
  // };

  const list =
    filteredCocktails &&
    filteredCocktails.map((cocktail, index) => (
      <div
        className="list-item"
        key={index}
        id={cocktail.id}
        onClick={(e) => handleSelect(e)}
        // onClick={(e) => console.log(e.target.innerHTML)}
      >
        {cocktail ? cocktail.name : "nothing found"}
      </div>
    ));

  return (
    <div className="results-container">
      <div className="title">{`${title}`}</div>
      <div className="results-list">{list}</div>
      <div className="display">
        {displayCocktail ? (
          <DisplayCocktail
            displayType='display'
            displayCocktail={displayCocktail}
          />
        ) : (
          <>
            'ᕋᐃᔭᓐ ᕙᓛᓇᒐᓐ ᐅᓪᓗᒥ ᐃᓕᖅᑯᓯᕆᖕᒪᒍ, ᓴᓇᔨᓪᓚᕆᐊᓗᒃ ᓂᕆᑎᑦᑎᔪᓐᓇᖅᑐᖅ ᐅᑕᖅᑭᔪᓂᒃ ᑲᑎᙵᔪᓂᒃ
            ᐱᐅᔪᒻᒪᕆᐊᓗᖕᒥᒃ ᒪᕐᕋᕐᒥᒃ, ᐊᒻᒪ ᐊᑕᐅᑦᑎᒃᑯᑦ ᓴᖅᑭᑎᑦᑎᓪᓗᓂ ᑕᐅᑐᖅᑰᖅᑕᒥᓂᒃ ᓄᓇᕐᔪᐊᕐᒥ.
            ᖃᓄᐃᒻᒪᑦ ᐃᖅᑲᓇᐃᔭᙱᓚᖅ, ᓱᕋᒃᓯᒪᕙ ᐃᓄᑑᓪᓗᓂᓗ? ᐳᕋᐃᔭᓐ ᑎᓯᔪᖅ ᒫᑕᓐ ᐊᓐᓄᕌᓕᐊᕆᓪᓗᓂᐅᒃ
            ᑲᓇᖕᓇᖅᐸᓯᖕᒥᐅᑕᖅ'
          </>
        )}
      </div>
      <div className="detail-button-container">
            <Link to={'/cocktails/new'}>
              <button onClick={hideModal}>Create</button>
              </Link>
        {displayCocktail ? (
          <>
            <Link to={`/cocktails/edit/${displayCocktail._id}`}>
              <button onClick={hideModal}>Edit</button>
            </Link>
            <Link to={"/cocktails"}>
              <button onClick={handleDelete}>Delete</button>
            </Link>
          </>
        ) : null}
        {/* this seems much easier to implement with mongoDB so let's wait */}
        {/* <button onClick={handleAdd}>Add to Library</button> */}
      </div>
    </div>
  );
}

export default SearchResults;
