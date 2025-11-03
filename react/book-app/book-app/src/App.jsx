import { useState } from 'react'
import Book from './component/book'
import Navbar from './component/navbar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Book />
      </div>
    </>
  )
}

export default App
