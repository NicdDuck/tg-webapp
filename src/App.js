import { useEffect } from 'react'
import './App.css'
const tg = window.Telegram.WebApp
import Header from './components/Header/Header'

function App() {

  useEffect (() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      work
      <Header/>
    </div>
  )
}

export default App
