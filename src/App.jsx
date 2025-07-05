import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Mainpg from './pages/Mainpg'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Homepage/>}>
        <Route index element={<Hero/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/mainpage' element={<Mainpg/>}/>
      </Route>
    </Routes>
      
      
      
    </>
  )
}

export default App
