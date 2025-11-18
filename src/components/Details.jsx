import React from 'react'
import './Details.css'
import TiltedCard from './TiltedCard'

const Details = () => {
  return (
    <section id="details" className="details">
      <div className="container">
        <h2 className="section-title">Детали мероприятия</h2>
        
        <div className="details-intro">
          <TiltedCard
            imageSrc={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%23f5e6d3'/><stop offset='100%' stop-color='%23ffffff'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g)'/></svg>`}
            containerHeight="var(--intro-card-height)"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={8}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="detail-tilted-overlay">
                <div className="detail-icon">📍</div>
                <h3 className="detail-title">Место проведения</h3>
                <p className="detail-description">Место: Ресторан «Городок 37»</p>
                <p className="detail-description">Зал: Шатер</p>
                <p className="detail-additional-description">г. Кохма, ул. Ивановская., д. 6.</p>
              </div>
            }
          />
        </div>
        
        <div className="details-grid">
          <TiltedCard
            imageSrc={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%23ffffff'/><stop offset='100%' stop-color='%23f5e6d3'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g)'/></svg>`}
            containerHeight="var(--detail-card-height)"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.08}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="detail-tilted-overlay">
                <div className="detail-icon">🥂</div>
                <h3 className="detail-title">Фуршет</h3>
                <p className="detail-time">14:00</p>
              </div>
            }
          />

          <TiltedCard
            imageSrc={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%23f5e6d3'/><stop offset='100%' stop-color='%23ffffff'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g)'/></svg>`}
            containerHeight="var(--detail-card-height)"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.08}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="detail-tilted-overlay">
                <div className="detail-icon">🎉</div>
                <h3 className="detail-title">Банкет</h3>
                <p className="detail-time">15:00</p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  )
}

export default Details

