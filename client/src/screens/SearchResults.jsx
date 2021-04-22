import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import List from '../components/List.jsx';
import DisplayCocktail from "../components/DisplayCocktail";

// import { destroyCocktail } from "../helpers/cocktails.js";
import { addToLibrary } from "../helpers/library.js";

import "../assets/style/SearchResults.css";

function SearchResults({
  searchTerm,
  cocktails,
  currentUser,
  hideModal,
}) {
  const [filteredCocktails, setFilteredCocktails] = useState([]);
  const [displayCocktail, setDisplayCocktail] = useState(false);
  // const history = useHistory();

  const isAdmin = currentUser && currentUser.is_admin;

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

  // const handleDelete = async () => {
  //   const id = displayCocktail._id;
  //   await destroyCocktail(id);
  //   setCocktails((prevState) =>
  //     prevState.filter((cocktail) => {
  //       return cocktail.id !== id;
  //     })
  //   );
  //   history.push("/cocktails");
  //   hideModal();
  // };

  const handleAdd = async () => {
    const userID = currentUser._id;
    const cocktailID = displayCocktail._id;
    await addToLibrary({
      userID: userID,
      cocktailID: cocktailID
    });
  };

  return (
    <div className="results-container">
      <div className="title">Search Results</div>
      <div className="results-list">
        <List
          cocktails={filteredCocktails}
          setDisplayCocktail={setDisplayCocktail}
        />
      </div>
      <div className="display">
        {displayCocktail ? (
          <DisplayCocktail
            displayType="display"
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
        {displayCocktail && isAdmin ? (
          <>
            <Link to={`/cocktails/edit/${displayCocktail._id}`}>
              <button onClick={hideModal}>Edit</button>
            </Link>
            {/* <Link to={"/cocktails"}>
              <button onClick={handleDelete}>Delete</button>
            </Link> */}
          </>
        ) : null}
        <button onClick={handleAdd}>Add to Library</button>
      </div>
    </div>
  );
}

export default SearchResults;
