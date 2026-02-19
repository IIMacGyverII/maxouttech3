import { Link } from 'react-router-dom'
import { products } from '../data/products'
import heroImage from '../assets/images/homeradar.webp'

const highlights = [
  {
    title: 'Secure by design',
    text: 'Wireless sensors engineered for high reliability and low false alarms.',
  },
  {
    title: 'Life safety ready',
    text: 'Smoke, CO, heat, and water detection options for full coverage.',
  },
  {
    title: 'Built to scale',
    text: 'Solutions for homes, retail, industrial, and multi-tenant properties.',
  },
]

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Wireless Security Platform</p>
            <h1>Modern protection for people and property.</h1>
            <p className="lead">
              Maxout Technology delivers wireless sensors and life safety devices that
              integrate seamlessly with today’s security systems.
            </p>
            <div className="hero-actions">
              <Link className="button primary" to="/products">
                Explore products
              </Link>
              <Link className="button ghost" to="/contact">
                Questions
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img src={heroImage} alt="Wireless security coverage" />
            <div className="hero-card-content">
              <p className="hero-card-title">Total coverage</p>
              <p className="hero-card-text">
                Indoor, perimeter, and life safety sensors designed for fast
                installation and dependable performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container highlight-grid">
          {highlights.map((item) => (
            <div className="highlight-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Featured products</p>
              <h2>Best-in-class wireless sensors</h2>
            </div>
            <Link className="button ghost" to="/products">
              View all
            </Link>
          </div>
          <div className="product-grid">
            {products.slice(0, 6).map((product) => (
              <Link
                className="product-card"
                key={product.slug}
                to={`/products/${product.slug}`}
              >
                <img src={product.image} alt={product.name} />
                <div>
                  <p className="product-title">{product.name}</p>
                  <p className="product-text">{product.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
