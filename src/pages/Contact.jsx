function Contact() {
  return (
    <div className="page">
      <section className="section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Connect with our team.</h1>
            <p className="lead">
              Tell us about your project and we’ll help you design the right
              wireless security package.
            </p>
            <div className="contact-cards">
              <div className="contact-card">
                <p className="contact-title">Sales</p>
                <p className="contact-text">sales@maxouttech.com</p>
                <p className="contact-text">+1 (763) 497-1059</p>
              </div>
              <div className="contact-card">
                <p className="contact-title">Support</p>
                <p className="contact-text">support@maxouttech.com</p>
                <p className="contact-text">+1 (763) 497-1059</p>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Company
              <input type="text" placeholder="Company name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@company.com" />
            </label>
            <label>
              Message
              <textarea rows="4" placeholder="How can we help?" />
            </label>
            <button className="button primary" type="button">
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
