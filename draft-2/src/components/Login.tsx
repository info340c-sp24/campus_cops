import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./FirebaseConfig.tsx";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setError(error.message);
      console.error(error);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setError(error.message);
      console.error(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        marginTop: "50px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <button
        onClick={handleLogin}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      >
        Login
      </button>
      <button
        onClick={handleSignUp}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          backgroundColor: "green",
          color: "#fff",
          border: "none",
        }}
      >
        Sign Up
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
