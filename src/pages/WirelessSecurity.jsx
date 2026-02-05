import storefrontImage from '../assets/images/47__small commercial store.jpg'
import apartmentImage from '../assets/images/48__apartment building.jpg'
import maxoutPromoPoster from '../assets/images/maxoutpromo1.jpg'
import wirelessPromoVideo from '../assets/videos/maxoutpromo1.mp4'

function WirelessSecurity() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Wireless Security Video</p>
              <h2>See wireless protection in action.</h2>
              <p className="lead">
                A quick walkthrough of wireless sensor placement, coverage
                testing, and mobile alerts.
              </p>
            </div>
          </div>
          <div className="video-card">
            <div className="video-frame">
              <video controls poster={maxoutPromoPoster} preload="metadata">
                <source src={wirelessPromoVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-card-body">
              <h3>Wireless Security Overview</h3>
              <p>
                Highlighting flexible installs, reliable RF performance, and
                real-time notifications.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Wireless Security</p>
            <h1>Reliable coverage without the wires.</h1>
            <p className="lead">
              Our wireless sensors are engineered for stable RF performance, long
              battery life, and rapid installations across residential and
              commercial environments.
            </p>
            <ul className="detail-list">
              <li>Multi-point encryption for secure signaling</li>
              <li>Flexible mounting options for retrofit projects</li>
              <li>Scalable for multi-site and enterprise deployments</li>
            </ul>
          </div>
          <div className="image-stack">
            <img src={storefrontImage} alt="Wireless storefront protection" />
            <img src={apartmentImage} alt="Multi-tenant security" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default WirelessSecurity
