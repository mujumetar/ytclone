import { Ri24HoursFill, RiFacebookBoxFill } from '@remixicon/react';
import './App.css'
import Canvas from './components/Canvas'
import Home from './components/Home'

import Navbar from "./components/Navbar";
// import Videos from './components/Videos';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Shorts from './pages/Shorts';
// import { authReducer } from './features/authSlice';
import { Routes, Route } from "react-router-dom";

function App() {


  let authUser = useSelector(store => store.auth.auth)

  // console.log(authUser)

  return (
    <>
      {/* {auth && <Navbar />} */}
      {/* {!auth && <Login />} */}


      <Routes>
        <Route path='/' element={ !authUser &&<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shorts' element={<Shorts />} />

      </Routes>
      <Canvas />
      {/* <Navbar /> */}

      {/* <Videos/> */}
    </>
  )
}

export default App
