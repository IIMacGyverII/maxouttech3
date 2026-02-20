import { Link } from 'react-router-dom'
import lineCardPdf from '../assets/pdfs/line-card-8_1_25.pdf'

const lineCardFeatures = [
  {
    title: 'Product Families',
    description: 'Complete overview of all MaxOut Technology sensor and detector product lines.',
  },
  {
    title: 'Specifications',
    description: 'Technical details, frequency options, and performance characteristics.',
  },
  {
    title: 'Part Numbers',
    description: 'Accurate SKUs and part numbers for ordering and inventory management.',
  },
  {
    title: 'Features & Benefits',
    description: 'Key differentiators and why MaxOut sensors outperform the competition.',
  },
]

import { MetaTags } from '../components/MetaTags'

function LineCard() {
  return (
    <>
      <MetaTags 
        title="Line Card | MaxOut Technology"
        description="Download the MaxOut Technology line card. Complete product overview with specifications, features, and part numbers for professional security dealers and distributors."
        url="https://IIMacGyverII.github.io/maxouttech3/#/line-card"
      />
      <div className="page">
      <section className="section">
        <div className="container">
          <p className="eyebrow">Line card</p>
          <h1>MaxOut Technology Product Line Card</h1>
          <p className="lead">
            The complete guide to our wireless sensors and life-safety devices.
            Everything you need to specify, order, and integrate MaxOut products.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>What's included in the line card</h2>
              <p className="lead">
                The MaxOut line card provides a comprehensive overview of our complete product portfolio, with detailed specifications and ordering information.
              </p>
            </div>
          </div>
          <div className="highlight-grid">
            {lineCardFeatures.map((feature) => (
              <div key={feature.title} className="highlight-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div>
              <h2>Download the MaxOut Line Card</h2>
              <p className="lead">
                Get the latest product specifications, part numbers, and dealer information for all MaxOut Technology wireless sensors and life-safety devices.
              </p>
            </div>
            <a
              className="button primary"
              href={lineCardPdf}
              target="_blank"
              rel="noreferrer"
            >
              Download Line Card (PDF)
            </a>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Ready to order?</h2>
              <p className="lead">
                MaxOut Technology products are available through authorized distributors serving professional security installers.
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link className="button ghost" to="/where-to-buy">
              Find an Authorized Distributor
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default LineCard
