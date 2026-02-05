import aboutImage from '../assets/images/2__home.jpg'

function About() {
  return (
    <div className="page">
      <section className="section">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">About Maxouttech</p>
            <h1>Wireless technology built for real-world security.</h1>
            <p className="lead">
              Maxouttech designs sensors and life safety devices that pair
              dependability with fast installation. Our focus is providing
              partners with flexible solutions that scale from homes to
              enterprise deployments.
            </p>
            <div className="stat-grid">
              <div>
                <p className="stat-value">20+ yrs</p>
                <p className="stat-label">Industry expertise</p>
              </div>
              <div>
                <p className="stat-value">100k+</p>
                <p className="stat-label">Devices deployed</p>
              </div>
              <div>
                <p className="stat-value">24/7</p>
                <p className="stat-label">Support readiness</p>
              </div>
            </div>
          </div>
          <div className="about-media">
            <img src={aboutImage} alt="Modern security coverage" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
