import { Link, useSearchParams } from 'react-router-dom'
import { products } from '../data/products'

function Products() {
  const [searchParams] = useSearchParams()
  const searchQuery = (searchParams.get('search') || '').trim().toLowerCase()
  const filteredProducts = searchQuery
    ? products.filter((product) =>
        [product.name, product.summary, product.category, product.slug]
          .join(' ')
          .toLowerCase()
          .includes(searchQuery),
      )
    : products

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <p className="eyebrow">Product catalog</p>
          <h1>Wireless sensors & life safety</h1>
          <p className="lead">
            Discover the full MaxOut Technologies lineup built for the longest
            wireless range from the control, reliable sensor response, and the
            longest battery life.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className="empty-state">
              <h3>No products found</h3>
              <p>Try a different search term.</p>
            </div>
          ) : (
            <div className="product-grid">
              {filteredProducts.map((product) => (
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
          )}
        </div>
      </section>
    </div>
  )
}

export default Products
