import { useState } from "react";
import { useHistory } from "react-router-dom";

import SearchResults from "../screens/SearchResults.jsx";
import Modal from "./Modal.jsx";

import "../assets/style/Search.css";

function Search({ cocktails, setCocktails, currentUser }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ searchTerm: "" });
  const { searchTerm } = formData;
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const hideModalAndRedirect = () => {
    setShow(false);
    history.push('/cocktails');
  };


  return (
    <div className="search-main">
      <Modal show={show} handleClose={hideModalAndRedirect} size="large">
        <SearchResults
          searchTerm={formData.searchTerm}
          cocktails={cocktails}
          hideModal={hideModal}
          currentUser={currentUser}
        />
      </Modal>
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          showModal();
        }}
      >
        <label htmlFor="search"></label>
        <input
          name="searchTerm"
          type="text"
          autoComplete="off"
          value={searchTerm}
          onChange={handleChange}
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
