import React from 'react'
import './Wishes.css'
import AnimatedList from './AnimatedList'

export default function Wishes() {
  const items = [
    'Ваши поздравления и присутствие — самый дорогой для нас подарок. Если же вы хотите нас порадовать, мы будем бесконечно благодарны вашему вкладу в наше совместное будущее.',
    'Наш день будет наполнен элегантностью и стилем. Мы будем рады, если вы поддержите это настроение в своих нарядах.',
    'Если что-то осталось неясным, мы всегда на связи и с удовольствием всё поясним.'
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


