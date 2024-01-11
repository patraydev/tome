import { useState } from "react";
import { useHistory } from "react-router-dom";

import SearchResults from "../screens/SearchResults.jsx";
import Modal from "./Modal.jsx";

import { Container } from "../styled/Container.js";
import { SearchForm, SearchInput } from "../styled/Forms.js";
import { Button } from "../styled/Buttons.js";


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
        <Button type="submit" currentUser={currentUser}>Search</Button>
      </SearchForm>
    </Container>
  );
}

export default Search;
