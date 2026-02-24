import cinchMaxoutBadge from '../assets/images/CinchMaxout20year.webp'

function Anniversary() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <div className="detail-grid" style={{ alignItems: 'start' }}>
            <div>
              <h1>
                Celebrating 20 Years of Innovation: CINCH Systems and MaxOut
                Technology
              </h1>
              <p className="lead">
                As of January 1, 2026 - we a mark a milestone, CINCH Systems
                and MaxOut Technology are thrilled to celebrate 20 years of
                pioneering advancements in high-security and life-safety
                solutions. From our roots that were formed at ITI in North St.
                Paul, Minnesota in the 1990's through the formation of CINCH
                systems in 2006 we've grown into trusted leaders in the security
                industry, delivering cutting-edge products that protect government
                facilities, critical infrastructure, small businesses and homes.
              </p>
            </div>
            <div className="detail-media">
              <img
                src={cinchMaxoutBadge}
                alt="Cinch Systems and MaxOut Technology 20-year anniversary"
              />
            </div>
          </div>

          <h2>A Legacy of Excellence in Security</h2>
          <p>
            Founded with a focus on high-security technology and customer-driven
            solutions and ease of use, CINCH Systems has specialized in
            engineering and manufacturing encrypted security products for over
            two decades. With more than 200 combined years of experience among
            our team, we've earned the trust of prestigious clients including
            the U.S. Government, Department of Defense (DOD), U.S. Department of
            State, U.S. Supreme Court, U.S. Army Corps of Engineers, and more.
          </p>
          <p>
            CINCH systems' products portfolio includes:
          </p>
          <p>
            Encrypted Intrusion Detection Systems (IDS) ranging from SCIF-level
            protection to campus-style implementations, ensuring fast and
            reliable deployment for mission-critical environments.
          </p>
          <p>
            Encrypted Vehicle Barrier (VBS) Controls controlling barriers and
            bollards to prevent or allow entry to secure facilities along with
            data logging.
          </p>
          <p>
            Encrypted Gate Entry Controls controlling the entry to secure
            facilities along with data logging and archiving.
          </p>
          <p>
            MaxOut Technology wireless products with 30 years+ of collective
            experience in wireless technology. Our sensors are compatible with
            leading controls from UTC®, Interlogix®, GE®, Qolsys, Honeywell®,
            2GIG®, and DSC®. Featuring superior RF range, our "100% factory
            tested" promise for reliable performance, and utilizing the
            longest-life batteries for fewer service calls. MaxOut produces the
            most advanced, reliable, secure, easy-to-use, and compact devices
            available.
          </p>
          <p>
            MaxOut Technology product portfolio includes:
          </p>
          <p>
            Security Sensors Including: Mini Door/Window Sensors, Recessed and
            Outdoor models, Glass Break Detectors, PIR Motion Sensors, Water
            Sensors, and wireless system Keyfob Contros.
          </p>
          <p>
            Life-Safety Devices Including Rate-of-Rise Heat Detectors,
            Smoke/Heat/CO Combination Detectors, Keyfob Panic, and Long-Range
            Panic Buttons.
          </p>

          <h2>Highlighting Our Innovative Products</h2>
          <p>
            We've continually expanded our offerings to meet the evolving
            security need for robust protection for high-stakes environments
            from U.S. Embassies to your home.
          </p>
          <p>
            All of our products are backed with a one year warrantee and are
            backed by our technical support staff that are here to assist with
            answers to installation questions should the need arise.
          </p>

          <h2>Looking Back: Milestones and Achievements</h2>
          <p>
            Since our inception, CINCH Systems has been at the forefront of
            high-security advancements, earning recognition as a trusted
            supplier to the federal government and GSA.
          </p>
          <ul className="detail-list">
            <li>9 U.S. Security Product Patents</li>
            <li>Developing UL 325-compliant products for secure access control.</li>
            <li>Expanding our engineering facilities to support continuous innovation.</li>
            <li>
              Building lasting partnerships with government and commercial
              entities to safeguard critical assets.
            </li>
          </ul>

          <h2>Forward-Thinking: Our Vision for the Next 20 Years</h2>
          <p>
            As we celebrate this 20-year anniversary, we're excited about the
            future. With a focus on emerging technologies like enhanced
            encryption, AI-driven detection, and sustainable designs, CINCH
            Systems and MaxOut Technology are poised to lead the industry into
            a new era of security.
          </p>
          <p>
            For more information, visit{' '}
            <a href="https://www.cinchsystems.com" target="_blank" rel="noreferrer">
              www.cinchsystems.com
            </a>{' '}
            or{' '}
            <a href="https://www.maxouttech.com" target="_blank" rel="noreferrer">
              www.maxouttech.com
            </a>
            . Contact us at{' '}
            <a href="mailto:info@maxouttech.com">info@maxouttech.com</a> or{' '}
            <a href="tel:+17634971059">763-497-1059</a>.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Anniversary
