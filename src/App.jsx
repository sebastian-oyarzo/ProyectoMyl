import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navdar from './components/Navdar'
import { Home } from './views/Home'
import Results from './views/Results'

function App() {

  return (
    <>
    <Navdar />
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/resultados' element={ <Results/> } />
    </Routes>
    </>
  )
}

export default App
