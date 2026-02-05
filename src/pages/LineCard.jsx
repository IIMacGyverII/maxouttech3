import securityDataSupplyLogo from '../assets/images/security-data-supply-logo-crop-u10548.png'
import wescoLogo from '../assets/images/wesco.png'
import loneStarLogo from '../assets/images/lone star.png'
import sssiLogo from '../assets/images/sssi_logo-clear.png'

const partners = [
  {
    name: 'Security Data Supply',
    logo: securityDataSupplyLogo,
  },
  { name: 'Wesco', logo: wescoLogo },
  { name: 'Lone Star', logo: loneStarLogo },
  { name: 'SSSI', logo: sssiLogo },
]

function LineCard() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <p className="eyebrow">Line card</p>
          <h1>Trusted distribution partners.</h1>
          <p className="lead">
            Maxouttech works with distributors and integrators nationwide.
          </p>
          <div className="logo-grid">
            {partners.map((partner) => (
              <div key={partner.name} className="logo-card">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default LineCard
