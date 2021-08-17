import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import Modal from "../components/Modal.jsx";
import List from "../components/List.jsx";
import DisplayCocktail from "../components/DisplayCocktail.jsx";

import icon from "../assets/images/icon01.png";
import { readLibrary, removeFromLibrary } from "../helpers/library.js";

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
      <div className="results-container">
        <div className="title">Library</div>
        <div className="results-list">
          <List cocktails={library} setDisplayCocktail={setDisplayCocktail} />
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
        <div className="user-card-container">
          <Link style={colorway} to="/dashboard/profile">
            <img className="user-icon" src={icon} alt="user icon" />
            <div className="user-name">
              {currentUser.username || currentUser.email}
            </div>
          </Link>
        </div>
        <div className="detail-button-container">
          <Link to={"/dashboard/new"}>
            <button onClick={hideModal}>Create</button>
          </Link>
          {displayCocktail ? (
            <>
              <Link to={`/dashboard/edit/${displayCocktail._id}`}>
                <button onClick={hideModal}>Edit</button>
              </Link>
              <Link to={"/dashboard"}>
                <button onClick={handleRemove}>Remove From Library</button>
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </Modal>
  );
}

export default Library;
