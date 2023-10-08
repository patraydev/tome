import Navbar from "./Navbar.jsx";

import { Children } from "../styled/Layout";

export default function Layout(props) {
  const { currentUser } = props;

  return (
    <>
      <Navbar currentUser={currentUser} />
      <Children>{props.children}</Children>
    </>
  );
}
