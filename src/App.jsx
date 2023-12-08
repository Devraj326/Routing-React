import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
function App(){
  return(
    <div className='App
    '>
      <Navbar/>
      <div className='Body'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App