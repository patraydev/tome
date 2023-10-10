import { Nav, NavIcon, NavBrand, NavItems, NavItem } from "../styled/Navbar";

import icon from "../assets/images/icon01.png";

export default function Navbar({ currentUser, handleUpdateUser, handleLogout }) {
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
            <NavItem to="/dashboard/admin" color={currentUser.foregroundColor}>
              Admin
            </NavItem>
          ) : null}
          <NavItem to="/dashboard/library" color={currentUser.foregroundColor}>
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
      />
    </Nav>
  );
}
