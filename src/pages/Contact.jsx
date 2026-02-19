import { MetaTags } from '../components/MetaTags'

function Contact() {
  return (
    <>
      <MetaTags 
        title="Contact | Maxout Technology"
        description="Get in touch with our sales and support teams. Questions about product compatibility, installation, or finding an authorized distributor? Contact Maxout Technology."
        url="https://IIMacGyverII.github.io/maxouttech3/#/contact"
      />
      <div className="page">
      <section className="section">
        <div className="container contact-grid">
          <div>
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
                  <a href="tel:+17634971059">+1 (763) 497-1059</a>
                </p>
              </div>
              <div className="contact-card">
                <p className="contact-title">Support</p>
                <p className="contact-text">
                  <a href="mailto:support@maxouttech.com">support@maxouttech.com</a>
                </p>
                <p className="contact-text">
                  <a href="tel:+17634971059">+1 (763) 497-1059</a>
                </p>
              </div>
            </div>
          </div>
          <form
            className="contact-form"
            action="mailto:info@maxouttech.com"
            method="post"
            encType="text/plain"
          >
            <label>
              Name
              <input name="Name" type="text" placeholder="Your name" required />
            </label>
            <label>
              Company
              <input name="Company" type="text" placeholder="Company name" />
            </label>
            <label>
              Email
              <input
                name="Email"
                type="email"
                placeholder="you@company.com"
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="Message"
                rows="4"
                placeholder="How can we help?"
                required
              />
            </label>
            <button className="button primary" type="submit">
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
    </>
  )
}

export default Contact
