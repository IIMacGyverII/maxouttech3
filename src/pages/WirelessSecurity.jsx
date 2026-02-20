import storefrontImage from '../assets/images/47__small commercial store.jpg'
import apartmentImage from '../assets/images/48__apartment building.jpg'
import maxoutPromoPoster from '../assets/images/maxoutpromo1.jpg'
import wirelessPromoVideo from '../assets/videos/maxoutpromo1.mp4'

import { MetaTags } from '../components/MetaTags'

function WirelessSecurity() {
  return (
    <>
      <MetaTags 
        title="Wireless Security | MaxOut Technology"
        description="Discover flexible, scalable wireless security solutions for residential and commercial environments. MaxOut Technology's wireless platform provides multi-point coverage with enterprise-grade reliability."
        url="https://IIMacGyverII.github.io/maxouttech3/#/wireless-security"
      />
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
              Our wireless sensors deliver the longest battery life in the industry,
              enabling rapid installations across residential and commercial
              environments without frequent maintenance.
            </p>
            <ul className="detail-list">
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
    </>
  )
}

export default WirelessSecurity
