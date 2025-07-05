import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Mainpg from './pages/Mainpg'
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/mainpage' element={<Mainpg/>}/>
      
    </Routes>
      
      
      
    </>
  )
}

export default App
