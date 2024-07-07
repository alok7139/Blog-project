import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'



function App() {


  return (
    <>
    <Header/>
    
    <Routes>
     
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/sign-in' element={ <Signin/>}/>
     <Route path='/sign-up' element={ <Signup/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/project' element={<Project/>}/>


    </Routes>
      
    </>
  )
}

export default App
