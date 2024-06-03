import { useState } from "react";
import { CampusMap, Location } from "./components/CampusMap";
import CAMPUS_LOCATIONS from "./data/CampusLocations";

function ReportIncident() {
  const [incidentLocationName, setIncidentLocationName] = useState<string>();
  const [incidentType, setIncidentType] = useState<string>();
  const [incidentLocations, setIncidentLocations] =
    useState<Location[]>(CAMPUS_LOCATIONS);

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
              ;
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
              <option value="Safety Issue">Theft</option>
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
