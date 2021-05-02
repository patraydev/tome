import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import AuthContainer from "./containers/AuthContainer.jsx";
import Layout from "./layout/Layout.jsx";
import CocktailContainer from "./containers/CocktailContainer.jsx";

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./helpers/auth.js";
import { updateUser } from "./helpers/users.js";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const currentUser = await verifyUser();
      setCurrentUser(currentUser);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const currentUser = await loginUser(formData);
    setCurrentUser(currentUser);
    history.push("/cocktails");
  };

  const handleRegister = async (formData) => {
    const currentUser = await registerUser(formData);
    setCurrentUser(currentUser);
    history.push("/cocktails");
  };

  const handleUpdateUser = async (formData) => {
    const currentUser = await updateUser(formData);
    setCurrentUser(currentUser);
    history.push("/cocktails");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    removeToken();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser}>
        <Switch>
          <Route path="/cocktails">
            <CocktailContainer
              currentUser={currentUser}
              handleUpdateUser={handleUpdateUser}
              handleLogout={handleLogout}
            />
          </Route>
          <Route path="/">
            <AuthContainer
              handleLogin={handleLogin}
              handleRegister={handleRegister}
            />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
