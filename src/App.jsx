import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Details from './components/Details'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
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
      <Header />
      <Hero />
      <Details />
      <RSVP onSubmit={handleRSVP} submitted={rsvpSubmitted} />
      <Footer />
    </div>
  )
}

export default App

