import CommunityChat from "./app/CommunityChat";
import ReportIncident from "./app/ReportIncident";
import SafetyResources from "./app/SafteyResources";
import Welcome from "./app/Welcome";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import { Route, Routes, Navigate } from "react-router";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/reportincident" element={<ReportIncident />} />
        <Route path="/communitychatbox" element={<CommunityChat />} />
        <Route path="/safetyresources" element={<SafetyResources />} />
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
