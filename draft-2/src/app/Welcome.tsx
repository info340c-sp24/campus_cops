import uwRedSquare from "../assets/uw-red-square.avif";
import uwCampusMap from "../assets/UW-Campus-Map.png";

function Welcome() {
  return (
    <>
      <main>
        <div className="container">
          <div className="content">
            <em><strong><h1>Welcome to Campus Cops!</h1></strong></em>
            <img
              src={uwRedSquare}
              alt="UW Red Square during cherry blossom"
              aria-label="Image of UW Red Square during cherry blossom"
            />
            <cite>
              Image by<span> </span>
              <a
                href="https://unsplash.com/photos/people-walking-on-street-during-daytime-cI2_bHXCzRg"
                aria-label="Image by Eunice Choi on Unsplash"
              >
                Eunice Choi
              </a>
            </cite>
            <p>
              Welcome to UW Campus Cops, your dedicated safety companion on the
              University of Washington (UW) Seattle campus. We understand the
              importance of campus safety and have developed this platform to
              enhance the well-being and security of all students, faculty, and
              staff. Our app is designed to address various safety challenges,
              including theft, assault, and navigation in poorly lit or
              unfamiliar areas.
            </p>
          </div>
          <div className="content">
            <img
              src={uwCampusMap}
              alt="UW Campus"
              aria-label="Map of UW Campus"
            />
            <cite>
              Campus Map by<span> </span>
              <a
                href="https://campusvisitorguides.com/uw/uw-campus-map/"
                aria-label="Campus Map by University of Washington"
              >
                University of Washington
              </a>
            </cite>
            <h2>Discover Safe Routes, Navigate with Confidence</h2>
            <h3>Explore our Features</h3>
            <p>Real-time Safety Alerts, Interactive Safety Maps, and More.</p>
            <ul>
              <li>Campus Map</li>
              <li>Incident Reports</li>
              <li>Campus Safety Resources</li>
              <li>Community Based Incident Forums</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Welcome;
