
import './App.css'
import { HeroSecrion } from './components/HeroSection'
import { Routes,Route } from 'react-router-dom'
import { Register } from './Pages/Register'
import { LogIn } from './Pages/LogIn'


function App() {
 

  return (
<>
             <Routes>
              <Route path='/' element={< HeroSecrion />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<LogIn />} />
              
             </Routes>
     </>
  )
}

export default App
