import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#home" className="nav-link">Главная</a>
        <a href="#details" className="nav-link">Детали</a>
        <a href="#rsvp" className="nav-link">RSVP</a>
      </nav>
    </header>
  )
}

export default Header

