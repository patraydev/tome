import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Search from "../components/Search.jsx";
import EditCocktail from "../screens/EditCocktail.jsx";
import NewCocktail from "../screens/NewCocktail.jsx";
import Library from '../screens/Library.jsx';
import Admin from '../screens/Admin.jsx';

import circle from '../assets/images/ward.png';

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
    setToggleFetch((t) => !t);
    history.push("/cocktails");
  };

  const editCocktail = async (id, formData) => {
    await updateCocktail(id, formData);
    setToggleFetch((t) => !t);
    history.push("/cocktails");
  };

  return (
    <div className='cocktail-container'> 
      <img src={circle} className='weird-circle' alt='weird spinny circle' />
      <div className='search-bar-box'>
      <Search
        cocktails={cocktails}
        currentUser={currentUser}
        />
        </div>
      <Switch>
        <Route path="/cocktails/edit/:id">
          <EditCocktail
            currentUser={currentUser}
            cocktails={cocktails}
            editCocktail={editCocktail}
          />
        </Route>
        <Route path="/cocktails/new">
          <NewCocktail
            currentUser={currentUser}
            cocktails={cocktails}
            createCocktail={newCocktail}
          />
        </Route>
        <Route path='/cocktails/library'>
          <Library currentUser={currentUser}/>
        </Route>
        <Route path='/cocktails/admin'>
          <Admin currentUser={currentUser} cocktails={cocktails}/>
        </Route>
      </Switch>
    </div>
  );
}

export default CocktailContainer;
