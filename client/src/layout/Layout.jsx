import MrsNavbar from "./MrsNavbar.jsx";

import "../assets/style/Layout.css";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="layout-main">
      <div className="layout-nav">
        <MrsNavbar currentUser={currentUser} handleLogout={handleLogout} />
      </div>
      <div className="layout-kids">{props.children}</div>
    </div>
  );
}

// I think the circle has to go here somehow as an image
