import React from 'react'
import GlareHover from './GlareHover'
import './Survey.css'

const SURVEY_URL = 'https://forms.gle/replace-with-your-form'

export default function Survey() {
  return (
    <section id="survey" className="survey">
      <div className="container">
        <h2 className="section-title">Опросник</h2>
        <div className="survey-cta">
          <a href={SURVEY_URL} target="_blank" rel="noreferrer" className="survey-link">
            <GlareHover
              width="auto"
              height="auto"
              background="var(--primary-color)"
              borderRadius="12px"
              borderColor="transparent"
              glareColor="#ffffff"
              glareOpacity={0.35}
              glareAngle={-30}
              glareSize={250}
              transitionDuration={800}
              className="survey-button"
              style={{ padding: '1rem 2rem' }}
            >
              <span className="survey-button-text">Заполнить опрос</span>
            </GlareHover>
          </a>
        </div>
      </div>
    </section>
  )
}


