import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#home" className="nav-link">Главная</a>
        <a href="#invitation" className="nav-link">Приглашение</a>
        <a href="#calendar" className="nav-link">Календарь</a>
        <a href="#details" className="nav-link">Детали</a>
        <a href="#countdown" className="nav-link">Отсчет</a>
        <a href="#wishes" className="nav-link">Пожелания</a>
        <a href="#survey" className="nav-link">Опрос</a>
      </nav>
    </header>
  )
}

export default Header

