import SafteyResources from "./app/SafteyResources";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Hello World!</h1>
          </>
        }
      />
      <Route path="/safteyresources" element={<SafteyResources />} />
      <Route
        path="/pageNotFound"
        element={
          <>
            <h1>Page not found</h1>
          </>
        }
      />
      <Route path="*" element={<Navigate to="/pageNotFound" replace />} />
    </Routes>
  );
}

export default App;
