import { useState } from "react";
import { useHistory } from "react-router-dom";

import SearchResults from "../screens/SearchResults.jsx";
import Modal from "./Modal.jsx";

import { Container } from "../styled/Container.js";
import { SearchForm, SearchInput } from "../styled/Search.js";

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
    history.push("/dashboard");
  };

  return (
    <Container>
      <Modal
        show={show}
        handleClose={hideModalAndRedirect}
        size="large"
        currentUser={currentUser}
      >
        <SearchResults
          searchTerm={formData.searchTerm}
          cocktails={cocktails}
          hideModal={hideModal}
          currentUser={currentUser}
        />
      </Modal>
      <SearchForm
        onSubmit={(e) => {
          e.preventDefault();
          showModal();
        }}
      >
        {/* <label htmlFor="search"></label> */}
        <SearchInput
          name="searchTerm"
          type="text"
          autoComplete="off"
          value={searchTerm}
          onChange={handleChange}
          currentUser={currentUser}
          autoFocus
        />
        <SearchInput type="submit" value="search" currentUser={currentUser} />
      </SearchForm>
    </Container>
  );
}

export default Search;
