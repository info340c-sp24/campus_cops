import CommunityChat from "./app/CommunityChat";
import Report from "./app/Report";
import SafteyResources from "./app/SafteyResources";
import Welcome from "./app/Welcome";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/reportincident" element={<Report />} />
      <Route path="/communitychatbox" element={<CommunityChat />} />
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
