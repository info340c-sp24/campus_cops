import CommunityChat from "./app/CommunityChat";
import ReportIncident from "./app/ReportIncident";
import SafteyResources from "./app/SafteyResources";
import Welcome from "./app/Welcome";

import Head from "./app/components/Head";
import Footer from "./app/components/Footer";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/reportincident" element={<ReportIncident />} />
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

      <Footer />
    </>
  );
}

export default App;
