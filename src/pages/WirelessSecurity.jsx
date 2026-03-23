import { useState } from 'react'
import rfCmdwsImage from '../assets/images/RF-CMDWS-319-NN.png'
import dwBoardTopImage from '../assets/images/DW Board top.png'
import dwBoardBottomImage from '../assets/images/DWBoardBottom-SideAngle.png'

import { MetaTags } from '../components/MetaTags'

function WirelessSecurity() {
  const [modalImage, setModalImage] = useState(null)

  const openModal = (imageSrc) => {
    setModalImage(imageSrc)
  }

  const closeModal = () => {
    setModalImage(null)
  }

  return (
    <>
      <MetaTags 
        title="Wireless Security | MaxOut Technology"
        description="Discover flexible, scalable wireless security solutions for residential and commercial environments. MaxOut Technology's wireless platform provides multi-point coverage with enterprise-grade reliability."
        url="https://IIMacGyverII.github.io/maxouttech3/#/wireless-security"
      />
      <div className="page">
      <section className="section">
        <div className="container split-grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
          <div>
            <p className="eyebrow">MaxOut Technology</p>
            <h1>Wireless Sensing Refined</h1>
            <p className="lead">
              MaxOut™ wireless sensors and detectors are different and perform better!
            </p>
            <p className="lead">
              Better and different because they are engineered with MaxOut™ Technology…wireless engineering that maximizes the allowable FCC power output for maximized wireless transmission range and device response.
            </p>
            <h3>MaxOut™ Technology features:</h3>
            <ul className="detail-list">
              <li>Sensors and detectors with the maximum FCC allowable output power for maximum signal strength and range.</li>
              <li>Patented raised antenna design that is above the components and away from the power source (batteries) for maximum RF transmission and no power source interference.</li>
              <li>Heavy gauge bronze antenna wire increases signal transmission strength and extends range.</li>
              <li>Every MaxOut sensor is 100% tested…. Not 1 sensor out of: 10, 20, or 100 - Every sensor is tested for performance before it is boxed!</li>
            </ul>
            <h3>MaxPower Management – For batteries that keep on running!</h3>
            <ul className="detail-list">
              <li>Most MaxOut sensors are engineered with two batteries to deliver up to 8 years life with no gradual power degradation</li>
              <li>Batteries are located below the components and antenna to avoid wireless interference and no "dead reception" areas.</li>
              <li>High-tension battery holders – important to maximize battery life.</li>
            </ul>
          </div>
          <div className="image-stack" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px' }}>
            <img 
              src={rfCmdwsImage} 
              alt="MaxOut RF Sensor" 
              onClick={() => openModal(rfCmdwsImage)}
              style={{ width: '100%', cursor: 'pointer', maxWidth: '270px' }}
            />
            <img 
              src={dwBoardTopImage} 
              alt="Door/Window Sensor Circuit Board Top" 
              onClick={() => openModal(dwBoardTopImage)}
              style={{ width: '100%', cursor: 'pointer', maxWidth: '300px' }}
            />
            <img 
              src={dwBoardBottomImage} 
              alt="Door/Window Sensor Circuit Board Bottom" 
              onClick={() => openModal(dwBoardBottomImage)}
              style={{ width: '100%', cursor: 'pointer', maxWidth: '300px' }}
            />
          </div>
        </div>
      </section>

      {modalImage && (
        <div 
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer'
          }}
        >
          <img 
            src={modalImage} 
            alt="Full size" 
            style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
          />
        </div>
      )}
    </div>
    </>
  )
}

export default WirelessSecurity
