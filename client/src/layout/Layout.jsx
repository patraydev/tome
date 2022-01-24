import MrsNavbar from "./MrsNavbar.jsx";
import Navbar from "./Navbar.jsx";

import "../assets/style/Layout.css";

export default function Layout(props) {
  const { currentUser} = props;

  return (
    <div className="layout-main">
      <div className="layout-nav">
        <Navbar currentUser={currentUser} />
      </div>
      <div className="layout-kids">{props.children}</div>
    </div>
  );
}
