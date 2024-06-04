import uwNightShuttle from "../assets/uw-night-shuttle.png";

function SafetyResources() {
  return (
    <>
      <main>
        <section>
          <div className="content">
            <img
              src={uwNightShuttle}
              alt="Map of the University of Washington night shuttle pick up location in West and North campus."
              width="500"
              aria-label="Map of the University of Washington night shuttle pick up locations in West and North campus."
            />
            <cite>Map from <span> </span>
              <a
                href="https://transportation.uw.edu/getting-around/shuttles/nightride"
                aria-label="Night ride shuttle map from University of Washington"
              >
              University of Washington
              </a>
            </cite>
            <h2>Emergency Contacts</h2>
            <ul>
              <li>Police Department 911</li>
              <li>
                <strong>Non-Emergency Police:</strong> (206) 685-8973
              </li>
              <li>
                <strong>Emergency Management:</strong> (206) 897-8000
              </li>
            </ul>
            <h2>Campus Safety Resources</h2>
            <p>
              Here are some additional resources for staying safe on campus:
            </p>
            <ul>
              <li>
                <strong>UW Police Department:</strong>
                <a target="_blank" href="https://police.uw.edu/" aria-label="Link to UW Police Department website">
                  https://police.uw.edu/
                </a>
              </li>
              <li>
                <strong>Emergency Management:</strong>
                <a target="_blank" href="https://www.washington.edu/emergency/" aria-label="Link to UW Emergency Management website">
                  https://www.washington.edu/emergency/
                </a>
              </li>
              <li>
                <strong>Husky NightWalk:</strong> Provides walking escorts on
                campus after dark. Call (206) 685-WALK (9255) or use the Husky
                NightWalk app.
              </li>
              <li>
                <strong>SafeCampus:</strong> Confidential advocacy and support
                for safety concerns. Call (206) 685-SAFE (7233) or visit
                <a
                  target="_blank"
                  href="https://www.washington.edu/safecampus/"
                  aria-label="Link to SafeCampus website"
                >
                  https://www.washington.edu/safecampus/
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default SafetyResources;
