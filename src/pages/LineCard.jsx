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


    </div>
  )
}

export default LineCard
