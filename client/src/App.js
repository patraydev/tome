import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components";

import AuthContainer from "./containers/AuthContainer.jsx";
import Layout from "./layout/Layout.jsx";
import Dashboard from "./containers/Dashboard.jsx";
import CBB from "./cbb/CBB.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./helpers/auth.js";
import { updateUser } from "./helpers/users.js";

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
    history.push("/dashboard");
  };

  const handleRegister = async (formData) => {
    const currentUser = await registerUser(formData);
    setCurrentUser(currentUser);
    history.push("/dashboard");
  };

  const handleUpdateUser = async (id, formData) => {
    const currentUser = await updateUser(id, formData);
    setCurrentUser(currentUser);
    history.push("/dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    removeToken();
    setCurrentUser(null);
  };

  return (
    <ThemeProvider theme={currentUser || {
      foregroundColor: "whitesmoke",
      backgroundColor: "brown",
    }}>
      <Layout
        currentUser={currentUser}
        handleUpdateUser={handleUpdateUser}
        handleLogout={handleLogout}
      >
        <Switch>
          <Route exact path="/">
            <AuthContainer
              currentUser={currentUser}
              handleLogin={handleLogin}
              handleRegister={handleRegister}
            />
          </Route>
          <Route path="/dashboard">
            <Dashboard
              currentUser={currentUser}
              handleUpdateUser={handleUpdateUser}
              handleLogout={handleLogout}
            />
          </Route>
          <Route path="/cbb" component={CBB} />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
