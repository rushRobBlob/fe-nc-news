import { useState } from 'react'
import Header from './components/Header.jsx'
import Routing from './components/Routing.jsx'
import './App.css'


function App() {


  return (
    <>
      <Header />
      <main className="main">
        <Routing />
      </main>
    </>
  )
}

export default App
