import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // Add color state and color options
  const colorOptions = ['#f8fafc', '#fef9c3', '#d1fae5', '#fee2e2', '#e0e7ff', '#f3e8ff', '#f1f5f9', '#0f172a'];
  const [colorIndex, setColorIndex] = useState(0);
  const handleChangeColor = () => setColorIndex(i => (i + 1) % colorOptions.length);

  return (
    <div style={{ minHeight: '100vh', background: colorOptions[colorIndex], transition: 'background 0.4s' }}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* Change color button */}
        <button style={{ marginLeft: 12 }} onClick={handleChangeColor}>
          Change color
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
