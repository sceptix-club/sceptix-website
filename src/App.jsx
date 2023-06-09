import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/landing/landing'
import TeamPage from './components/team/team'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TeamPage/>
    </>
  )
}

export default App
