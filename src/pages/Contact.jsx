import { MetaTags } from '../components/MetaTags'

function Contact() {
  return (
    <>
      <MetaTags 
        title="Contact | MaxOut Technology"
        description="Get in touch with our sales and support teams. Questions about product compatibility, installation, or finding an authorized distributor? Contact MaxOut Technology."
        url="https://maxouttech.com/#/contact"
      />
      <div className="page">
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="eyebrow">Contact</p>
            <h1>Connect with our team.</h1>
            <p className="lead">
              Questions on compatibility, installation, or help finding a
              distributor?
            </p>
            <div className="contact-cards">
              <div className="contact-card">
                <p className="contact-title">Sales</p>
                <p className="contact-text">
                  <a href="mailto:sales@maxouttech.com">sales@maxouttech.com</a>
                </p>
                <p className="contact-text">
                  <a href="tel:+17634971059">+1 (763) 497-1059</a> CST
                </p>
              </div>
              <div className="contact-card">
                <p className="contact-title">Support</p>
                <p className="contact-text">
                  <a href="mailto:support@maxouttech.com">support@maxouttech.com</a>
                </p>
                <p className="contact-text">
                  <a href="tel:+17634971059">+1 (763) 497-1059</a> CST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Contact
