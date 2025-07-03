import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'

function App() {
  return (
    <div>
      <Hero/>
      <Routes>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/footer' element={<Footer/>}/>
      </Routes>
      
      
      
    </div>
  )
}

export default App
