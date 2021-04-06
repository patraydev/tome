import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import Dashboard from './screens/Dashboard.jsx';
import Layout from "./layout/Layout.jsx";
import Login from "./screens/Login.jsx";
import Register from "./screens/Register.jsx";
import CocktailContainer from "./containers/CocktailContainer.jsx";

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./helpers/auth.js";

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
    console.log(formData);
    const currentUser = await loginUser(formData);
    setCurrentUser(currentUser);
    history.push("/cocktails");
  };

  const handleRegister = async (formData) => {
    const currentUser = await registerUser(formData);
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
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path="/cocktails">
            <CocktailContainer currentUser={currentUser} />
          </Route>
          <Route path="/">
            <Dashboard handleLogin={handleLogin} handleRegister={handleRegister}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
