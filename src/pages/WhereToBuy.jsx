import { Link } from 'react-router-dom'
import securityDataSupplyLogo from '../assets/images/sdslogovideo.webp'
import wescoLogo from '../assets/images/wescovideo.webp'
import loneStarLogo from '../assets/images/lonestarvideo.webp'
import sssiLogo from '../assets/images/sssivideo.webp'
import maxoutLogo from '../assets/images/apdvideo.webp'
import alarmaxLogo from '../assets/images/alarmaxlogovideo.webp'

const channels = [
  {
    title: 'Authorized distributors',
    text: 'Partner with nationwide distributors for rapid fulfillment.',
  },
  {
    title: 'Security integrators',
    text: 'Work with certified integrators for design and installation.',
  },
  {
    title: 'OEM partnerships',
    text: 'Build customized programs with our OEM team.',
  },
]

const partnerCards = [
  {
    name: 'Alarmax',
    image: alarmaxLogo,
    href: 'https://www.alarmax.com/',
  },
  {
    name: 'Alarm Parts Depot',
    image: maxoutLogo,
    href: 'https://apdlink.com/',
  },
  {
    name: 'Lone Star',
    image: loneStarLogo,
    href: 'https://www.lonestar-us.com/',
  },
  {
    name: 'SS&Si',
    image: sssiLogo,
    href: 'https://shop.ssandsi.com/',
  },
  {
    name: 'Security Data Supply',
    image: securityDataSupplyLogo,
    href: 'https://securitydatasupply.com/',
  },
  {
    name: 'Wesco',
    image: wescoLogo,
    href: 'https://www.wesco.com/',
  },
]

function WhereToBuy() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <p className="eyebrow">Where to buy</p>
          <h1>Find a partner near you.</h1>
          <p className="lead">
            We connect you with distributors and integrators that best match your
            project scope and location.
          </p>
          <div className="highlight-grid">
            {channels.map((channel) => (
              <div className="highlight-card" key={channel.title}>
                <h3>{channel.title}</h3>
                <p>{channel.text}</p>
              </div>
            ))}
          </div>
          <div className="section-head" style={{ marginTop: '36px' }}>
            <div>
              <p className="eyebrow">Authorized partners</p>
              <h2>Featured distributors & programs</h2>
            </div>
          </div>
          <div className="partner-grid">
            {partnerCards.map((partner) => (
              partner.href.startsWith('http') ? (
                <a
                  className="partner-card"
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={partner.image} alt={partner.name} />
                  <p>{partner.name}</p>
                </a>
              ) : (
                <Link className="partner-card" key={partner.name} to={partner.href}>
                  <img src={partner.image} alt={partner.name} />
                  <p>{partner.name}</p>
                </Link>
              )
            ))}
          </div>
          <div className="cta-banner">
            <div>
              <h3>Need help locating inventory?</h3>
              <p>Send your requirements and our team will respond quickly.</p>
            </div>
            <Link className="button primary" to="/contact">
              Contact sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhereToBuy
