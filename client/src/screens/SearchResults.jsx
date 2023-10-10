import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import List from '../components/List.jsx';
import DisplayCocktail from "../components/DisplayCocktail";

import {ResultsContainer,Title,ResultsList,ListItem,Display,UserCard,UserCardImg,ButtonContainer,LibraryButton} from "../styled/SearchResults.js";

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

  const isAdmin = currentUser && currentUser.is_admin;

  useEffect(() => {
    const filtered = cocktails.filter((cocktail) =>
      cocktail.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCocktails(filtered);
  }, [cocktails, searchTerm]);

  useEffect(() => {
    if (displayCocktail) {
      setDisplayCocktail(
        cocktails.find((cocktail) => cocktail.id === displayCocktail.id)
      );
    }
  }, [cocktails, displayCocktail]);

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
    <ResultsContainer>
      <Title>Search Results</Title>
      <ResultsList>
        <List
          cocktails={filteredCocktails}
          setDisplayCocktail={setDisplayCocktail}
        />
      </ResultsList>
      <Display>
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
      </Display>
      <ButtonContainer>
        {displayCocktail && isAdmin ? (
          <>
            <Link to={`/dashboard/edit/${displayCocktail._id}`}>
              <LibraryButton onClick={hideModal}>Edit</LibraryButton>
            </Link>
            {/* <Link to={"/cocktails"}>
              <button onClick={handleDelete}>Delete</button>
            </Link> */}
          </>
        ) : null}
        <LibraryButton onClick={handleAdd}>Add to Library</LibraryButton>
      </ButtonContainer>
      </ResultsContainer>
  );
}

export default SearchResults;
