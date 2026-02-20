import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { products } from '../data/products'
import logo from '../assets/images/maxout_logo.jpg'
import cinchMaxoutBadge from '../assets/images/CinchMaxout20year.webp'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/wireless-security', label: 'Wireless Security' },
  { to: '/products', label: 'Products' },
  { to: '/line-card', label: 'Line Card' },
  { to: '/documentation', label: 'Documentation' },
  { to: '/where-to-buy', label: 'Where to Buy' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Layout() {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    const query = searchQuery.trim()
    navigate(query ? `/products?search=${encodeURIComponent(query)}` : '/products')
  }

  return (
    <div className="layout">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <img className="brand-mark" src={logo} alt="MaxOut Technology" />
            <div>
              <p className="brand-subtitle">Wireless Security & Life Safety Sensors and Detectors</p>
            </div>
            <Link to="/anniversary" className="brand-badge-link">
              <img
                className="brand-badge"
                src={cinchMaxoutBadge}
                alt="Cinch MaxOut 20-year"
              />
            </Link>
          </div>
          <div className="header-actions">
            <nav className="site-nav">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className="nav-link">
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <form className="site-search" onSubmit={handleSearchSubmit}>
              <input
                type="search"
                placeholder="Search products"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                aria-label="Search products"
                list="product-suggestions"
              />
              <datalist id="product-suggestions">
                {products.map((product) => (
                  <option key={product.slug} value={product.name} />
                ))}
              </datalist>
            </form>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-title">MaxOut Technology</p>
            <p className="footer-text">
              High-performance wireless sensors, life safety devices, and control
              solutions for residential and commercial environments.
            </p>
          </div>
          <div>
            <p className="footer-title">Contact</p>
            <p className="footer-text">
              Sales:{' '}
              <a href="mailto:sales@maxouttech.com">sales@maxouttech.com</a>
            </p>
            <p className="footer-text">
              Support:{' '}
              <a href="mailto:support@maxouttech.com">support@maxouttech.com</a>
            </p>
          </div>
          <div>
            <p className="footer-title">Location</p>
            <p className="footer-text">Saint Michael, MN, United States of America</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
