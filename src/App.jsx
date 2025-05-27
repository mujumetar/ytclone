import { Ri24HoursFill, RiFacebookBoxFill } from '@remixicon/react';
import './App.css'
import Canvas from './components/Canvas'
import Home from './components/Home'

import Navbar from "./components/Navbar";
// import Videos from './components/Videos';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
// import { authReducer } from './features/authSlice';
// import { Routes, Route } from "react-router-dom";

function App() {
  let auth = useSelector(state => state.auth.auth)
  return (
    <>
      {/* {auth && <Navbar />} */}
      {/* {!auth && <Login />} */}

<Login />
      {/* <Routes>
        <Route path='/' element={} />
      </Routes> */}
      <Canvas/>
      {/* <Navbar /> */}

      <Home />
      {/* <Videos/> */}
    </>
  )
}

export default App
