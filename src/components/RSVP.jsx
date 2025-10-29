import React, { useState } from 'react'
import './RSVP.css'

const RSVP = ({ onSubmit, submitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attendance: 'yes',
    dietary: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({
      name: '',
      guests: '1',
      attendance: 'yes',
      dietary: '',
      message: ''
    })
  }

  return (
    <section id="rsvp" className="rsvp">
      <div className="container">
        <h2 className="section-title">Подтверждение присутствия</h2>
        <p className="rsvp-subtitle">Пожалуйста, подтвердите ваше присутствие до 1 июля 2025</p>
        
        {submitted && (
          <div className="success-message">
            ✓ Спасибо! Ваш ответ получен
          </div>
        )}

        <form onSubmit={handleSubmit} className="rsvp-form">
          <div className="form-group">
            <label htmlFor="name">Ваше имя *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Введите ваше имя"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="attendance">Присутствие</label>
              <select
                id="attendance"
                name="attendance"
                value={formData.attendance}
                onChange={handleChange}
              >
                <option value="yes">Буду присутствовать</option>
                <option value="no">К сожалению, не смогу</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="guests">Количество гостей</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="dietary">Особые пожелания к меню</label>
            <input
              type="text"
              id="dietary"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              placeholder="Вегетарианское, без глютена, и т.д."
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Пожелания молодоженам</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Ваши пожелания..."
            />
          </div>

          <button type="submit" className="submit-button">
            Отправить
          </button>
        </form>
      </div>
    </section>
  )
}

export default RSVP

