import React from 'react'
import './Wishes.css'
import AnimatedList from './AnimatedList'

export default function Wishes() {
  const items = [
    'Лучший подарок — ваше присутствие и улыбки.',
    'Мы будем рады открыткам с тёплыми словами.',
    'Цветы заменим сладостями или бутылочкой вина.'
  ]
  return (
    <section id="wishes" className="wishes">
      <div className="container">
        <h2 className="section-title">Наши пожелания</h2>
        <AnimatedList
          items={items}
          showGradients={false}
          enableArrowNavigation={true}
          displayScrollbar={false}
        />
      </div>
    </section>
  )
}


