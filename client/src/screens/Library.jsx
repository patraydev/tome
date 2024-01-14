import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import Modal from "../components/Modal.jsx";
import List from "../components/List.jsx";
import DisplayCocktail from "../components/DisplayCocktail.jsx";

import icon from "../assets/images/icon01.png";
import { readLibrary, removeFromLibrary } from "../helpers/library.js";

import {
  LibraryContainer,
  Title,
  LibraryList,
  Display,
  UserCard,
  UserCardImg,
  UserCardName,
  ButtonContainer,
} from "../styled/Results.js";
import { LibraryButton } from "../styled/Buttons.js";

function Library({ currentUser }) {
  const [show, setShow] = useState(true);
  const [displayCocktail, setDisplayCocktail] = useState(false);
  const [library, setLibrary] = useState([{ name: "library is empty" }]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const history = useHistory();

  //reads library of current user, sets library and display cocktail into state
  useEffect(() => {
    // setShow(true);
    const fetchLibrary = async () => {
      const result = currentUser && (await readLibrary(currentUser._id));
      return result;
  };
  const setLibraryAndDisplayCocktail = (result) => {
    setLibrary(result);
    setDisplayCocktail(library[0]);
  };
    fetchLibrary().then(result=>{setLibraryAndDisplayCocktail(result)});
    console.log(library);
    console.log(displayCocktail);
  }, [currentUser, toggleFetch, show]);


  //didnt work missing something
  // useEffect(() => {
  //   console.log(currentUser.library);
  //   setLibrary(currentUser.library);
  //   console.log(library,library[0]);
  //   setDisplayCocktail(library[0]);
  //   console.log(displayCocktail);
  //   console.log(currentUser,library,displayCocktail);
  // }, [toggleFetch, show]);
  

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


  return (
    <Modal show={show} handleClose={hideModal} size="large">
      <LibraryContainer>
        <Title>Library</Title>
        <LibraryList>
          <List cocktails={library} setDisplayCocktail={setDisplayCocktail} />
        </LibraryList>
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
          <Link to="/dashboard/profile">
            <UserCardImg src={icon} alt="user icon" />
            <UserCardName>
              {currentUser ? currentUser.username || currentUser.email : null}
            </UserCardName>
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
      </LibraryContainer>
    </Modal>
  );
}

export default Library;
