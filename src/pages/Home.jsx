import { MetaTags } from '../components/MetaTags'
import heroImage from '../assets/images/homeradar.webp'
import businessImage from '../assets/images/business.png'

function Home() {
  return (
    <>
      <MetaTags 
        title="MaxOut Technology | Wireless Security Sensors & Life Safety Devices"
        description="High-performance wireless security sensors, life safety detectors, and control solutions for residential and commercial properties. Explore our complete product lineup."
        url="https://IIMacGyverII.github.io/maxouttech3/"
      />
      <div className="page">
        <section className="section" style={{ paddingTop: '20px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h1 style={{ color: '#d00000', fontSize: '1.8rem', marginBottom: '8px' }}>
                Wireless Security and Life-Safety Sensing Products
              </h1>
              <p className="lead" style={{ fontWeight: '600', margin: '0' }}>
                Professional Sensing Products for Professional Security Dealers
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '20px', alignItems: 'flex-end', maxWidth: '700px', margin: '0 auto 20px auto' }}>
              <div style={{ textAlign: 'center' }}>
                <img 
                  src={heroImage} 
                  alt="Protecting homes" 
                  style={{ width: '280px', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '8px', display: 'block', margin: '0 auto 8px auto' }}
                />
                <p style={{ fontWeight: '600', margin: '0', fontSize: '1rem' }}>Protecting Homes</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img 
                  src={businessImage} 
                  alt="Protecting business" 
                  style={{ width: '280px', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '8px', display: 'block', margin: '0 auto 8px auto' }}
                />
                <p style={{ fontWeight: '600', margin: '0', fontSize: '1rem' }}>Protecting Business</p>
              </div>
            </div>

            <p className="lead" style={{ fontWeight: '600', textAlign: 'center', marginBottom: '16px' }}>
              Wireless security sensors, detectors, and life-safety products look and appear to be the same. Unless 
              the wireless sensors and detectors are engineered with MaxOut™ Technology!
            </p>

            <p style={{ marginBottom: '16px' }}>
              MaxOut™ Technology is different—a difference you can see in the precision that goes into the PC board and 
              components with attention to the smallest detail. Details that are so important to reliable performance of 
              security and life safety! MaxOut™ high performance sensors deliver the maximum FCC allowable output to 
              deliver the maximum signal strength and range. Every MaxOut Sensor is 100% tested for maximum 
              performance, range, and reliability.
            </p>

            <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>MaxOut™ Technology Is:</h2>

            <p style={{ marginBottom: '12px' }}>
              <strong>Experienced</strong> - The new wireless sensor company that has been making wireless security 
              products for over 30 years. You can trust the sensors, detectors, and life safety devices engineered and 
              designed by the people who invented and perfected wireless security systems; MaxOut™ Technology.
            </p>

            <p style={{ marginBottom: '12px' }}>
              <strong>A Proven Security Innovator</strong> - Continuous Product Improvement on our security products 
              has resulted in 9 U.S. Patents and groundbreaking development of encrypted security systems.
            </p>

            <p style={{ marginBottom: '16px' }}>
              <strong>A Trusted Engineering and Development Partner</strong> - MaxOut™ Technology has been behind 
              many of the security products used for residential, commercial, and high security today.
            </p>

            <p style={{ fontWeight: '600', marginBottom: '8px' }}>
              Engineered to outperform and outlast other wireless sensors with:
            </p>

            <ul className="detail-list">
              <li>Patented, raised antenna design for maximum RF transmission.</li>
              <li>Heavy gauge antenna wire increases signal strength and extends.</li>
              <li>MaxPower Management – MPM. Most sensors powered by 2 batteries to deliver up to 8 years 
              life with no gradual power degradation.</li>
              <li>Batteries are positioned below components for no "dead reception" areas.</li>
              <li>High-tension battery holders to maximize battery life.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
