import React, { useEffect, useMemo, useState } from 'react'
import Counter from './Counter'
import './CountdownSection.css'

const targetDate = new Date('2026-07-24T15:00:00+03:00')

function getTimeParts(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000))
  const days = Math.floor(totalSeconds / (24 * 3600))
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return { days, hours, minutes, seconds }
}

function toPlaces(value, digits) {
  const str = String(value).padStart(digits, '0')
  return Array.from({ length: digits }, (_, i) => 10 ** (digits - 1 - i))
}

const Label = ({ children }) => (
  <span className="cd-label">{children}</span>
)

export default function CountdownSection() {
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const diff = useMemo(() => Math.max(0, targetDate.getTime() - now), [now])
  const { days, hours, minutes, seconds } = useMemo(() => getTimeParts(diff), [diff])

  return (
    <section id="countdown" className="countdown">
      <div className="container">
        <h2 className="section-title">Таймер обратного отсчета</h2>
        <div className="cd-grid">
          <div className="cd-item">
            <Counter value={days} places={toPlaces(days, 3)} fontSize={56} textColor="#2c2c2c" fontWeight={800} />
            <Label>дней</Label>
          </div>
          <div className="cd-item">
            <Counter value={hours} places={toPlaces(hours, 2)} fontSize={56} textColor="#2c2c2c" fontWeight={800} />
            <Label>часов</Label>
          </div>
          <div className="cd-item">
            <Counter value={minutes} places={toPlaces(minutes, 2)} fontSize={56} textColor="#2c2c2c" fontWeight={800} />
            <Label>минут</Label>
          </div>
          <div className="cd-item">
            <Counter value={seconds} places={toPlaces(seconds, 2)} fontSize={56} textColor="#2c2c2c" fontWeight={800} />
            <Label>секунд</Label>
          </div>
        </div>
      </div>
    </section>
  )
}


