import { Link } from 'react-router-dom'
import { products } from '../data/products'

function Products() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <p className="eyebrow">Product catalog</p>
          <h1>Wireless sensors & life safety</h1>
          <p className="lead">
            Discover the full Maxouttech lineup built for reliability, long
            battery life, and fast deployments.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container product-grid">
          {products.map((product) => (
            <Link
              className="product-card"
              key={product.slug}
              to={`/products/${product.slug}`}
            >
              <img src={product.image} alt={product.name} />
              <div>
                <p className="product-title">{product.name}</p>
                <p className="product-text">{product.summary}</p>
                <span className="product-tag">{product.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Products
