import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navdar from './components/Navdar'
import { Home } from './views/Home'

function App() {

  return (
    <>
    <Navdar />
    <Routes>
      <Route path='/' element={<Home/>} />

    </Routes>
    </>
  )
}

export default App
