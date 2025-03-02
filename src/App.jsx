import { Routes, Route } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { HomePage } from './pages/HomePage'
import { Detales } from './pages/Detales'
import { NotFound } from './pages/NotFound'

function App() {
  const [countries, setCountries] = useState([]);
   
  return (
    <>
      <Header/>
      <Main>
          <Routes>
            <Route path='/' element={<HomePage countries={countries} setCountries={setCountries}/>}/>              
            <Route path='/country/:name' element={<Detales/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </Main>
    </>
  )
}

export default App
