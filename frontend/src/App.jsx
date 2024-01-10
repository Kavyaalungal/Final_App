
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './Pages/About'
import Category from './Pages/Category'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom'
import Login from './Pages/Login'
import Newproduct from './Pages/Newproduct'
import Signup from './Pages/Signup'
function App() {
 

  return (
    <div>
     
      <BrowserRouter>
<Navbar/>
<Routes>
  <Route index element={<Home/>}/>
  <Route path='/category' element={<Category/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/newproduct' element={<Newproduct/>}/>
  <Route path='/signup' element={<Signup/>}/>
</Routes>
</BrowserRouter>

    </div>
  )
}

export default App
