import { Link } from 'react-router-dom'
import securityDataSupplyLogo from '../assets/images/sdslogovideo.webp'
import wescoLogo from '../assets/images/wescovideo.webp'
import loneStarLogo from '../assets/images/lonestar.png'
import sssiLogo from '../assets/images/ss&si.webp'
import maxoutLogo from '../assets/images/APDlogo_MAIN_2023_2C_1.png'
import alarmaxLogo from '../assets/images/AlarMaxLogo-No-Contact-K.png'

const partnerCards = [
  {
    name: 'Alarmax',
    image: alarmaxLogo,
    href: 'https://www.alarmax.com/',
  },
  {
    name: 'Alarm Parts Distributors',
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

import { MetaTags } from '../components/MetaTags'

function WhereToBuy() {
  return (
    <>
      <MetaTags 
        title="Where to Buy | MaxOut Technology"
        description="Find an authorized MaxOut Technology distributor. We work with trusted partners to bring our wireless sensors and life safety devices to security professionals nationwide."
        url="https://IIMacGyverII.github.io/maxouttech3/#/where-to-buy"
      />
      <div className="page">
      <section className="section">
        <div className="container">
          <p className="eyebrow">Where to buy</p>
          <h1>Find a MaxOut distributor near you.</h1>
          <p className="lead">
            We connect you with distributors that best match your
            project scope and location.
          </p>
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
        </div>
      </section>
    </div>
    </>
  )
}

export default WhereToBuy
