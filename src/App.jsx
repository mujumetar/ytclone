import { Ri24HoursFill, RiFacebookBoxFill } from '@remixicon/react';
import './App.css'
import Canvas from './components/Canvas'
import Home from './components/Home'
import Navbar from "./components/Navbar";
// import Videos from './components/Videos';
import Login from './components/Login';
import { useSelector } from 'react-redux';

function App() {
    let auth = useSelector(state => state.auth.auth)
  return (
    <>
     {/* {auth && <Navbar />} */}
      {/* {!auth && <Login />} */}

      <Canvas />
      <Navbar />
      <Login/>
      <Home />
      {/* <Videos/> */}
    </>
  )
}

export default App
