import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1>Page not found.</h1>
          <p className="lead">Let’s get you back to the site.</p>
          <Link className="button primary" to="/">
            Return home
          </Link>
        </div>
      </section>
    </div>
  )
}

export default NotFound
