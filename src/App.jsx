import './App.css'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'

import { CountdownContext } from './context/CountdownContext'

import Foguete from "./assets/f.jpg"
function App() {
  const {event} = useContext(CountdownContext)

  let eventImage = null;

  if (event) eventImage = event.image;
  return (
    <div className='App' style={
      eventImage 
        ? {backgroundImage: `url(${eventImage})`}
        : {backgroundImage: `url(${Foguete})`}
        }
        >
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
