import { Link } from 'react-router-dom'
import lineCardHero from '../assets/images/47__small commercial store.jpg'
import lineCardPdf from '../assets/pdfs/line-card-8_1_25.pdf'

const overviewItems = [
  {
    title: 'Door & window',
    description: 'Mini, recessed, extended range, and shock/contact sensors.',
  },
  {
    title: 'Motion detection',
    description: 'Wall and ceiling mounted PIR detectors with reliable coverage.',
  },
  {
    title: 'Life safety',
    description: 'Smoke/CO, heat, and water detection for comprehensive protection.',
  },
  {
    title: 'Remote control',
    description: 'Keyfob control and panic devices for quick response.',
  },
]

const additionalLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Wireless Security', to: '/wireless-security' },
  { label: 'Products', to: '/products' },
  { label: 'Where to Buy', to: '/where-to-buy' },
  { label: 'Documentation', to: '/documentation' },
  { label: 'Line Card', to: '/line-card' },
  { label: 'Contact', to: '/contact' },
]

function LineCard() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <p className="eyebrow">Line card overview</p>
          <h1>Quick view of Maxout technologies.</h1>
          <p className="lead">
            Wireless security and life-safety sensing products for professional
            dealers and distributors.
          </p>
          <div className="detail-grid" style={{ marginTop: '32px' }}>
            <div className="detail-media">
              <img src={lineCardHero} alt="Line card overview" />
            </div>
            <div>
              <h2>Line card overview</h2>
              <p className="lead">
                Explore our core product families below, then request the full
                dealer line card for specs and ordering details.
              </p>
              <div className="highlight-grid" style={{ marginTop: '20px' }}>
                {overviewItems.map((item) => (
                  <div key={item.title} className="highlight-card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Need the full line card?</p>
              <h2>Get the latest dealer line card.</h2>
              <p className="lead">
                Contact us for current availability, pricing, and onboarding.
              </p>
            </div>
            <a
              className="button primary"
              href={lineCardPdf}
              target="_blank"
              rel="noreferrer"
            >
              Download Maxout Line Card
            </a>
          </div>
          <div className="cta-banner">
            <div>
              <h3>Wireless security sensing products for professionals.</h3>
              <p className="lead">
                Call 763-497-1059 or connect with an authorized distributor.
              </p>
            </div>
            <Link className="button ghost" to="/where-to-buy">
              Find a Dealer
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Additional links</p>
              <h2>Explore more.</h2>
            </div>
          </div>
          <div className="resource-grid">
            {additionalLinks.map((item) => (
              <Link key={item.to} to={item.to} className="resource-card">
                <h3>{item.label}</h3>
                <p>Learn more about {item.label.toLowerCase()}.</p>
              </Link>
            ))}
            <div className="resource-card">
              <h3>Contact</h3>
              <p>12075 43rd Street NE, Suite 500, St. Michael, MN 55376</p>
              <p>
                <a href="mailto:Info@MaxOutTech.com">Info@MaxOutTech.com</a>
                <br />
                763-497-1059
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LineCard
