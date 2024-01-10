import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import Modal from "../components/Modal.jsx";
import List from "../components/List.jsx";
import DisplayCocktail from "../components/DisplayCocktail.jsx";

import icon from "../assets/images/icon01.png";
import { readLibrary, removeFromLibrary } from "../helpers/library.js";

import {
  ResultsContainer,
  Title,
  ResultsList,
  Display,
  UserCard,
  UserCardImg,
  ButtonContainer,
  LibraryButton,
} from "../styled/Results.js";

function Library({ currentUser }) {
  const [show, setShow] = useState(true);
  const [displayCocktail, setDisplayCocktail] = useState(false);
  const [library, setLibrary] = useState([{ name: "library is empty" }]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setShow(true);
    const fetchLibrary = async () => {
      console.log(currentUser);
      const result = currentUser && (await readLibrary(currentUser._id));
      setLibrary(result);
    };
    fetchLibrary();
  }, [currentUser, toggleFetch]);

  const hideModal = () => {
    setShow(false);
    history.push("/dashboard");
  };

  const handleRemove = async (e) => {
    e.preventDefault();
    const userID = currentUser._id;
    const cocktailID = displayCocktail._id;
    await removeFromLibrary({
      userID: userID,
      cocktailID: cocktailID,
    });
    setToggleFetch((t) => !t);
  };

  const colorway = currentUser
    ? {
        color: currentUser.foregroundColor,
      }
    : {};

  return (
    <Modal show={show} handleClose={hideModal} size="large">
      <ResultsContainer>
        <Title>Library</Title>
        <ResultsList>
          <List cocktails={library} setDisplayCocktail={setDisplayCocktail} />
        </ResultsList>
        <Display>
          {displayCocktail ? (
            <DisplayCocktail
              displayCocktail={displayCocktail}
            />
          ) : (
            <div className="cocktail-detail">
              'ᕋᐃᔭᓐ ᕙᓛᓇᒐᓐ ᐅᓪᓗᒥ ᐃᓕᖅᑯᓯᕆᖕᒪᒍ, ᓴᓇᔨᓪᓚᕆᐊᓗᒃ ᓂᕆᑎᑦᑎᔪᓐᓇᖅᑐᖅ ᐅᑕᖅᑭᔪᓂᒃ ᑲᑎᙵᔪᓂᒃ
              ᐱᐅᔪᒻᒪᕆᐊᓗᖕᒥᒃ ᒪᕐᕋᕐᒥᒃ, ᐊᒻᒪ ᐊᑕᐅᑦᑎᒃᑯᑦ ᓴᖅᑭᑎᑦᑎᓪᓗᓂ ᑕᐅᑐᖅᑰᖅᑕᒥᓂᒃ ᓄᓇᕐᔪᐊᕐᒥ.
              ᖃᓄᐃᒻᒪᑦ ᐃᖅᑲᓇᐃᔭᙱᓚᖅ, ᓱᕋᒃᓯᒪᕙ ᐃᓄᑑᓪᓗᓂᓗ? ᐳᕋᐃᔭᓐ ᑎᓯᔪᖅ ᒫᑕᓐ ᐊᓐᓄᕌᓕᐊᕆᓪᓗᓂᐅᒃ
              ᑲᓇᖕᓇᖅᐸᓯᖕᒥᐅᑕᖅ'
            </div>
          )}
        </Display>
        <UserCard>
          <Link style={colorway} to="/dashboard/profile">
            <UserCardImg src={icon} alt="user icon" />
            <div className="user-name">
              {currentUser.username || currentUser.email}
            </div>
          </Link>
        </UserCard>
        <ButtonContainer>
          <Link to={"/dashboard/new"}>
            <LibraryButton onClick={hideModal}>Create</LibraryButton>
          </Link>
          {displayCocktail ? (
            <>
              <Link to={`/dashboard/edit/${displayCocktail._id}`}>
                <LibraryButton onClick={hideModal}>Edit</LibraryButton>
              </Link>
              <Link to={"/dashboard"}>
                <LibraryButton onClick={handleRemove}>
                  Remove From Library
                </LibraryButton>
              </Link>
            </>
          ) : null}
        </ButtonContainer>
      </ResultsContainer>
    </Modal>
  );
}

export default Library;
