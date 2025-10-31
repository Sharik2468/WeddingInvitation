import React from 'react'
import './Hero.css'
import GlareHover from './GlareHover'

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
          <GlareHover
            width="auto"
            height="auto"
            background="rgba(255,255,255,0.9)"
            borderRadius="12px"
            borderColor="transparent"
            glareColor="#ffffff"
            glareOpacity={0.35}
            glareAngle={-30}
            glareSize={250}
            transitionDuration={800}
            className="date-glare"
            style={{ padding: '0rem' }}
          >
            <div className="date-box">
              <span className="date-day">24</span>
              <span className="date-month">Июля</span>
              <span className="date-year">2026</span>
            </div>
          </GlareHover>
        </div>
        <div className="ornament">❦</div>
      </div>
    </section>
  )
}

export default Hero

