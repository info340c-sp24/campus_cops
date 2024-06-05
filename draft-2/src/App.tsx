import CommunityChat from "./app/CommunityChat";
import ReportIncident from "./app/ReportIncident";
import SafetyResources from "./app/SafteyResources";
import Welcome from "./app/Welcome";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { auth } from "./components/FirebaseConfig";

import { useState } from "react";
import { Route, Routes, Navigate } from "react-router";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import firebase from "firebase/compat/app";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error: any) {
      console.log(error);
    }
  };

  const login = async () => {
    try {
      const newUser = await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.log(error);
    }
  };

  const logout = async () => {
    await signOut(auth);
    console.log("successful signout");
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/reportincident" element={<ReportIncident />} />
        <Route path="/communitychatbox" element={<CommunityChat />} />
        <Route path="/safetyresources" element={<SafetyResources />} />

        <Route
          path="/signup"
          element={
            <>
              <div>
                <h1>Sign Up</h1>
                <section>
                  <Link to={"/login"}>Sign In</Link>
                  <form>
                    <input
                      type="text"
                      placeholder="Email"
                      onChange={(event) => {
                        setRegisterEmail(event.target.value);
                      }}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      onChange={(event) => {
                        setRegisterPassword(event.target.value);
                      }}
                    />
                    <button type="submit" onClick={register}>
                      Submit
                    </button>
                  </form>
                </section>
              </div>
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <div>
                <h1>Sign Up</h1>
                <section>
                  <Link to={"/signup"}>Sign Up</Link>
                  <form>
                    <input
                      type="text"
                      placeholder="Email"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                    <button type="submit" onClick={login}>
                      Submit
                    </button>
                  </form>
                </section>
              </div>
            </>
          }
        />
        <Route
          path="/logout"
          element={
            <div>
              <main>
                <p>{}</p>
                <button type="submit" onClick={logout}>
                  Sign Out
                </button>
              </main>
            </div>
          }
        />

        <Route
          path="/pageNotFound"
          element={
            <>
              <h1>Page Not Found</h1>
            </>
          }
        />
        <Route path="*" element={<Navigate to="/pageNotFound" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
