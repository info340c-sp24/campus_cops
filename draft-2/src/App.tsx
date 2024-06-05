
import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router";
import { auth } from "./components/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import NavBar from "./components/NavBar";
import Welcome from "./app/Welcome";
import ReportIncident from "./app/ReportIncident";
import CommunityChat from "./app/CommunityChat";
import SafetyResources from "./app/SafetyResources";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
    console.log("successful signout");
  };

  return (
    <>
      <NavBar user={user} onLogout={logout} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/reportincident" element={<ReportIncident />} />
        <Route path="/communitychatbox" element={<CommunityChat />} />
        <Route path="/safetyresources" element={<SafetyResources />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/pageNotFound" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
