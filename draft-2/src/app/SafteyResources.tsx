import uwNightShuttle from "../assets/uw-night-shuttle.png";
import Head from "./components/Head";

function SafteyResources() {
  return (
    <>
    <Head/>
      <main>
        <section>
          <div className="container">
            <img
              src={uwNightShuttle}
              alt="Map of the University of Washington night shuttle pick up location in West and North campus."
              width="500"
            />
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
                <a target="_blank" href="https://police.uw.edu/">
                  https://police.uw.edu/
                </a>
              </li>
              <li>
                <strong>Emergency Management:</strong>
                <a target="_blank" href="https://www.washington.edu/emergency/">
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

export default SafteyResources;
