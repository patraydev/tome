import { useState, useEffect } from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";

import Modal from "../components/Modal.jsx";
import Search from "../components/Search.jsx";
import EditCocktail from "../screens/EditCocktail.jsx";
import NewCocktail from '../screens/NewCocktail.jsx';

import {
  readAllCocktails,
  createCocktail,
  updateCocktail,
} from "../helpers/cocktails.js";

import "../assets/style/CocktailContainer.css";

function CocktailContainer(props) {
  const [cocktails, setCocktails] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  const history = useHistory();

  const { currentUser } = props;

  useEffect(() => {
    const fetchCocktails = async () => {
      const result = await readAllCocktails();
      setCocktails(result);
    };
    fetchCocktails();
  }, [toggleFetch]);

  const newCocktail = async (formData) => {
    const newCocktail = await createCocktail(formData);
    setCocktails((prevState) => [...prevState, newCocktail]);
    history.push("/cocktails");
  };

  const editCocktail = async (id, formData) => {
    await updateCocktail(id, formData);
    setToggleFetch((t) => !t);
    history.push("/cocktails");
  };


  return (
    <>
      <Search cocktails={cocktails} currentUser={currentUser} setCocktails={setCocktails}/>
      <Switch>
        <Route path="/cocktails/edit/:id">
          <EditCocktail
            currentUser={currentUser}
            cocktails={cocktails}
            editCocktail={editCocktail}
          />
        </Route>
        <Route
          path="/new"
          currentUser={currentUser}
          cocktails={cocktails}
          newCocktail={newCocktail}
        >
          <NewCocktail />
        </Route>
      </Switch>
    </>
  );
}

export default CocktailContainer;
