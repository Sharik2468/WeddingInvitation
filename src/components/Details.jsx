import React from 'react'
import './Details.css'

const Details = () => {
  return (
    <section id="details" className="details">
      <div className="container">
        <h2 className="section-title">Детали мероприятия</h2>
        
        <div className="details-grid">
          <div className="detail-card">
            <div className="detail-icon">🏛️</div>
            <h3 className="detail-title">Церемония</h3>
            <p className="detail-time">10:00</p>
            <p className="detail-location">Комитет Ивановской области ЗАГС</p>
            <p className="detail-address">г. Иваново, ул. Батурина, д. 13.</p>
          </div>

          <div className="detail-card">
            <div className="detail-icon">🎉</div>
            <h3 className="detail-title">Банкет</h3>
            <p className="detail-time">15:00</p>
            <p className="detail-location">Городок 37</p>
            <p className="detail-address">г. Кохма, ул. Ивановская., д. 6.</p>
          </div>

          <div className="detail-card">
            <div className="detail-icon">👔</div>
            <h3 className="detail-title">Дресс-код</h3>
            <p className="detail-description">
              Четкий
            </p>
            <p className="detail-colors">
              Цвета: Тоже четкие
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details

