import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect (() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      work
      <button onClick={onClose}>закрыть</button>
    </div>
  )
}

export default App
