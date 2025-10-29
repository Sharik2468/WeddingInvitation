import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="ornament">❦</div>
        <h1 className="hero-title">
          <span className="name">Никита</span>
          <span className="ampersand">&</span>
          <span className="name">Вероника</span>
        </h1>
        <p className="hero-subtitle">Приглашают вас на свадьбу</p>
        <div className="hero-date">
          <div className="date-box">
            <span className="date-day">15</span>
            <span className="date-month">Июля</span>
            <span className="date-year">2025</span>
          </div>
        </div>
        <div className="ornament">❦</div>
      </div>
    </section>
  )
}

export default Hero

