import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Modal from "../components/Modal";

import "../assets/style/EditCocktail.css";

function EditCocktail({ cocktails, editCocktail }) {
  const [show, setShow] = useState(true);
  const [displayCocktail, setDisplayCocktail] = useState({
    name: "",
    creator: "",
    ingredients: "",
    bottom: "",
    rinse: "",
    float: "",
    top: "",
    glass: "",
    ice: "",
    garnish: "",
    method: "",
    description: "",
  });
  const { id } = useParams();

  useEffect(() => {
    setShow(true);
  },[])


  useEffect(() => {
    setDisplayCocktail(
      cocktails.find((cocktail) => cocktail.id === parseInt(id))
    );
  }, [cocktails, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDisplayCocktail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editCocktail(id,displayCocktail);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <Modal size="medium" show={show} handleClose={hideModal}>
      <>
        {displayCocktail ? (
          <div className="edit-container">
            <form className="edit-form" onSubmit={handleSubmit}>
              <div className="input">
                <label htmlFor="name">name:</label>
                <input
                  name="name"
                  type="text"
                  value={displayCocktail.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="creator">creator:</label>
                <input
                  name="creator"
                  type="text"
                  value={displayCocktail.creator}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="ingredients">ingredients:</label>
              <textarea
                name="ingredients"
                type="text"
                value={displayCocktail.ingredients}
                onChange={handleChange}
              />
              <div className="input">
                <label htmlFor="bottom">bottom:</label>
                <input
                  name="bottom"
                  type="text"
                  value={displayCocktail.bottom}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="rinse">rinse:</label>
                <input
                  name="rinse"
                  type="text"
                  value={displayCocktail.rinse}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="float">float:</label>
                <input
                  name="float"
                  type="text"
                  value={displayCocktail.float}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="top">top:</label>
                <input
                  name="top"
                  type="text"
                  value={displayCocktail.top}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="glass">glass:</label>
                <input
                  name="glass"
                  type="text"
                  value={displayCocktail.glass}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="ice">ice:</label>
                <input
                  name="ice"
                  type="text"
                  value={displayCocktail.ice}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="garnish">garnish:</label>
                <input
                  name="garnish"
                  type="text"
                  value={displayCocktail.garnish}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="method">method:</label>
                <input
                  name="method"
                  type="text"
                  value={displayCocktail.method}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="description">description:</label>
              <textarea
                name="description"
                type="text"
                value={displayCocktail.description}
                onChange={handleChange}
              />
              <button type="submit">Save Changes</button>
            </form>
          </div>
        ) : (
          <>
            'ᕋᐃᔭᓐ ᕙᓛᓇᒐᓐ ᐅᓪᓗᒥ ᐃᓕᖅᑯᓯᕆᖕᒪᒍ, ᓴᓇᔨᓪᓚᕆᐊᓗᒃ ᓂᕆᑎᑦᑎᔪᓐᓇᖅᑐᖅ ᐅᑕᖅᑭᔪᓂᒃ ᑲᑎᙵᔪᓂᒃ
            ᐱᐅᔪᒻᒪᕆᐊᓗᖕᒥᒃ ᒪᕐᕋᕐᒥᒃ, ᐊᒻᒪ ᐊᑕᐅᑦᑎᒃᑯᑦ ᓴᖅᑭᑎᑦᑎᓪᓗᓂ ᑕᐅᑐᖅᑰᖅᑕᒥᓂᒃ ᓄᓇᕐᔪᐊᕐᒥ.
            ᖃᓄᐃᒻᒪᑦ ᐃᖅᑲᓇᐃᔭᙱᓚᖅ, ᓱᕋᒃᓯᒪᕙ ᐃᓄᑑᓪᓗᓂᓗ? ᐳᕋᐃᔭᓐ ᑎᓯᔪᖅ ᒫᑕᓐ ᐊᓐᓄᕌᓕᐊᕆᓪᓗᓂᐅᒃ
            ᑲᓇᖕᓇᖅᐸᓯᖕᒥᐅᑕᖅ'
          </>
        )}
      </>
    </Modal>
  );
}

export default EditCocktail;
