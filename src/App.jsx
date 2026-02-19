import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import About from './pages/About'
import Anniversary from './pages/Anniversary'
import Contact from './pages/Contact'
import Documentation from './pages/Documentation'
import Home from './pages/Home'
import LineCard from './pages/LineCard'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import WhereToBuy from './pages/WhereToBuy'
import WirelessSecurity from './pages/WirelessSecurity'
import { legacySlugs } from './data/products'

const legacyPageRedirects = [
  { from: '/about-us', to: '/about' },
  { from: '/contact-us', to: '/contact' },
  { from: '/documentation', to: '/documentation' },
  { from: '/line-card', to: '/line-card' },
  { from: '/products', to: '/products' },
  { from: '/where-to-buy', to: '/where-to-buy' },
  { from: '/wireless-security', to: '/wireless-security' },
]

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/anniversary" element={<Anniversary />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/wireless-security" element={<WirelessSecurity />} />
          <Route path="/line-card" element={<LineCard />} />
          <Route path="/where-to-buy" element={<WhereToBuy />} />
          {legacySlugs.map((slug) => (
            <Route
              key={slug}
              path={`/${slug}`}
              element={<Navigate to={`/products/${slug}`} replace />}
            />
          ))}
          {legacyPageRedirects.map((item) => (
            <Route
              key={item.from}
              path={`${item.from}.html`}
              element={<Navigate to={item.to} replace />}
            />
          ))}
          <Route path="/index" element={<Navigate to="/" replace />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
