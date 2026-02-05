const resources = [
  {
    title: 'Installation guides',
    description: 'Step-by-step setup instructions for field teams.',
  },
  {
    title: 'Product datasheets',
    description: 'Technical specifications, RF ranges, and certifications.',
  },
  {
    title: 'Integration notes',
    description: 'Best practices for panel and platform compatibility.',
  },
]

function Documentation() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <p className="eyebrow">Documentation</p>
          <h1>Resources to deploy faster.</h1>
          <p className="lead">
            Access documentation to streamline installations and ensure long-term
            performance.
          </p>
          <div className="resource-grid">
            {resources.map((resource) => (
              <div className="resource-card" key={resource.title}>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <button className="button ghost" type="button">
                  Request PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Documentation
