import { useState } from "react";

import { showModal, hideModal } from "../helpers/modal.js";
import SearchResults from "../screens/SearchResults.jsx";

function Search({cocktails}) {
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({ searchTerm: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="search-main">
      <Modal show={show} handleClose={hideModal}>
        <SearchResults searchTerm={formData.searchTerm} cocktails={cocktails}/>
      </Modal>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          showModal();
        }}
      >
        <label htmlFor="search">
          <input
            name="searchTerm"
            type="text"
            value={searchTerm}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
