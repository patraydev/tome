import { useState } from "react";

import SearchResults from "../screens/SearchResults.jsx";
import Modal from './Modal.jsx';


function Search({cocktails}) {
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
