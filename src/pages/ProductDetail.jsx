import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'
import { MetaTags } from '../components/MetaTags'

function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  const [enlargedImage, setEnlargedImage] = useState(null)

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
            <p className="detail-note">Industry-leading battery life for long-term reliability.</p>
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

      {product.additionalImages && product.additionalImages.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Additional Views</p>
                <h2>Product Images</h2>
              </div>
            </div>
            <div className="product-grid">
              {product.additionalImages.map((img, index) => (
                <div 
                  key={index} 
                  className="product-card" 
                  onClick={() => setEnlargedImage(img)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={img} alt={`${product.name} - view ${index + 2}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {enlargedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem'
          }}
          onClick={() => setEnlargedImage(null)}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              padding: '2rem',
              maxWidth: '800px',
              maxHeight: '90vh',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setEnlargedImage(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1
              }}
            >
              ×
            </button>
            <img 
              src={enlargedImage} 
              alt="Enlarged view"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 'calc(90vh - 4rem)',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
            />
          </div>
        </div>
      )}

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
