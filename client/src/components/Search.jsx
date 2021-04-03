import {useState,useEffect } from "react";

function Search(props) {
const [] = useState();
useEffect(() => {

},[]);

  return (
    <div className="search-main">
    <Modal show={show} handleClose={hideModal}>
      <Login handleLogin={handleLogin} />
    </Modal>
    <button onClick={showModal}>login</button>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(formData);
      }}
    >
      <label>
        Username:
        <input
          name="email"
          type="text"
          value={username}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  </div>
);
};

export default Search