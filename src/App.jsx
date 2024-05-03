import './App.css'
import { Outlet } from 'react-router-dom'

import Foguete from "./assets/f.jpg"
function App() {
  return (
    <div className='App' style={{backgroundImage: `url(${Foguete})`}}>
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
