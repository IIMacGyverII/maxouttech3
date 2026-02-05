import storefrontImage from '../assets/images/47__small commercial store.jpg'
import apartmentImage from '../assets/images/48__apartment building.jpg'

function WirelessSecurity() {
  return (
    <div className="page">
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
