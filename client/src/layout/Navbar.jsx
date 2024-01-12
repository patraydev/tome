import { useState, useEffect } from "react";

import { Nav, NavIcon, NavBrand, NavItems, NavItem } from "../styled/Navbar";

import icon from "../assets/images/icon01.png";



export default function Navbar({ currentUser, handleUpdateUser, handleLogout }) {

  //to use the seals profile avatars eventually
  // const [path, setPath] = useState("../assets/images/icon01.png");

  // useEffect(() => {
  //   if (currentUser) {
  //     setPath(`./seals/${currentUser.seal}.png`);
  //   }
  // }, []);

  return (
    <Nav currentUser={currentUser}>
      <NavBrand
        to="/dashboard"
        color={currentUser ? currentUser.foregroundColor : "whitesmoke"}
      >
        TOME
      </NavBrand>
      {currentUser ? (
        <NavItems>
          {currentUser.is_admin ? (
            <NavItem to="/dashboard/admin" currentUser={currentUser}>
              Admin
            </NavItem>
          ) : null}
          <NavItem to="/dashboard/library" currentUser={currentUser}>
            Library
          </NavItem>
        </NavItems>
      ) : null}
      <NavIcon
        to="/dashboard/profile"
        src={icon}
        currentUser={currentUser}
        handleUpdateUser={handleUpdateUser}
        handleLogout={handleLogout}
        style={{filter: "blur(.5px)"}}
      />
    </Nav>
  );
}
