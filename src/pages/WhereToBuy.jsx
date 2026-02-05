const channels = [
  {
    title: 'Authorized distributors',
    text: 'Partner with nationwide distributors for rapid fulfillment.',
  },
  {
    title: 'Security integrators',
    text: 'Work with certified integrators for design and installation.',
  },
  {
    title: 'OEM partnerships',
    text: 'Build customized programs with our OEM team.',
  },
]

function WhereToBuy() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <p className="eyebrow">Where to buy</p>
          <h1>Find a partner near you.</h1>
          <p className="lead">
            We connect you with distributors and integrators that best match your
            project scope and location.
          </p>
          <div className="highlight-grid">
            {channels.map((channel) => (
              <div className="highlight-card" key={channel.title}>
                <h3>{channel.title}</h3>
                <p>{channel.text}</p>
              </div>
            ))}
          </div>
          <div className="cta-banner">
            <div>
              <h3>Need help locating inventory?</h3>
              <p>Send your requirements and our team will respond quickly.</p>
            </div>
            <button className="button primary" type="button">
              Contact sales
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhereToBuy
