import React from 'react'
import { Calendar, Badge } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import './CalendarSection.css'

const weddingDate = dayjs('2026-07-24')

export default function CalendarSection() {
  return (
    <section id="calendar" className="calendar-section">
      <div className="container">
        <h2 className="section-title">Календарь</h2>
        <div className="calendar-card">
          <Calendar
            fullscreen={false}
            defaultValue={weddingDate}
            value={weddingDate}
            disabled
            fullCellRender={(value, info) => {
              if (info.type === 'date') {
                const isWedding = value.isSame(weddingDate, 'day')
                return (
                  <div className={`cal-cell ${isWedding ? 'cal-cell--wedding' : ''}`}>
                    <span>{value.date()}</span>
                  </div>
                )
              }
              return info.originNode
            }}
            headerRender={({ value }) => (
              <div className="cal-header">
                <span>
                  {value.locale('ru').format('MMMM YYYY')}
                </span>
                <Badge color="var(--primary-color)" text="День свадьбы" />
              </div>
            )}
          />
        </div>
      </div>
    </section>
  )
}


