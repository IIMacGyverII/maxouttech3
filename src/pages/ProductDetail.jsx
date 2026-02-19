import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'

function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    return (
      <div className="page">
        <section className="section">
          <div className="container">
            <p className="eyebrow">Product not found</p>
            <h1>We couldn’t find that product.</h1>
            <Link className="button primary" to="/products">
              Back to catalog
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="page">
      <section className="section">
        <div className="container detail-grid">
          <div className="detail-media">
            <img src={product.image} alt={product.name} />
          </div>
          <div>
            <p className="eyebrow">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="lead">{product.summary}</p>
            <ul className="detail-list">
              <li>Encrypted wireless communication</li>
              <li>Extended battery life options</li>
              <li>Fast installation with minimal tools</li>
              <li>Supports commercial and residential deployments</li>
            </ul>
            <div className="detail-actions">
              <Link className="button ghost" to="/documentation">
                View documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">More products</p>
              <h2>Explore the lineup</h2>
            </div>
            <Link className="button ghost" to="/products">
              View catalog
            </Link>
          </div>
          <div className="product-grid">
            {products
              .filter((item) => item.slug !== product.slug)
              .slice(0, 3)
              .map((item) => (
                <Link
                  className="product-card"
                  key={item.slug}
                  to={`/products/${item.slug}`}
                >
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p className="product-title">{item.name}</p>
                    <p className="product-text">{item.summary}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
