import { useState, useEffect } from "react";
import { CampusMap, Location } from "../components/CampusMap";
import { ref, onValue, push } from "firebase/database";
import { db } from "../components/FirebaseConfig"; // Assuming you have firebase.js setup properly
import CAMPUS_LOCATIONS from "./data/CampusLocations";

function ReportIncident() {
  const [incidentLocationName, setIncidentLocationName] = useState<string>();
  const [incidentType, setIncidentType] = useState<string>();
  const [incidentLocations, setIncidentLocations] = useState<Location[]>([]);

  useEffect(() => {
    const incidentsRef = ref(db, "incidents");

    const handleSnapshot = (snapshot: any) => {
      const incidentsData = snapshot.val();

      if (incidentsData) {
        const incidentsArray = Object.values(incidentsData).map(
          (incident: any) => ({
            name: incident.location,
            coords: findCoordinates(incident.location),
            incidentType: incident.type,
          })
        );
        setIncidentLocations(incidentsArray);
      }
    };

    const unsubscribe = onValue(incidentsRef, handleSnapshot);

    return () => {
      unsubscribe();
    };
  }, []);

  // Helper function to find coordinates from CAMPUS_LOCATIONS array
  const findCoordinates = (
    locationName: string
  ): { lat: number; lng: number } => {
    const location = CAMPUS_LOCATIONS.find((loc) => loc.name === locationName);
    return location ? location.coords : { lat: 0, lng: 0 }; // Default coordinates if not found
  };

  const onReportIncidentSubmit = (event: any) => {
    event.preventDefault();
    let updatedIncidentLocations = incidentLocations.map((location) => {
      if (location.name === incidentLocationName) {
        return {
          ...location,
          incidentType: incidentType,
        };
      }
      return location;
    });

    setIncidentLocations(updatedIncidentLocations);

    // Upload incident to the database
    const newIncident = {
      location: incidentLocationName,
      type: incidentType,
      timestamp: Date.now(),
    };

    const incidentsRef = ref(db, "incidents");
    push(incidentsRef, newIncident)
      .then(() => {
        console.log("Incident reported successfully");
      })
      .catch((error) => {
        console.error("Error reporting incident: ", error);
      });
  };

  return (
    <>
      <main>
        <h1>Report Incident</h1>
        <CampusMap incidentLocations={incidentLocations} />
        <div className="content">
          <form onSubmit={onReportIncidentSubmit}>
            <label htmlFor="incident-title">Title:</label>
            <br />
            <input type="text" name="incident-title" />
            <br />

            <label htmlFor="incident-location">Location:</label>
            <select
              name="incident-location"
              value={incidentLocationName}
              onChange={(choice) =>
                setIncidentLocationName(choice.target.value)
              }
              required
            >
              <option disabled selected>
                {" "}
                -- select an option --{" "}
              </option>
              {CAMPUS_LOCATIONS.map((location: Location) => (
                <option value={location.name} key={location.name}>
                  {location.name}
                </option>
              ))}
            </select>
            <br />

            <label htmlFor="incident-type">Type:</label>
            <br />
            <select
              id="incident-type"
              name="incident-type"
              value={incidentType}
              onChange={(choice) => setIncidentType(choice.target.value)}
              required
            >
              <option disabled selected>
                {" "}
                -- select an option --{" "}
              </option>
              <option value="Assault">Assault</option>
              <option value="Theft">Theft</option>
              <option value="Hit and Run">Hit and Run</option>
              <option value="Suspicious Activity">Suspicious Activity</option>
              <option value="Other">Other</option>
            </select>
            <br />

            <button type="submit">Submit Incident</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default ReportIncident;
