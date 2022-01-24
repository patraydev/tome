import { useState, useEffect, createContext } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Search from "../components/Search.jsx";
import EditCocktail from "../screens/EditCocktail.jsx";
import NewCocktail from "../screens/NewCocktail.jsx";
import Library from "../screens/Library.jsx";
import Admin from "../screens/Admin.jsx";
import Profile from "../screens/Profile.jsx";

import { Container } from '../styled/Container.js';
import { WeirdCircle } from "../styled/WeirdCircle.js";

import ward from "../assets/images/ward.png";

import {
  readAllCocktails,
  createCocktail,
  updateCocktail,
  createRequest,
} from "../helpers/cocktails.js";

import "../assets/style/Dashboard.css";

function CocktailContainer(props) {
  const [cocktails, setCocktails] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  const history = useHistory();

  const { currentUser, handleUpdateUser, handleLogout } = props;

  const UserContext = createContext();

  useEffect(() => {
    const fetchCocktails = async () => {
      const result = await readAllCocktails();
      setCocktails(result);
    };
    fetchCocktails();
  }, [toggleFetch]);

  const newCocktail = async (formData) => {
    // const newCocktail =
    await createCocktail(formData);
    // setCocktails((prevState) => [...prevState, newCocktail]);
    setToggleFetch((t) => !t);
    history.push("/dashboard");
  };

  const editCocktail = async (id, formData) => {
    if (currentUser.is_admin) {
      await updateCocktail(id, formData);
    } else {
      await createRequest(id, formData);
    }
    setToggleFetch((t) => !t);
    history.push("/dashboard");
  };

  // const newRequest = async (formData) => {
  //   await createRequest(formData);
  //   setToggleFetch((t) => !t);
  //   history.push("/dashboard");
  // };

  return (
    <UserContext.Provider value={currentUser}>
      <Container>
        <WeirdCircle src={ward}/>
        <Search cocktails={cocktails} currentUser={currentUser} />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={500} classNames="fade">
              <Switch location={location}>
                <Route path="/dashboard/edit/:id">
                  <EditCocktail
                    currentUser={currentUser}
                    cocktails={cocktails}
                    editCocktail={editCocktail}
                  />
                </Route>
                <Route path="/dashboard/new">
                  <NewCocktail
                    currentUser={currentUser}
                    cocktails={cocktails}
                    createCocktail={newCocktail}
                  />
                </Route>
                <Route path="/dashboard/library">
                  <Library currentUser={currentUser} />
                </Route>
                <Route path="/dashboard/admin">
                  <Admin currentUser={currentUser} cocktails={cocktails} />
                </Route>
                <Route path="/dashboard/profile">
                  <Profile
                    currentUser={currentUser}
                    handleUpdateUser={handleUpdateUser}
                    handleLogout={handleLogout}
                  />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
        />
        </Container>
    </UserContext.Provider>
  );
}

export default CocktailContainer;
