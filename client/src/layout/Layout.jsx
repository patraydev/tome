import Navbar from "./Navbar.jsx";

import { Children } from "../styled/Layout";

export default function Layout(props) {
  const { currentUser, handleUpdateUser, handleLogout } = props;

  return (
    <>
      <Navbar
        currentUser={currentUser}
        handleUpdateUser={handleUpdateUser}
        handleLogout={handleLogout}
      />
      <Children>{props.children}</Children>
    </>
  );
}
