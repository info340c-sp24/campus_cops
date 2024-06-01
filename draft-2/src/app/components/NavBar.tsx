import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/reportincident"}>Report Incident</Link>
      <Link to={"/communitychatbox"}>Community Chat Forum</Link>
      <Link to={"/safteyresources"}>Safety Resources</Link>
    </nav>
  );
}

export default NavBar;
