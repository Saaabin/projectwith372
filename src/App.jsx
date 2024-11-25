import { Routes, Route } from 'react-router-dom'
import './App.css'
import About from './About'
import Home from './Home'
import NotFound from './NotFound'
import Card from './Uiverse'


function App () {
  return(
    <>
    <h1>Bu App JSX page</h1>
    <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/input' element={<Card/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}
export default App
