import { useState } from 'react'
import './component/Mainpage.tsx'
import './App.css'
import Mainpage from './component/Mainpage.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Mainpage />
    </div>
  )
}

export default App
