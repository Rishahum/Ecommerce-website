import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home.jsx'
import { About } from './Components/About.jsx';
import { Choose } from './Components/Choose.jsx';
import { Services } from './Components/Services.jsx';
import { Review } from './Components/Review.jsx';
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/choose' element={<Choose/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/review' element={<Review/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
