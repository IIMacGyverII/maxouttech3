import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'
import { MetaTags } from '../components/MetaTags'

function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    return (
      <>
        <MetaTags 
          title="Product Not Found | MaxOut Technology"
          description="The product you're looking for could not be found. Browse our complete product catalog."
          url="https://IIMacGyverII.github.io/maxouttech3/#/products"
        />
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
      </>
    )
  }

  return (
    <>
      <MetaTags 
        title={`${product.name} | MaxOut Technology`}
        description={product.summary + ' Learn more about features, compatibility, and documentation.'}
        url={`https://IIMacGyverII.github.io/maxouttech3/#/products/${product.slug}`}
      />
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
            {product.description ? (
              <div className="product-description" style={{ whiteSpace: 'pre-wrap' }}>
                {product.description}
              </div>
            ) : (
              <ul className="detail-list">
                <li>Encrypted wireless communication</li>
                <li>Extended battery life options</li>
                <li>Fast installation with minimal tools</li>
                <li>Supports commercial and residential deployments</li>
              </ul>
            )}
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
    </>
  )
}

export default ProductDetail
