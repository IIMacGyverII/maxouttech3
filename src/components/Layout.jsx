import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/images/maxout_logo.jpg'

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
            <img className="brand-mark" src={logo} alt="Maxouttech" />
            <div>
              <p className="brand-title">Maxouttech</p>
              <p className="brand-subtitle">Wireless Security & Life Safety</p>
            </div>
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
            <p className="footer-title">Maxouttech</p>
            <p className="footer-text">
              High-performance wireless sensors, life safety devices, and control
              solutions for residential and commercial environments.
            </p>
          </div>
          <div>
            <p className="footer-title">Contact</p>
            <p className="footer-text">Sales: sales@maxouttech.com</p>
            <p className="footer-text">Support: support@maxouttech.com</p>
          </div>
          <div>
            <p className="footer-title">Location</p>
            <p className="footer-text">Texas, USA</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
