import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Name from './components/Name'
import Api from './components/Api'
import Pokemon from './components/Pokemon'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
     <h1>WELCOME REACT</h1>

     <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/s' element={<Statebasics />}></Route>
      <Route path='/a' element={<Counter />}></Route>
      <Route path='/n' element={<Name />}></Route>
      <Route path='/api' element={<Api/>}></Route>
      <Route path='/pokemon' element={<Pokemon/>}></Route>

    



     </Routes>

    
   
    </>
  )
}

export default App
