import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Invitation from './components/Invitation'
import CalendarSection from './components/CalendarSection'
import Details from './components/Details'
import CountdownSection from './components/CountdownSection'
import Wishes from './components/Wishes'
import Survey from './components/Survey'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import Iridescence from './components/Iridescence'
import './App.css'

function App() {
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false)

  const handleRSVP = (data) => {
    console.log('RSVP Data:', data)
    setRsvpSubmitted(true)
    setTimeout(() => setRsvpSubmitted(false), 3000)
  }

  return (
    <div className="App">
      <Iridescence color={[1, 1, 1]} amplitude={0.12} speed={0.4} mouseReact={true} />
      <div className="app-content">
        <Header />
        <Hero />
        <Invitation />
        <CalendarSection />
        <Details />
        <CountdownSection />
        <Wishes />
        <Survey />
        {/* <RSVP onSubmit={handleRSVP} submitted={rsvpSubmitted} /> */}
        <Footer />
      </div>
    </div>
  )
}

export default App

