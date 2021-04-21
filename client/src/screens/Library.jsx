import { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';

import Modal from "../components/Modal.jsx";
import List from "../components/List.jsx";
import DisplayCocktail from "../components/DisplayCocktail.jsx";

import { readLibrary } from "../helpers/library.js";

function Library({ currentUser }) {
  const [show, setShow] = useState(true);
  const [displayCocktail, setDisplayCocktail] = useState(false);
  const [library, setLibrary] = useState([{ name: "library is empty" }]);
  const history = useHistory();

  useEffect(() => {
    setShow(true);
    const fetchLibrary = async () => {
      console.log(currentUser);
      const result = currentUser && (await readLibrary(currentUser._id));
      setLibrary(result);
    };
    fetchLibrary();
  }, [currentUser]);

  const hideModal = () => {
    setShow(false);
    history.push('/cocktails');
  };

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
        <div className="detail-button-container">
          <Link to={"/cocktails/new"}>
            <button onClick={hideModal}>Create</button>
          </Link>
          {displayCocktail ? (
            <>
              <Link to={`/cocktails/edit/${displayCocktail._id}`}>
                <button onClick={hideModal}>Edit</button>
              </Link>
              {/* <Link to={"/cocktails"}>
                <button onClick={handleDelete}>Delete</button>
              </Link> */}
            </>
          ) : null}
        </div>
      </div>
    </Modal>
  );
}

export default Library;
