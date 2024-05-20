import uwRedSquare from '../assets/uw-red-square.avif';
import uwCampusMap from '../assets/UW-Campus-Map.png';
import logo from '../assets/logo.png';

function Welcome() {
  return (
    <>
      <header>
        <h1>Campus Cops</h1>
        <img src={logo} alt="UW SafeRoute Logo" className="logo" />
      </header>

      <main>
        <div className="container">
          <div className="msg-header">
            <h1>Welcome to UW Campus Cops</h1>
            <img src={uwRedSquare} alt="UW Red Square during cherry blossom" width="550" />
            <cite><a href="https://unsplash.com/photos/people-walking-on-street-during-daytime-cI2_bHXCzRg" target="_blank" rel="noopener noreferrer">Image by Eunice Choi</a></cite>
          </div>
          <p>Welcome to UW Campus Cops, your dedicated safety companion on the University of Washington (UW) Seattle campus. We understand the importance of campus safety and have developed this platform to enhance the well-being and security of all students, faculty, and staff. Our app is designed to address various safety challenges, including theft, assault, and navigation in poorly lit or unfamiliar areas.</p>
          <img src={uwCampusMap} alt="Map of the University of Washington campus area" width="550" />
          <cite><a href="https://campusvisitorguides.com/uw/uw-campus-map/" target="_blank" rel="noopener noreferrer">Image from UW official website</a></cite>

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
      </main>
    </>
  );
}

export default Welcome;