import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthPage from './page/Auth'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { loginAction } from './redux/action/accountAction'

function App() {
  const dispatch = useDispatch();
  useEffect(() =>{
    if(localStorage.getItem("SINI-BREE")){
      dispatch(loginAction(JSON.parse(localStorage.getItem("woii"))))
    }
  }, [])

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<AuthPage/>}/>
        <Route path='/home' element={<AuthPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
