import { useState, useEffect } from "react";


import Modal from "../components/Modal";

import "../assets/style/EditCocktail.css";

function NewCocktail() {
  const [show, setShow] = useState(true);
  const [newCocktail, setNewCocktail] = useState({
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

  useEffect(() => {
    setShow(true);
  },[])



  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCocktail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newCocktail(newCocktail);
  };

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <Modal size="medium" show={show} handleClose={hideModal}>
          <div className="edit-container">
            <form className="edit-form" onSubmit={handleSubmit}>
              <div className="input">
                <label htmlFor="name">name:</label>
                <input
                  name="name"
                  type="text"
                  value={newCocktail.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="creator">creator:</label>
                <input
                  name="creator"
                  type="text"
                  value={newCocktail.creator}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="ingredients">ingredients:</label>
              <textarea
                name="ingredients"
                type="text"
                value={newCocktail.ingredients}
                onChange={handleChange}
              />
              <div className="input">
                <label htmlFor="bottom">bottom:</label>
                <input
                  name="bottom"
                  type="text"
                  value={newCocktail.bottom}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="rinse">rinse:</label>
                <input
                  name="rinse"
                  type="text"
                  value={newCocktail.rinse}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="float">float:</label>
                <input
                  name="float"
                  type="text"
                  value={newCocktail.float}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="top">top:</label>
                <input
                  name="top"
                  type="text"
                  value={newCocktail.top}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="glass">glass:</label>
                <input
                  name="glass"
                  type="text"
                  value={newCocktail.glass}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="ice">ice:</label>
                <input
                  name="ice"
                  type="text"
                  value={newCocktail.ice}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="garnish">garnish:</label>
                <input
                  name="garnish"
                  type="text"
                  value={newCocktail.garnish}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="method">method:</label>
                <input
                  name="method"
                  type="text"
                  value={newCocktail.method}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="description">description:</label>
              <textarea
                name="description"
                type="text"
                value={newCocktail.description}
                onChange={handleChange}
              />
              <button type="submit">Submit!</button>
            </form>
          </div>
    </Modal>
  );
}

export default NewCocktail;
