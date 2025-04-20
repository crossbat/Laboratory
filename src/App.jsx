import Header from './Components/Commons/Header/header'
import style from './App.module.css'
import { Router, Routes } from 'react-router'
import { Route } from 'react-router'
import ExDetail from './Pages/ExperimentDetail/ExDetail'
import Home from './Pages/Home/Home'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ExDetail />} />
      </Routes>
    </div>
  )
}

export default App
