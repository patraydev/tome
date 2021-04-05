import { useState } from "react";

import SearchResults from "../screens/SearchResults.jsx";
import Modal from "./Modal.jsx";

import "../assets/style/Search.css";

function Search({ cocktails }) {
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({ searchTerm: "" });
  const { searchTerm } = formData;

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

  return (
    <div className="search-main">
      <Modal show={show} handleClose={hideModal} size="large">
        <SearchResults
          searchTerm={formData.searchTerm}
          cocktails={cocktails}
          title="Search Results"
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
