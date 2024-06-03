import uwRedSquare from '../assets/uw-red-square.avif';
import logo from '../assets/logo.png';

function Welcome() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <img src={logo} alt="UW SafeRoute Logo" className="logo" />
          <h1>Campus Cops</h1>
        </div>
      </header>

      <main>
        <div className="container">
          <section className="intro">
            <h1>Welcome to UW Campus Cops</h1>
            <img src={uwRedSquare} alt="UW Red Square during cherry blossom" width="550" className="intro-image" />
            <cite>
              <a href="https://unsplash.com/photos/people-walking-on-street-during-daytime-cI2_bHXCzRg" target="_blank" rel="noopener noreferrer">
                Image by Eunice Choi
              </a>
            </cite>
            <p>
              Welcome to UW Campus Cops, your dedicated safety companion on the University of Washington (UW) Seattle campus. We understand the importance of campus safety and have developed this platform to enhance the well-being and security of all students, faculty, and staff. Our app is designed to address various safety challenges, including theft, assault, and navigation in poorly lit or unfamiliar areas.
            </p>
          </section>
        </div>

        <div className="container">
          <section className="features">
            <h2>Discover Safe Routes, Navigate with Confidence</h2>
            <h3>Explore our Features</h3>
            <p>Real-time Safety Alerts, Interactive Safety Maps, and More.</p>
            <ul>
              <li>Campus Map</li>
              <li>Incident Reports</li>
              <li>Campus Safety Resources</li>
              <li>Community Based Incident Forums</li>
            </ul>
          </section>
        </div>
      </main>

      <footer>
        <p>&copy; 2024 UW Campus Cops. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Welcome;
