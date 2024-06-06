import { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import logo from "../assets/campus_cops_logo.webp";
import { auth } from "./FirebaseConfig.tsx";

interface props {
  user: any;
  onLogout: any;
}

function NavBar(Props: props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      window.location.reload(); // Reload the page after sign out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="Campus Cops Logo" className="logo" />
        <div className="site-title">
          Campus
          <br />
          Cops
        </div>
      </div>
      <div className="nav-links">
        {isMobile ? (
          <Menu
            isOpen={isOpen}
            onStateChange={(state: any) => setIsOpen(state.isOpen)}
          >
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/reportincident" onClick={closeMenu}>
              Report Incident
            </NavLink>
            <NavLink to="/communitychatbox" onClick={closeMenu}>
              Community Chat Forum
            </NavLink>
            <NavLink to="/safetyresources" onClick={closeMenu}>
              Safety Resources
            </NavLink>
            {Props.user ? (
              <button onClick={handleSignOut}>Sign Out</button>
            ) : (
              <NavLink to="/login" onClick={closeMenu}>
                Sign In
              </NavLink>
            )}
          </Menu>
        ) : (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/reportincident">Report Incident</NavLink>
            <NavLink to="/communitychatbox">Community Chat Forum</NavLink>
            <NavLink to="/safetyresources">Safety Resources</NavLink>
            {Props.user ? (
              <button onClick={handleSignOut}>Sign Out</button>
            ) : (
              <NavLink to="/login">Sign In</NavLink>
            )}
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
