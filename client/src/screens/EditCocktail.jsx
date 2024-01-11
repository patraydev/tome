import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import Modal from "../components/Modal";

import "../assets/style/EditCocktail.css";

function EditCocktail({ cocktails, editCocktail }) {
  const [showEdit, setShowEdit] = useState(true);
  const [cocktailToEdit, setCocktailToEdit] = useState({
    name: "",
    creator: "",
    ingredients: ["","",""],
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
  const history = useHistory();

  useEffect(() => {
    setShowEdit(true);
  }, []);

  useEffect(() => {
    if (cocktailToEdit && cocktailToEdit.ingredients.length === 0) {
      setCocktailToEdit((prevState) => ({
        ...prevState,
        ingredients: ["", "", ""],
      }))
  }}, [cocktailToEdit]);

  useEffect(() => {
    setCocktailToEdit(cocktails.find((cocktail) => cocktail._id === id));
  }, [cocktails, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCocktailToEdit((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editCocktail(id, cocktailToEdit);
  };

  const hideModal = () => {
    setShowEdit(false);
    history.push("/dashboard");
  };

  const modifyIngredient = (e, i) => {
    setCocktailToEdit((currCocktail) => ({
      ...currCocktail,
      ingredients: currCocktail.ingredients.map((ing, index) => (index === i ? e.target.value : ing))
    }
    ))
  };

  const addIngredient = () => {
    setCocktailToEdit((currCocktail) => ({
      ...currCocktail,
      ingredients: [...currCocktail.ingredients, ""]
    }))
  };

  const removeIngredient = (i) => {
    setCocktailToEdit((currCocktail) => ({
      ...currCocktail,
      ingredients: currCocktail.ingredients.filter((ing, index) => index !== i)
    }))
  };



  return (
    <Modal size="medium" show={showEdit} handleClose={hideModal}>
      <>
        {cocktailToEdit ? (
          <div className="edit-container">
            <form className="edit-form" onSubmit={handleSubmit}>
              <div className="input">
                <label htmlFor="name">name:</label>
                <input
                  name="name"
                  type="text"
                  value={cocktailToEdit.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="creator">creator:</label>
                <input
                  name="creator"
                  type="text"
                  value={cocktailToEdit.creator}
                  onChange={handleChange}
                />
              </div>
              {cocktailToEdit.ingredients.map((ing, index) => (
                <div key={index} className="input ingredient-item">
                  <label>Ingredient {index + 1}: </label>
                  <input
                    type="text"
                    value={ing}
                    onInput={(e) => modifyIngredient(e, index)}
                  />
                  <button type='button' className="ingredient-remove-button" onClick={() => removeIngredient(index)}>
                    -
                  </button>
                </div>
              ))}

          <div className='add-button-box'>
      <button type='button' className="ingredient-add-button" onClick={addIngredient}>add ingredient
      </button>
                </div>
              <div className="input">
                <label htmlFor="bottom">bottom:</label>
                <input
                  name="bottom"
                  type="text"
                  value={cocktailToEdit.bottom}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="rinse">rinse:</label>
                <input
                  name="rinse"
                  type="text"
                  value={cocktailToEdit.rinse}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="float">float:</label>
                <input
                  name="float"
                  type="text"
                  value={cocktailToEdit.float}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="top">top:</label>
                <input
                  name="top"
                  type="text"
                  value={cocktailToEdit.top}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="glass">glass:</label>
                <input
                  name="glass"
                  type="text"
                  value={cocktailToEdit.glass}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="ice">ice:</label>
                <input
                  name="ice"
                  type="text"
                  value={cocktailToEdit.ice}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="garnish">garnish:</label>
                <input
                  name="garnish"
                  type="text"
                  value={cocktailToEdit.garnish}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="method">method:</label>
                <input
                  name="method"
                  type="text"
                  value={cocktailToEdit.method}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="description">description:</label>
              <textarea
                name="description"
                type="text"
                value={cocktailToEdit.description}
                onChange={handleChange}
              />
              <button type="submit" className='save-button'>Save Changes</button>
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
