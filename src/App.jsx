import { Ri24HoursFill, RiFacebookBoxFill } from '@remixicon/react';
import './App.css'
import Canvas from './components/Canvas'
import Home from './components/Home'
import Navbar from "./components/Navbar";
import Videos from './components/Videos';

function App() {
  return (
    <>
      <Canvas />
      <Navbar />
      <Home />
      {/* <Videos/> */}
    </>
  )
}

export default App
