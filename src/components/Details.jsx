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
            <p className="detail-time">15:00</p>
            <p className="detail-location">Дворец бракосочетания №1</p>
            <p className="detail-address">ул. Английская набережная, 28</p>
          </div>

          <div className="detail-card">
            <div className="detail-icon">🎉</div>
            <h3 className="detail-title">Банкет</h3>
            <p className="detail-time">17:00</p>
            <p className="detail-location">Ресторан "Усадьба"</p>
            <p className="detail-address">Петергофское шоссе, 15</p>
          </div>

          <div className="detail-card">
            <div className="detail-icon">👔</div>
            <h3 className="detail-title">Дресс-код</h3>
            <p className="detail-description">
              Праздничный стиль
            </p>
            <p className="detail-colors">
              Цвета: пастельные оттенки, избегайте белого
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details

