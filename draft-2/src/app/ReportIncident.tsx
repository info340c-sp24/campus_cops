function ReportIncident(props: any) {
    return (
        <>
            <main>
                <h1>Report Incident</h1>
                <form action="submit_incident.php" method="post">
                <label htmlFor="incident-title">Title:</label>
                <br />
                <input
                    type="text"
                    id="incident-title"
                    name="incident-title"
                    required
                />
                <br />
        
                <label htmlFor="incident-description">Description:</label>
                <textarea
                    id="incident-description"
                    name="incident-description"
                    rows={4}
                    required
                />
                <br />
                
                <label htmlFor="incident-location">Location:</label>
                <select id="incident-location" name="incident-location" required>
                    {props.locations.map((location: any) => (
                        <option value={location.name} key={location.name}>{location.name}</option>
                    ))};
                </select>
                <br />
        
                <label htmlFor="incident-type">Type:</label><br />
                <select id="incident-type" name="incident-type" required>
                    <option value="accident">Assault</option>
                    <option value="safety-issue">Theft</option>
                    <option value="hit-and-run">Hit and Run</option>
                    <option value="suspicious-activity">Suspicious Activity</option>
                    <option value="other">Other</option>
                </select>
                <br />
                
                <button type="submit">Submit Incident</button>
                </form>
            </main>
        </>
        );
    }
    
    export default ReportIncident;
    