import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/images/maxout_logo.jpg'
import cinchMaxoutBadge from '../assets/images/CinchMaxout20year.webp'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/wireless-security', label: 'Wireless Security' },
  { to: '/line-card', label: 'Line Card' },
  { to: '/documentation', label: 'Documentation' },
  { to: '/about', label: 'About' },
  { to: '/where-to-buy', label: 'Where to Buy' },
  { to: '/contact', label: 'Contact' },
]

function Layout() {
  return (
    <div className="layout">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <img className="brand-mark" src={logo} alt="MaxOut Technologies" />
            <div>
              <p className="brand-title">MaxOut Technologies</p>
              <p className="brand-subtitle">Wireless Security & Life Safety</p>
            </div>
            <img
              className="brand-badge"
              src={cinchMaxoutBadge}
              alt="Cinch MaxOut 20-year"
            />
          </div>
          <nav className="site-nav">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className="nav-link">
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-title">MaxOut Technologies</p>
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
