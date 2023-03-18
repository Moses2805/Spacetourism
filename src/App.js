import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Destination from './components/Destination';
import Header from './components/Header';
import Crew from './components/Crew';
import Technology from './components/Technology';
import 'animate.css';

function App() {

  const [backgroundImg, setBackgroundImg] = useState(1);
  const [bg, setBg] = useState("bgOne")

  function changeBackground(value) {
      setBackgroundImg(value)
  }

  useEffect(() => {
    if(backgroundImg === 1) {
      setBg("bgOne")
    } else if(backgroundImg === 2) {
      setBg("bgTwo")
    } else if(backgroundImg === 3 ) {
      setBg("bgThree")
    } else {
      setBg("bgFour")
    }
  }, [backgroundImg])

  return (
    <div className={`App ${bg}`}>
      <Header changeBackground={changeBackground} />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Destination' element={<Destination />} />
          <Route path='/Crew' element={<Crew />} />
          <Route path='/Technology' element={<Technology />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
